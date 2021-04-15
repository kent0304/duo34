import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.scss';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import _ from 'lodash';

function ConductionID(props) {
  const router = useRouter();
  const { pid } = router.query;
  const { tests } = props.state.questions;

  const renderTests = () => {
    return (
      _.map(tests, test => (
        <div key={test.id} value={test.id}>
          <p>問題番号：{test.question_number}</p>
          <p>英語text：{test.english_text}</p>
          <p>日本語text：{test.japanese_text}</p>
        </div>
      ))
    )
  }

  return (
    <Layout>
      <div className={styles.container}>
        <p>実施：{ pid }</p>
        {renderTests()}
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(ConductionID);