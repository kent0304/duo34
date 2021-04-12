import React, { useState } from 'react';
import Router from 'next/router';
import { connect, useDispatch } from 'react-redux';
import { putSection } from '../sections/actions';

function SectionModal(props) {
  
  const section = props.state.sections.selected_section;
  if(section){
    const dispatch = useDispatch();
    const [newSection, setSection] = useState(section.name)

    const handleClick = () => {
      dispatch(putSection(section.id, { name: newSection })).then(
        // memo: reloadはやめたほうがよさそう
        // 更新時に親コンポーネントのisOpenをfalseにしてdispatch(fetchSections)をやりたい
        // isOpenをstore管理??そこまで管理したい項目でもなさそう
        Router.reload()
      );
    }

    return (
      <div>
        <input type='text' value={newSection} onChange={(e)=>{setSection(e.target.value)}}></input>
        <button onClick={handleClick}>更新</button>
      </div>
    )
  }
  return (null);
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(SectionModal);