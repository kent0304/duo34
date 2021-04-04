import React, { useEffect, useState } from 'react';
import { fetchSections, postSection } from '../../sections/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import styles from '../../../styles/Home.module.scss';
import Layout from '../../components/Layout';
import _ from 'lodash';

function AdminSection(props) {
  const dispatch = useDispatch();
  const [newSection, setSection] = useState();

  useEffect(() => {
    dispatch(fetchSections());
  }, [])

  const renderSections = () => {
    return (
      _.map(props.sections, section => (
        <tr key={section.id}>
          <td>{section.id}</td>
          <td>{section.name}</td>
        </tr>
      ))
    )}

  const handleChange =  (e) => {
    setSection(e.target.value)
  }

  const handleClick = () => {
    dispatch(postSection({name: newSection}));
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2>Section管理画面</h2>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>section</th>
            </tr>
          </thead>
          <tbody>
            {renderSections()}
          </tbody>
        </table>
        <div>
          <input type='text' onChange={handleChange}></input>
          <button onClick={handleClick}>add</button>
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