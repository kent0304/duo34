import React, { useState } from 'react';
import Router from 'next/router';
import { connect, useDispatch } from 'react-redux';
import { putQuestion } from '../questions/actions';

function QuestionModal(props) {
  
  const question = props.state.questions.selected_question;
  if(question){
    const dispatch = useDispatch();
    const [newNumber, setNumber] = useState(question.question_number)
    const [newSectionId, setSectionId] = useState(question.section_id)
    const [newEngText, setEngText] = useState(question.english_text)
    const [newJapText, setJapText] = useState(question.japanese_text)


    const renderOptions = () => {
      return (
        _.map(props.state.sections.list, section => (
          <option key={section.id} value={section.id}>
            {section.name}
          </option>
        ))
      )
    }

    const renderSectionsList = () => {
      return(
        <select
          value={newSectionId}
          onChange={(e)=>{setSectionId(e.target.value)}}>
          {renderOptions()}
        </select>
      )
    }

    const handleSubmit= (e) => {
      const newQuestion = {
        "question_number": newNumber,
        'section_id': newSectionId,
        "english_text": newEngText,
        "japanese_text": newJapText,
      };
      dispatch(putQuestion(question.id, newQuestion))
    }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type='number' value={newNumber} onChange={(e) => {setNumber(e.target.value)}} />
        </div>
        <div>
          {renderSectionsList()}
        </div>
        <div>
          <input type='text' value={newEngText} onChange={(e) => {setEngText(e.target.value)}} />
        </div>
        <div>
          <input type='text' value={newJapText} onChange={(e) => {setJapText(e.target.value)}} />
        </div>
        <input type='submit' value='Update' />
      </form>
    )
  }
  return (null);
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(QuestionModal);