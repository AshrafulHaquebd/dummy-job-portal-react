import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './LatestJob.module.css'
import { Link } from 'react-router-dom'

const LatestJob = () => {
  const [latestJobs, setLatestJobs] = useState([])

  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const response = await axios.get('http://localhost:9000/jobs')
        setLatestJobs(response.data.slice(0, 4))
      } catch (error) {
        console.error('Error fetching latest jobs:', error)
      }
    }

    fetchLatestJobs()
  }, [])

  return (
    <div className={styles.latestJobs}>
      <h2 className={styles.mainText}>Latest Jobs</h2>
      <div className={styles.jobCards}>
        {latestJobs.map((job) => (
          <div key={job.id} className={styles.jobCard}>
            <img
              src={job.logo}
              alt={`${job.companyName} Logo`}
              className={styles.logo}
            />
            <p className={styles.position}> {job.position}</p>
            <div className={styles.jobInfo}>
              <h3 className={styles.company}> @ {job.companyName}</h3>
              <p className={styles.description}>{job.description}</p>
              <Link
                className={styles.findMoreButton}
                to={`/jobcarddetails/${job.id}`}
              >
                Find More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestJob
