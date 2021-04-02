import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <button>Top</button>
      </Link>
      <Link href="/question">
        <button>Question</button>
      </Link>
      <Link href="/result">
        <button>Result</button>
      </Link>
      <Link href="/admin/sessions">
        <button>Sessions管理</button>
      </Link>
    </div>
  )
};