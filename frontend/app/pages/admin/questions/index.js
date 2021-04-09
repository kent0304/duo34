import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchSections } from '../../sections/actions';
import { fetchQuestions, postQuestion } from '../../questions/actions';
import styles from '../../../styles/Home.module.scss';
import Layout from '../../components/Layout';
import _ from 'lodash';

function AdminQuestion(props) {
  const dispatch = useDispatch();
  const [newSectionId, setSectionId] = useState('1');
  const [newNumber, setNumber] = useState(0);
  const [newEnText, setEnText] = useState('');
  const [newJapText, setJapText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchSections());
  }, []);

  const handleSubmit = (e) => {
    console.log(newNumber)
    console.log(newSectionId)
    console.log(newEnText)
    console.log(newJapText)
    const question = {
      'question_number': newNumber,
      'section_id': newSectionId,
      'english_text': newEnText,
      'japanese_text': newJapText
    }
    dispatch(postQuestion(question))
    e.preventDefault()
  }

  const renderQuestions = () => {
    if(_.size(props.state.questions) !== 0) {
      return (
        _.map(props.state.questions.list, question => (
          <tr key={question.id}>
            <td>{question.id}</td>
            <td>{question.question_number}</td>
            <td>{question.section_id}</td>
            <td>{question.english_text}</td>
            <td>{question.japanese_text}</td>
            <td><button onClick={openModal}>修正</button></td>
          </tr>
        ))
      )}
    }
  
  const openModal = () => {
    console.log('clicked');
  };

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

  return (
    <Layout>
        <h1>questions管理画面</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>number</th>
              <th>section</th>
              <th>English text</th>
              <th>Japanese text</th>
              <th>修正</th>
            </tr>
          </thead>
          <tbody>
            {renderQuestions()}
          </tbody>
        </table>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              Number:
              <input type='number' name='number' value={newNumber} onChange={(e)=>{setNumber(e.target.value)}} />
            </div>
            <div>
              Section:
              {renderSectionsList()}
            </div>
            <div>
              English:
              <input type='text' name='english_text' value={newEnText} onChange={(e)=>{setEnText(e.target.value)}} />
            </div>
            <div>
              Japanese:
              <input type='text' name='japanses_text' value={newJapText} onChange={(e)=>{setJapText(e.target.value)}} />
            </div>
            <input type='submit' valie="add" />
          </form>
        </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}
const mapDispatchToProps = ({ fetchQuestions })

export default connect(mapStateToProps, mapDispatchToProps)(AdminQuestion);