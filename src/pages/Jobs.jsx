import { useEffect, useState } from 'react'
import axios from 'axios'
import JobCard from './jobcard/JobCard'

const Jobs = () => {
  const [jobData, setJobData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:9000/jobs')

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
      <h2 style={{ textAlign: 'center' }}>
        Available Jobs - {jobData?.length}
      </h2>
      {jobData ? (
        jobData.map((job) => (
          <JobCard job={job} key={job.id} onDelete={handleDelete} />
        ))
      ) : (
        <p className={{ textAlign: 'center' }}>
          <strong>
            Having problem fetching the data. Plz start the server and try
            again.
          </strong>
        </p>
      )}
    </>
  )
}

export default Jobs
