import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.scss'
import Layout from '../../components/Layout'
import { connect, useDispatch } from 'react-redux';

function Results(props) {
  const router = useRouter();
  const { tests } = props.state.questions;
  const score = props.state.conductions.conduction.score;

  const renderScore = () => {
    return(
      <div>{tests.length}問中{score}問正解</div>
    )
  }

  const handleClick = () => {
    router.push('/');
  }

  return (
    <Layout>
      <div className={styles.container}>
        {renderScore()}
        <button onClick={handleClick}>Topへ</button>
      </div>
    </Layout>

  )
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, null)(Results);
