import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.scss';
import Layout from '../../components/Layout';
import { connect, useDispatch } from 'react-redux';
import { postAnswerText, openDisplay, closeDisplay } from '../../answers/actions';
import { fetchConductionById } from '../../conductions/actions';
import _ from 'lodash';

function ConductionQuiz(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { pid } = router.query;
  const { tests } = props.state.questions;
  const [numberOfCorrects, setCorrects] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputText, setText] = useState('');

  const handleClick = () => {
    const is_solve = inputText === tests[currentIndex].english_text;
    const request = {
      text: inputText,
      question_id: tests[currentIndex].id,
      is_solve: is_solve
    }
    if(is_solve) {
      setCorrects(numberOfCorrects + 1);
    }
    dispatch(postAnswerText(request, pid))
    .then(res => {
      dispatch(fetchConductionById(pid))
    })
    .then(() => {
      dispatch(openDisplay())
    });    
  }

  const handleSubmit = () => {
    router.push('/questions/[pid]/result', `/questions/${pid}/result`);
  }

  const handleNext = () => {
    dispatch(closeDisplay());
    setCurrentIndex(currentIndex + 1);
    setText('');
  }

  const renderAnswerButton = () => {
    if(props.state.answers.is_display) return null;
    return (
      <button onClick={handleClick}>回答</button>
    )
  }

  const renderNextButton = () => {
    if(currentIndex < tests.length - 1){
      return(
        <button onClick={handleNext}>next</button>
      )
    } else {
      return(
        <button onClick={handleSubmit}>採点</button>
      )
    }
  }

  const renderTests = () => {
    const test = tests[currentIndex];
      return (
        <div>
          <div>{numberOfCorrects}/{tests.length}</div>
          <p>No. {currentIndex + 1}</p>
          <p>Question: {test.japanese_text}</p>
          <p>Answer:<input type='text' value={inputText} onChange={(e) => {setText(e.target.value)}} /></p>
          {renderAnswerButton()}
        </div>
      )
  }

  const renderJudgement = () => {
    if(props.state.answers.answer.is_solve){
      return (
        <div>◯</div>
      )
    }else {
      return (
        <div>
          <div>✖️</div>
          <div>Correct:  {tests[currentIndex].english_text}</div>
          <div>Yours: {props.state.answers.answer.answer_text}</div>
        </div>
      )
    }
  }

  const renderAnswer = () => {
    if(props.state.answers.is_display) {
      return (
        <div>
          {renderJudgement()}
          {renderNextButton()}
        </div>
      )
    }else{
      return null;
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <p>実施番号：{ pid }</p>
        {renderTests()}
        {renderAnswer()}
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = ({ postAnswerText, fetchConductionById, openDisplay, closeDisplay })

export default connect(mapStateToProps, mapDispatchToProps)(ConductionQuiz);