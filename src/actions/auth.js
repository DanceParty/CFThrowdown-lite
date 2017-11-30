import { Alert } from 'react-native'

import { firebase } from '../firebase/firebase'

export const startLogin = (email, password) => {
  const e = email
  const p = password
  return firebase.auth().signInWithEmailAndPassword(e, p).then(() => {
    Alert.alert("User successfully signed in")
  }).catch((err) => {
    Alert.alert("Error signing in", err)
  })
}

export const startSignout = () => {
  return firebase.auth().signOut().then(() => {
    Alert.alert("User successfully signed out")
  }).catch((err) => {
    Alert.alert("Error logging out", err)
  })
}