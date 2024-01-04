import React, { useState } from 'react'
import styles from './SignUpForm.module.css'
import { app, auth } from '../../firebase/firebase.config'
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { email, password, confirmPassword } = formData

  // Signup with Email/password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  // Signup with Google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth)

  // Signup with Github
  const [signInWithGithub, githubUser, githubLoading, gitHubError] =
    useSignInWithGithub(auth)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Confirm password did not match')
      return
    }

    await createUserWithEmailAndPassword(email, password)
  }

  loading ? (
    <small className={styles.small}>Please wait. Loading...</small>
  ) : null

  error ? (
    <small className={`${styles.errorText} ${styles.small}`}>
      Error: {error.message}
    </small>
  ) : null

  user ? (
    <small className={styles.small}>
      Welcome <strong>{user.user.email}</strong>
    </small>
  ) : null

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <div className={styles.formGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Sign Up</button>
        <div className={styles.or}>
          <p>
            <strong>or</strong>
          </p>
        </div>
        <div className={styles.socialButtons}>
          <button
            className={styles.googleBtn}
            onClick={() => signInWithGoogle()}
          >
            Sign Up with Google
          </button>
          <button
            className={styles.githubBtn}
            onClick={() => signInWithGithub()}
          >
            Sign Up with Github
          </button>
        </div>
        <p className={styles.altText}>
          Already have an account? please <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUpForm
