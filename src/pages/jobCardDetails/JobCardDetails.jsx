import React from 'react'
import { useLoaderData } from 'react-router-dom'
import styles from './JobCardDetails.module.css' // Make sure to import your CSS file

const JobCardDetails = () => {
  const jobData = useLoaderData()

  if (!jobData.data) {
    return null // or display a loading/error message
  }

  const { logo, companyName, title, position, description } = jobData.data

  return (
    <div className={styles.detailsContainer}>
      <img
        src={logo}
        alt={`${companyName}'s logo`}
        className={styles.stretchedLogo}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.company}>{companyName}</p>
        <p className={styles.position}>{position}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default JobCardDetails
