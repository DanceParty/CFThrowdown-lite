import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'


class PrimaryButton extends React.Component {

  state = {
    isPressed: false,
  }

  handleButtonPress = () => {
    this.props.handleButtonPress()
  }

  onHideUnderlay = () => {
    this.setState({
      isPressed: false
    })
  }

  onShowUnderlay = () => {
    this.setState({
      isPressed: true
    })
  }

  render() {
    const buttonText = this.props.text
    return (
      <TouchableHighlight
        style={styles.touchableButton}
        underlayColor="#3f83a7"
        onShowUnderlay={this.onShowUnderlay}
        onHideUnderlay={this.onHideUnderlay}
        onPress={this.handleButtonPress}
      >
        <Text style={this.state.isPressed ? styles.buttonTextPressed : styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  touchableButton: {
    height: 50,
    width: 300,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#3f83a7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextPressed: {
    fontSize: 18,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#3f83a7'
  },
})

export default PrimaryButton