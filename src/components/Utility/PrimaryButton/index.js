import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

// styles
import { typography } from '../../../styles/typography'
import { primaryButton } from '../../../styles/primaryButton'


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
    const isSmall = this.props.isSmall

    // button style
    const buttonStyle = isSmall ? primaryButton.smButton : primaryButton.button
    const textStyle = isSmall ? typography.subhead : typography.headline
    return (
      <TouchableHighlight
        style={buttonStyle}
        underlayColor="#4492D0"
        onShowUnderlay={this.onShowUnderlay}
        onHideUnderlay={this.onHideUnderlay}
        onPress={this.handleButtonPress}
      >
        <Text style={this.state.isPressed ? [textStyle, primaryButton.buttonActive] : [textStyle, primaryButton.buttonInactive]}>{buttonText}</Text>
      </TouchableHighlight>
    )
  }
}

export default PrimaryButton