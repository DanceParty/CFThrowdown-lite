import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Card, CheckBox } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'

// styles
import { typography } from '../../styles/typography'
import { padding } from '../../styles/padding'
import { card } from '../../styles/card'
import { form } from '../../styles/form'


class WorkoutForm extends React.Component {

  state = {
    textInputFocused: undefined
  }

  handleNameChange = (text) => {
    this.props.handleNameChange(text)
  }

  handleDivisionChange = (text) => {
    this.props.handleDivisionChange(text)
  }

  handleTypeChange = (text) => {
    this.props.handleTypeChange(text)
  }

  handleDescriptionChange = (text) => {
    this.props.handleDescriptionChange(text)
  }

  handleGenderCheckbox = (gender) => {
    this.props.handleGenderCheckbox(gender)
  }

  handleStepInput = (text, index) => {
    this.props.handleStepInput(text, index)
  }

  handleAddStep = () => {
    this.props.handleAddStep()
  }

  handleRemoveStep = () => {
    this.props.handleRemoveStep()
  }

  handleWorkoutSubmit = () => {
    this.props.handleWorkoutSubmit()
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
    const name = this.props.name
    const pickerData = this.props.pickerData
    const division = this.props.division
    const scoreTypeData= this.props.scoreTypeData
    const type = this.props.type
    const male = this.props.male
    const female = this.props.female
    const stepInputs = this.props.stepInputs
    const steps = this.props.steps
    const description = this.props.description
    const focusedInput = this.state.textInputFocused
    return (
      <View>

        <Card containerStyle={{padding: 0}}>

          <View style={card.header}>
            <Text style={[typography.title1, card.title]}>New Workout</Text>
          </View>

          <View style={card.unalignedContent}>

            <View style={form.row}>
              <View style={form.container}>
                <Text style={typography.footnote}>Name</Text>
                <TextInput
                  style={(focusedInput === 'name') ? form.focusedTextInput : form.textInput}
                  value={name}
                  underlineColorAndroid="transparent"
                  onFocus={() => this.handleTextInputFocus('name')}
                  onEndEditing={() => this.handleTextInputOff()}
                  onChangeText={(text) => this.handleNameChange(text)}
                />
              </View>
            </View>

            <View style={form.row}>
              <View style={form.container}>
                <Text style={typography.footnote}>Division</Text>
                <View style={form.modal}>
                  <ModalSelector
                    data={pickerData}
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
              <View style={form.container}>
                <Text style={typography.footnote}>Score Type</Text>
                <View style={form.modal}>
                  <ModalSelector
                    data={scoreTypeData}
                    initValue="Select a score type"
                    onChange={(text) => this.handleTypeChange(text.label)}
                  >
                    <TextInput
                      style={form.modalInput}
                      editable={false}
                      placeholder="Select a score type"
                      value={type}
                    />
                  </ModalSelector>
                </View>
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
                <Text style={typography.footnote}>Workout Steps</Text>
              </View>
            </View>
            {
              stepInputs.map((input, index) => {
                return (
                  <View style={form.row} key={index}>
                    <View style={[form.container, { alignItems: 'center' }]}>
                      <TextInput
                        style={form.secondaryInputLeft}
                        placeholder={`Step ${index + 1}`}
                        value={steps[index]}
                        onChangeText={(text) => this.handleStepInput(text, index)}
                      />
                    </View>
                  </View>
                )
              })
            }
            <View style={[form.row, { justifyContent: 'center', paddingBottom: '10%' }]}>
              <View stlye={form.halfContainer}>
                <Button
                  title="Remove Step"
                  onPress={this.handleRemoveStep}
                />
              </View>
              <View stlye={form.halfContainer}>
                <Button
                  title="Add Step"
                  onPress={this.handleAddStep}
                />
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
                title="Submit"
                onPress={this.handleWorkoutSubmit}
              />
              </View>
            </View>

          </View>

        </Card>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
  },
  modalTextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    height: 50,
  },
})

export default WorkoutForm