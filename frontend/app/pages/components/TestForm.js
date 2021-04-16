import React, { useState } from 'react';
import { connect } from 'react-redux';

function TestForm(props) {
  const test = props.test;
  return (
    <div>
      <div>Question: {test.japanese_text}</div>
      <div>Answer:<input type='text' /></div>
      <button>提出</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(TestForm);