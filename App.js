import React from 'react'
import RootComponent from './src/index'

import { firebase } from './src/firebase/firebase'

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('LOGGED IN')
  } else {
    console.log('LOGGED OUT')
  }
})

export default class App extends React.Component {
  render() {
    return (
      <RootComponent />
    )
  }
}