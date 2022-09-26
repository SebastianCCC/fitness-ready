import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import {
  APIKEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  MEESAGINGSENDERID,
  APPID,
} from 'react-native-dotenv'

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MEESAGINGSENDERID,
  appId: APPID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export default getFirestore(app)
