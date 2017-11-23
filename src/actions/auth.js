import { firebase } from '../firebase/firebase'

export const startLogin = (email, password) => {
  const e = email
  const p = password
  return firebase.auth().signInWithEmailAndPassword(e, p)
}

export const startSignout = () => {
  return firebase.auth().signOut().then(() => {
    console.log('user successfully signed out')
  }).catch((err) => {
    console.log('error signing out:', err)
  })
}