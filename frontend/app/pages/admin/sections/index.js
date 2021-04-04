import React, { useEffect, useState } from 'react';
import { fetchSections, postSection } from '../../sections/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import styles from '../../../styles/Home.module.scss';
import Layout from '../../components/Layout';
import _ from 'lodash';

function AdminSection(props) {
  const dispatch = useDispatch();
  const [newSection, setSection] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    dispatch(fetchSections());
  }, [])

  const renderSections = () => {
    return (
      _.map(props.sections, section => (
        <tr key={section.id}>
          <td>{section.id}</td>
          <td>{section.name}</td>
          <td><button>更新</button></td>
        </tr>
      ))
    )}

  const handleChange = (e) => {
    setSection(e.target.value);
    setIsDisabled(disabledCondition(e.target.value));
  }

  const handleClick = () => {
    dispatch(postSection({name: newSection}));
    setSection('');
  };

  const disabledCondition = (text) => {
    const isFind = _.findKey(props.sections, { name: text });
    let condition = true;
    // 先頭がsectionで section◯◯ のときfalse
    if( !text.indexOf('section') && text !== 'section' ){
      condition = false;
    }
    // props.sections内にtextが存在していなければfalse
    // isFind!==undefindはみつかったの意
    if( isFind !== undefined ){
      condition = true;
    }
    return condition
  }

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Section管理画面</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>section</th>
              <th>更新</th>
            </tr>
          </thead>
          <tbody>
            {renderSections()}
          </tbody>
        </table>
        <div>
          <input type='text' onChange={handleChange}></input>
          <button onClick={handleClick} disabled={isDisabled}>追加</button>
        </div>
      </div>
    </Layout> 
  )
}

const mapStateToProps = state => {
  return {
    sections: state.sections
  }
}
const mapDispatchToProps = ({ fetchSections })

export default connect(mapStateToProps, mapDispatchToProps)(AdminSection);