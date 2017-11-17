import React from 'react'

// firebase actions
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
    startLogin(email, password)
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