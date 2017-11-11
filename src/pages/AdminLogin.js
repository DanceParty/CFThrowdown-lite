import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

// firebase actions
import { startLogin } from '../actions/auth'

class AdminLogin extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleLogin = () => {
    const email = this.state.email || null
    const password = this.state.password
    startLogin(email, password)
  }

  render() {
    return(
      <View>
        <TextInput
          style={{borderWidth: 1, borderColor: 'black'}}
          onChangeText={(text) => this.setState(() => ({ email: text }))}
          value={this.state.email}
        />
        <TextInput
          style={{borderWidth: 1, borderColor: 'black'}}
          onChangeText={(text) => this.setState(() => ({ password: text }))}
          value={this.state.password}
          secureTextEntry
        />
        <Button
          onPress={this.handleLogin}
          title="Login"
          color="purple"
          accessibilityLabel="Login"
        />
      </View>
    )
  }
}

export default AdminLogin