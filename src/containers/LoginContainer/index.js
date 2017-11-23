import React from 'react'
import { Alert } from 'react-native'

// actions
import { startLogin } from '../../actions/auth'

// components
import Login from '../../components/Login'


class LoginContainer extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleLogin = () => {
    const email = this.state.email || null
    const password = this.state.password
    startLogin(email, password).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        Alert.alert('Incorrect password', 'Please try again.')
      } else if (errorCode === 'auth/invalid-email') {
        Alert.alert('Incorrect Email', 'Please try again')
      } else if (errorCode === 'auth/user-not-found') {
        Alert.alert('Incorrect Login', 'Please check email and password')
      } else {
        console.log(errorCode)
        Alert.alert('Error:', errorMessage);
      }
    })
  }

  handleChangeEmail = (text) => {
    this.setState({
      email: text
    })
  }

  handleChangePassword = (text) => {
    this.setState({
      password: text
    })
  }

  render() {
    const email = this.state.email
    const password = this.state.password
    return(
      <Login
        email={email}
        password={password}
        handleLogin={this.handleLogin}
        handleChangeEmail={this.handleChangeEmail}
        handleChangePassword={this.handleChangePassword}
      />
    )
  }
}

export default LoginContainer