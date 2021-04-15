import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { connect, useDispatch } from 'react-redux';
import { fetchSections } from '../sections/actions';
import { createConduction } from '../conductions/actions';
import { fetchQuestionsById } from '../questions/actions';
import _ from 'lodash';

function Top(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [selected_section, setSection] = useState(1);
  const options = props.state.sections.list;

  useEffect(() => {
    dispatch(fetchSections());
  }, [])

  const onSubmit = (e) => {
    dispatch(createConduction()).then(()=>{
      dispatch(fetchQuestionsById(selected_section));
    });
    router.push('/questions');
    e.preventDefault();
  }

  const onChange = (e) => {
    setSection(e.target.value);
  }

  const renderOptions = () => {
    return (
      _.map(options, section => (
        <option key={section.id} value={section.id}>
          {section.name}
        </option>
      ))
    )
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <select
          value={selected_section}
          onChange={onChange}
        >
          {renderOptions()}
        </select>
      </div>
      <div>
        <input type="submit" value="スタート" />
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    state
  }
}
const mapDispatchToProps = ({ fetchSections, createConduction, fetchQuestionsById })

export default connect(mapStateToProps, mapDispatchToProps)(Top);