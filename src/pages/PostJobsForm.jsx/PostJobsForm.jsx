// PostJobsForm.jsx

import React, { useState } from 'react'
import axios from 'axios'
import styles from './PostJobsForm.module.css'

const initialFormData = {
  title: '',
  logo: '',
  companyName: '',
  position: '',
  description: '',
}

const PostJobsForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('http://localhost:9000/jobs', formData)
      console.log('Job posted successfully:', response.data)
    } catch (error) {
      console.error('Error posting job:', error)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor='logo'>Logo URL:</label>
        <input
          type='text'
          id='logo'
          name='logo'
          value={formData.logo}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor='companyName'>Company Name:</label>
        <input
          type='text'
          id='companyName'
          name='companyName'
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor='position'>Position:</label>
        <input
          type='text'
          id='position'
          name='position'
          value={formData.position}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <button type='submit'>Post Job</button>
    </form>
  )
}

export default PostJobsForm
