import React, { useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.scss';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import _ from 'lodash';
import TestForm from '../../components/TestForm';

function ConductionQuiz(props) {
  const router = useRouter();
  const { pid } = router.query;
  const { tests } = props.state.questions;
  const [numberOfCorrects, setCorrects] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex(currentIndex + 1);
  }

  const handleSubmit = () => {
    console.log('submit')
    router.push('/')
  }

  const renderButton = () => {
    if(currentIndex < tests.length - 1) {
      return (
        <button onClick={handleClick}>回答</button>
      )
    }else {
      return (
        <button onClick={handleSubmit}>採点</button>
      )
    }
  }

  const renderTests = () => {
    const test = tests[currentIndex];
      return (
        <div>
          <p>No. {currentIndex + 1}</p>
          <p>Question: {test.japanese_text}</p>
          <p>Answer:<input type='text' /></p>
          {renderButton()}
        </div>
      )
  }

  return (
    <Layout>
      <div className={styles.container}>
        <p>実施番号：{ pid }</p>
        {renderTests()}
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(ConductionQuiz);