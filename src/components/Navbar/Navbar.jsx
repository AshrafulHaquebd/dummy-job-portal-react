import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6'
import styles from './Navbar.module.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase.config'

const Navbar = () => {
  const [user] = useAuthState(auth)

  const handleLogout = () => {
    signOut(auth)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to='/'>Halal Jibika</Link>
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
            <NavLink to='/postjob'>Post Job</NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink onClick={handleLogout}>Logout</NavLink>
              </li>
              <li>
                <img
                  src={user?.photoURL}
                  alt='profileImg'
                  className={styles.profileImg}
                />
              </li>
            </>
          ) : (
            <li>
              <NavLink to='/signup'>Register</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
