import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.scss';
import Layout from '../../components/Layout';
import { connect, useDispatch } from 'react-redux';
import { fetchAnswersByConductionId } from '../../answers/actions';

function Results(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { tests } = props.state.questions;
  const score = props.state.conductions.conduction.score;
  const { pid } = router.query;

  useEffect(() => {
    dispatch(fetchAnswersByConductionId(pid));
  }, [])

  const renderScore = () => {
    return(
      <div>{tests.length}問中{score}問正解</div>
    )
  }

  const renderSolveToken = (is_solve) => {
    if(is_solve) {
      return(
        <td>◯</td>
      )
    }else {
      return (
        <td>×</td>
      )
    }
  }

  const renderMapResult = () => {
    const answers = props.state.answers.list;
    if(answers === undefined) return null;
    return(
      answers.map((answer, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{tests[index].japanese_text}</td>
            <td>{tests[index].english_text}</td>
            <td>{answer.answer_text}</td>
            {renderSolveToken(answer.is_solve)}
          </tr>
        )
      })
    )
  }

  const renderResults = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Japanese</th>
            <th>Correct</th>
            <th>Yours</th>
            <th>solved?</th>
          </tr>
        </thead>
        <tbody>
        {renderMapResult()}
        </tbody>
      </table>
    )
  }

  const handleClick = () => {
    router.push('/');
  }

  return (
    <Layout>
      <div className={styles.container}>
        {renderScore()}
        {renderResults()}
        <button onClick={handleClick}>Topへ</button>
      </div>
    </Layout>

  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

const mapDispatchToProps = ({ fetchAnswersByConductionId })

export default connect(mapStateToProps, mapDispatchToProps)(Results);
