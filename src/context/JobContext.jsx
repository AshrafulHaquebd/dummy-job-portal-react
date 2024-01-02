import { createContext, useState } from 'react'

export const JobContext = createContext()

const JobContextProvider = ({ children }) => {
  const [jobContextData, setJobContextData] = useState()
  console.log(jobContextData)
  return (
    <JobContext.Provider value={{ jobContextData, setJobContextData }}>
      {children}
    </JobContext.Provider>
  )
}

export default JobContextProvider
