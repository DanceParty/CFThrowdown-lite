import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

// firebase actions
import { startLogin } from '../../actions/auth'

// containers
import LoginContainer from '../../containers/LoginContainer'


class AdminLogin extends React.Component {
  render() {
    return (
      <LoginContainer
        admin={false}
        navigation={this.props.navigation}
      />
    )
  }
}

export default AdminLogin