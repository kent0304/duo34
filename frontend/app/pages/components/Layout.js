import Header from './Header';
import styles from '../../styles/Home.module.scss';

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div className={styles.container}>
      { props.children }
      </div>
    </div>
  )
}