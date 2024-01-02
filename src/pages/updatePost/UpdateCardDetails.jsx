import React, { useEffect, useState } from 'react'
import styles from './UpdateCardDetails.module.css'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'

const UpdateCardDetails = () => {
  const updatedData = useLoaderData()

  const { id, logo, companyName, title, position, description } =
    updatedData.data
  const [formData, setFormData] = useState(updatedData.data)

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
      const response = await axios.put(
        `http://localhost:9000/jobs/${id}`,
        formData
      )
      clearPostInput()
      console.log('Job Updated successfully:', response.data)
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
          // defaultValue={title}
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
          // defaultValue={logo}
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
          // defaultValue={companyName}
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
          // defaultValue={position}
          value={formData.position}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          name='description'
          // defaultValue={description}
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <button type='submit'>Post Job</button>
    </form>
  )
}

export default UpdateCardDetails
