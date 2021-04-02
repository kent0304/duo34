import React, { useState } from 'react';
import styles from '../../styles/Home.module.scss'

export default function Top() {
  const [state, setState] = useState(0);
  // Todo: componentDidMountでapiからデータをもらいstoreを更新してもってくる
  const sections = [
    { id: 0, name: "section1" },
    { id: 1, name: "section2" },
    { id: 2, name: "section3" },
    { id: 3, name: "section4" },
    { id: 4, name: "section5" },
  ];

  const onSubmit = (e) => {
    //　Todo: START_REQUESTをdispatch
    e.preventDefault(); // 遷移を一旦ストップ
    console.log(sections[state].name)
  }

  const onChange = (e) => {
    setState(e.target.value);
  }

  const options = sections.map(
    (section) => (
      <option key={section.id} value={section.id}>
        {section.name}
      </option>
    )
  );
  return (
    <div className={styles.container}>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <select
            value={state}
            onChange={onChange}
          >
            {options}
          </select>
        </div>
        <div>
          <input type="submit" value="スタート" />
        </div>
      </form>
    </div>

  );
};