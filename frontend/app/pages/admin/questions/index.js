import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchSections } from '../../sections/actions';
import { fetchQuestions, fetchQuestionById, postQuestion } from '../../questions/actions';
import styles from '../../../styles/Home.module.scss';
import Modal from 'react-modal';
import QuestionModal from '../../components/QuestionModal';
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
  const sections = props.state.sections.list;

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchSections());
    Modal.setAppElement('body')
  }, []);

  const handleSubmit = (e) => {
    const question = {
      'question_number': newNumber,
      'section_id': newSectionId,
      'english_text': newEnText,
      'japanese_text': newJapText
    }
    dispatch(postQuestion(question))
  }

  const renderQuestions = () => {
    if(_.size(props.state.questions) !== 0) {
      return (
        _.map(props.state.questions.list, question => (
          <tr key={question.id}>
            <td>{question.id}</td>
            <td>{question.question_number}</td>
            <td>{sections[question.section_id].name}</td>
            <td>{question.english_text}</td>
            <td>{question.japanese_text}</td>
            <td><button onClick={openModal}>修正</button></td>
          </tr>
        ))
      )}
    }
  
  const openModal = (e) => {
    console.log(e.target.parentNode.parentElement.childNodes[0].innerText);
    const id = e.target.parentNode.parentElement.childNodes[0].innerText;
    dispatch(fetchQuestionById(id)).then(
      setIsOpenModal(true)
    )
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
    <Layout id='admin-questions'>
        <h1>questions管理画面</h1>
        <Modal isOpen={isOpenModal} >
          <QuestionModal />
          <button onClick={() => setIsOpenModal(false)}>閉じる</button>
        </Modal>
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