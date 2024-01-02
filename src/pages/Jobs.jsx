import { useEffect, useState } from 'react'
import axios from 'axios'
import JobCard from './jobcard/JobCard'

const Jobs = () => {
  const [jobData, setJobData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:9000/jobs')
        const data = res.data
        setJobData(data)
      } catch (error) {
        console.log(`Error: ${error.message}, Error code: ${error.code}`)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleDelete = (deleteId) => {
    setJobData((prevJobs) => prevJobs.filter((job) => job.id !== deleteId))
  }

  if (loading) {
    return (
      <p>
        <strong>plz wait. Loadiang.... </strong>
      </p>
    )
  }

  return (
    <>
      <h2>Available Jobs</h2>
      {jobData &&
        jobData.map((job) => (
          <JobCard job={job} key={job.id} onDelete={handleDelete} />
        ))}
    </>
  )
}

export default Jobs
