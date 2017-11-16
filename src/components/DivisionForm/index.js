import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'


class DivisionForm extends React.Component {

  handleNameChange = (text) => {
    this.props.handleNameChange(text)
  }

  handleDivisionSubmit = () => {
    this.props.handleDivisionSubmit()
  }

  render() {
    return (
      <View>
        <Text>Add Division</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Name..."
          onChangeText={(text) => this.handleNameChange(text)}
        />

        <Button
          title="Submit"
          onPress={this.handleDivisionSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
  },
})

export default DivisionForm