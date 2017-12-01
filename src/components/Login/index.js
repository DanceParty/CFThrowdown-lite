import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { Card } from 'react-native-elements'

// styles
import { typography } from '../../styles/typography'
import { card } from '../../styles/card'
import { form } from '../../styles/form'


class Login extends React.Component {

  state = {
    textInputFocused: undefined
  }

  handleLogin = () => {
    this.props.handleLogin()
  }

  handleChangeEmail = (text) => {
    this.props.handleChangeEmail(text)
  }

  handleChangePassword = (text) => {
    this.props.handleChangePassword(text)
  }

  handleTextInputFocus = (textInput) => {
    this.setState({
      textInputFocused: textInput,
    })
  }

  handleTextInputOff = () => {
    this.setState({
      textInputFocused: undefined,
    })
  }

  render() {
    const email = this.props.email
    const password = this.props.password
    const focusedInput = this.state.textInputFocused
    return (
      <View>
        <Card containerStyle={{ padding: 0 }}>

          <View style={card.header}>
            <Text style={[typography.title1, card.title]}>Login</Text>
          </View>

          <View style={card.unalignedContent}>
            <View style={form.row}>
              <View style={form.container}>
                <Text style={typography.footnote}>Email</Text>
                <TextInput
                  style={(focusedInput === 'email') ? form.focusedTextInput : form.textInput}
                  underlineColorAndroid="transparent"
                  onFocus={() => this.handleTextInputFocus('email')}
                  onEndEditing={() => this.handleTextInputOff()}
                  onChangeText={(text) => this.handleChangeEmail(text)}
                  value={email}
                />
              </View>
            </View>
            <View style={form.row}>
              <View style={form.container}>
                <Text style={typography.footnote}>Password</Text>
                <TextInput
                  style={(focusedInput === 'password') ? form.focusedTextInput : form.textInput}
                  underlineColorAndroid="transparent"
                  onFocus={() => this.handleTextInputFocus('password')}
                  onEndEditing={() => this.handleTextInputOff()}
                  onChangeText={(text) => this.handleChangePassword(text)}
                  value={password}
                  secureTextEntry
                />
              </View>
            </View>
            <View style={[form.row, { justifyContent: 'center', paddingBottom: '10%' }]}>
              <View style={form.container}>
              <Button
                onPress={this.handleLogin}
                title="Login"
                color="#4492D0"
                accessibilityLabel="Login"
              />
              </View>
            </View>
          </View>

        </Card>
      </View>
    )
  }
}

export default Login