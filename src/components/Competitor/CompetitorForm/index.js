import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { Card, CheckBox } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'

// styles
import { typography } from '../../../styles/typography'
import { card } from '../../../styles/card'
import { form } from '../../../styles/form'


class CompetitorForm extends React.Component {

  state = {
    textInputFocused: undefined
  }

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

  handleCancelForm = () => {
    this.props.handleCancelForm()
  }

  render() {
    const firstName = this.props.firstName
    const lastName = this.props.lastName
    const division = this.props.division
    const male = this.props.male
    const female = this.props.female
    const modalData = this.props.modalData
    const focusedInput = this.state.textInputFocused
    return (
      <View>

        <Card containerStyle={{padding: 0}}>

          <View style={card.header}>
            <Text style={[typography.title1, card.title]}>New Competitor</Text>
          </View>

          <View style={card.unalignedContent}>

            <View style={form.row}>
              <View style={form.halfContainer}>
                <Text style={typography.footnote}>First name</Text>
                <TextInput
                  style={(focusedInput === 'firstName') ? form.focusedTextInput : form.textInput}
                  value={firstName}
                  underlineColorAndroid="transparent"
                  onFocus={() => this.handleTextInputFocus('firstName')}
                  onEndEditing={() => this.handleTextInputOff()}
                  onChangeText={(text) => this.handleFirstNameChange(text)}
                />
              </View>
              <View style={form.halfContainer}>
                <Text style={typography.footnote}>Last name</Text>
                <TextInput
                  style={(focusedInput === 'lastName') ? form.focusedTextInput : form.textInput}
                  value={lastName}
                  underlineColorAndroid="transparent"
                  onFocus={() => this.handleTextInputFocus('lastName')}
                  onEndEditing={() => this.handleTextInputOff()}
                  onChangeText={(text) => this.handleLastNameChange(text)}
                />
              </View>
            </View>

            <View style={form.row}>
              <View style={form.halfContainer}>
                <Text style={typography.footnote}>Gender</Text>
                <CheckBox
                  iconType="material"
                  checkedIcon="done"
                  uncheckedIcon="clear"
                  style={form.checkbox}
                  title="Male"
                  checked={male}
                  checkedColor="#4492D0"
                  uncheckedColor="grey"
                  onPress={() => this.handleGenderCheckbox('Male')}
                />
              </View>
              <View style={form.halfContainer}>
                <Text style={typography.footnote}> </Text>
                <CheckBox
                  iconType="material"
                  checkedIcon="done"
                  uncheckedIcon="clear"
                  style={form.checkbox}
                  title="Female"
                  checked={female}
                  checkedColor="#4492D0"
                  uncheckedColor="grey"
                  onPress={() => this.handleGenderCheckbox('Female')}
                />
              </View>
            </View>

            <View style={form.row}>
              <View style={form.container}>
                <Text style={typography.footnote}>Division</Text>
                <View style={form.modal}>
                  <ModalSelector
                    data={modalData}
                    initValue="Select a division"
                    onChange={(value) => this.handleDivisionChange(value.label)}
                  >
                    <TextInput
                      style={form.modalInput}
                      editable={false}
                      placeholder="Select a division"
                      value={division}
                    />
                  </ModalSelector>
                </View>
              </View>
            </View>

            <View style={form.row}>
              <View style={form.halfContainer}>
                <Button
                  onPress={this.handleCancelForm}
                  title="Cancel"
                  color="red"
                />
              </View>
              <View style={form.halfContainer}>
                <Button
                  onPress={this.submitCompetitorForm}
                  title="Save Changes"
                />
              </View>
            </View>

          </View>

        </Card>
      </View>
    )
  }
}

export default CompetitorForm