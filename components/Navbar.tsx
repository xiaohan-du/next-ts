import Link from 'next/link';
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/"><a className={styles.navbarLink}>Home</a></Link>
      <Link href="career"><a className={styles.navbarLink}>Career</a></Link>
      <Link href='projects'><a className={styles.navbarLink}>Projects</a></Link>
      <Link href='phd'><a className={styles.navbarLink}>PhD</a></Link>
    </nav>
  )
}

export default Navbar;