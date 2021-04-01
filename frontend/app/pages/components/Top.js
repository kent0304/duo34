import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchSections } from '../sections/actions'
import { getSectionsList } from '../sections/selectors';

import _ from 'lodash';

function Top(props) {
  const dispatch = useDispatch();
  const [selected_section, setSection] = useState(0);
  const selector = useSelector(state => state.sections);
  const sections = getSectionsList(selector);

  useEffect(() => {
    dispatch(fetchSections());
  }, [])

  // Todo: componentDidMountでapiからデータをもらいstoreを更新してもってくる

  const onSubmit = (e) => {
    //　Todo: START_REQUESTをdispatch
    e.preventDefault(); // 遷移を一旦ストップ
  }

  const onChange = (e) => {
    setSection(e.target.value);
  }

  const renderOptions = () => {
    return (
      _.map(selector, section => {
        <option key={section.id} value={section.name} >
          {section.name}
        </option>
      })
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

const mapStateToProps = state => ({ state })
const mapDispatchToProps = ({ fetchSections })

export default connect(mapStateToProps, mapDispatchToProps)(Top);