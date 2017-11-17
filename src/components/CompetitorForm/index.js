import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'


class CompetitorForm extends React.Component {

  handleFirstNameChange = (text) => {
    this.props.handleFirstNameChange(text)
  }

  handleLastNameChange = (text) => {
    this.props.handleLastNameChange(text)
  }

  handleDivisionChange = (text) => {
    this.props.handleDivisionChange(text)
  }

  handleGenderCheckbox = (text) => {
    this.props.handleGenderCheckbox(text)
  }

  submitCompetitorForm = () => {
    this.props.submitCompetitorForm()
  }

  render() {
    const firstName = this.props.firstName
    const lastName = this.props.lastName
    const division = this.props.division
    const male = this.props.male
    const female = this.props.female
    const modalData = this.props.modalData
    return (
      <View>
        <Text>Add Competitor</Text>
        <TextInput
          style={styles.textInput}
          placeholder="First name..."
          value={firstName}
          onChangeText={(text) => this.handleFirstNameChange(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last name..."
          value={lastName}
          onChangeText={(text) => this.handleLastNameChange(text)}
        />
        <ModalSelector
          data={modalData}
          initValue="Select a division"
          onChange={(value) => this.handleDivisionChange(value.label)}
        >
          <TextInput
            style={styles.modalInput}
            editable={false}
            placeholder="Select a division"
            value={division}
          />
        </ModalSelector>
        <CheckBox
          title="Male"
          checked={male}
          onPress={() => this.handleGenderCheckbox('Male')}
        />
        <CheckBox
          title="Female"
          checked={female}
          onPress={() => this.handleGenderCheckbox('Female')}
        />
        <Button
          title="Submit"
          onPress={this.submitCompetitorForm}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    height: 50,
  },
})

export default CompetitorForm