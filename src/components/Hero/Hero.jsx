import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'
import LatestJob from '../latestJob/LatestJob'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.mainText}>
          Where Opportunities Align with Your Values!
        </h1>
        <p className={styles.tagline}>
          Unlock Your Career Potential, Embrace Your Faith.
        </p>
        <p className={styles.description}>
          Your Faith, Your Future. Halal Jobs Hub is not just a job portal; it's
          a movement towards a fulfilling career that celebrates your faith.
          Explore opportunities that enrich your life while contributing to a
          workplace culture that respects and values diversity. Join us in
          shaping a future where your career is a reflection of your beliefs.
        </p>
        <Link to={'/jobs'}>
          <button className={styles.exploreButton}>Explore Now</button>
        </Link>

        <LatestJob />
      </div>
    </div>
  )
}

export default Hero
