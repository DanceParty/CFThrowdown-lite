import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

// styles
import { container } from '../../styles/container'
import { textInput } from '../../styles/textInput'


class Login extends React.Component {

  handleLogin = () => {
    this.props.handleLogin()
  }

  handleChangeEmail = (text) => {
    this.props.handleChangeEmail(text)
  }

  handleChangePassword = (text) => {
    this.props.handleChangePassword(text)
  }

  render() {
    const email = this.props.email
    const password = this.props.password
    return (
      <View style={[container.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <View style={[textInput.containerFull]}>
          <TextInput
            style={textInput.textInput}
            placeholder="Email..."
            onChangeText={(text) => this.handleChangeEmail(text)}
            value={email}
          />
          <TextInput
            style={textInput.textInput}
            placeholder="Password..."
            onChangeText={(text) => this.handleChangePassword(text)}
            value={password}
            secureTextEntry
          />
          <Button
            onPress={this.handleLogin}
            title="Login"
            color="purple"
            accessibilityLabel="Login"
          />
        </View>
      </View>
    )
  }
}

export default Login