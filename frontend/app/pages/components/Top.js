import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchSections } from '../sections/actions'

import _ from 'lodash';

function Top(props) {
  const dispatch = useDispatch();
  const [selected_section, setSection] = useState(1);
  const options = props.state.sections.list;

  useEffect(() => {
    dispatch(fetchSections());
  }, [])


  const onSubmit = (e) => {
    //　Todo: START_REQUESTをdispatch
    console.log(options[selected_section].name)
    e.preventDefault(); // 遷移を一旦ストップ
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
const mapDispatchToProps = ({ fetchSections })

export default connect(mapStateToProps, mapDispatchToProps)(Top);