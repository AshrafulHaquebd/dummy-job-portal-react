import { NavLink } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'
import styles from './Navbar.component.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <a href='#'>Logo</a>
        </div>
        <input type='checkbox' id='menu-btn' className={styles.menuBtn} />
        <label htmlFor='menu-btn' className={`${styles.btn} ${styles.menuBtn}`}>
          <FaBarsStaggered />
        </label>
        <ul className={styles.navLinks}>
          <label htmlFor='menu-btn' className={styles.btn}>
            <FaXmark />
          </label>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/jobs'>Jobs</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar