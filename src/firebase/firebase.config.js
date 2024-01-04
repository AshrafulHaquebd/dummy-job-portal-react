import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAIdIRwzcKq_-7g4aFkOA12GU0UPpll7IM',
  authDomain: 'job-portal-6a2f6.firebaseapp.com',
  projectId: 'job-portal-6a2f6',
  storageBucket: 'job-portal-6a2f6.appspot.com',
  messagingSenderId: '559649305773',
  appId: '1:559649305773:web:17588c89cc6ba902054224',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
