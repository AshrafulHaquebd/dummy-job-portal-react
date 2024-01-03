import React from 'react'
import styles from './Footer.module.css'
import { FaSquareTwitter } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href='#' className={styles.iconLink} title='Twitter'>
          <FaSquareTwitter />
        </a>
        <a href='#' className={styles.iconLink} title='LinkedIn'>
          <FaLinkedin />
        </a>
        <a href='#' className={styles.iconLink} title='Instagram'>
          <FaInstagram />
        </a>
      </div>
      <p className={styles.copyright}>
        © {currentYear} Halal Jibika, All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
