// JobCard.js (Job Card Component)

import React, { useState } from 'react'
import styles from './JobCard.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const JobCard = ({ job, onDelete }) => {
  console.log(job)
  if (!job) {
    return null // or display a loading/error message
  }
  const { id, logo, companyName, title, position, description } = job

  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/jobs/${id}`)
      onDelete(id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <div className={styles.imageContainer}>
          <img
            src={logo}
            alt={`${companyName}'s logo`}
            className={styles.logo}
          />
        </div>
        <div className={styles.textContainer}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.company}>
            <strong>Company</strong>: {companyName}
          </p>
          <p className={styles.position}>
            <strong>Position</strong>: {position}
          </p>
          <p className={styles.description}>
            <strong>Description</strong>: {description}
          </p>
          <div className={styles.iconMainGroup}>
            <span>
              <Link to={`/jobcarddetails/${id}`}>Details</Link>
            </span>
            <div className={styles.iconGroup}>
              <span>
                <Link to={`/updatecarddetails/${id}`}>update</Link>
              </span>
              <span onClick={() => deletePost(id)}>delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
