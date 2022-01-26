import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/"><a className={styles['navbar-link']}>Home</a></Link>
      <Link href="career"><a className={styles['navbar-link']}>Career</a></Link>
      <Link href='projects'><a className={styles['navbar-link']}>Projects</a></Link>
      <Link href='PhD'><a className={styles['navbar-link']}>PhD</a></Link>
    </nav>
  )
}

export default Navbar;