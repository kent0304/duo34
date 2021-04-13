import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <button>Top</button>
      </Link>
      <Link href="/questions">
        <button>Questions</button>
      </Link>
      <Link href="/result">
        <button>Result</button>
      </Link>
      <Link href="/admin/sections">
        <button>Sections管理</button>
      </Link>
      <Link href="/admin/questions">
        <button>Questions管理</button>
      </Link>
    </div>
  )
};