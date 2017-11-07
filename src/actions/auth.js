import { firebase } from '../firebase/firebase'

export const startLogin = (email, password) => {
  const e = email
  const p = password
  return firebase.auth().signInWithEmailAndPassword(e, p).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      console.log('Wrong password.');
    } else {
      console.log('err:', errorMessage);
    }
    console.log('full err:', error);
  })
}

export const startSignout = () => {
  return firebase.auth().signOut().then(() => {
    console.log('user successfully signed out')
  }).catch((err) => {
    console.log('error signing out:', err)
  })
}