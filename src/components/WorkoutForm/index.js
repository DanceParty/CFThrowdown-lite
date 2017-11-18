import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'


class WorkoutForm extends React.Component {

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
    return (
      <View>
        <Text>Add a new workout</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Workout name..."
          onChangeText={(text) => this.handleNameChange(text)}
          value={name}
        />
        <ModalSelector
          data={pickerData}
          initValue="Select a division"
          onChange={(value) => this.handleDivisionChange(value.label)}
        >
          <TextInput
            style={styles.modalTextInput}
            editable={false}
            placeholder="Select a division"
            value={division}
          />
        </ModalSelector>
        <ModalSelector
          data={scoreTypeData}
          initValue="Select a score type"
          onChange={(text) => this.handleTypeChange(text.label)}
        >
          <TextInput
            style={styles.modalTextInput}
            editable={false}
            placeholder="Select a score type"
            value={type}
          />
        </ModalSelector>
        <CheckBox
          title="Male"
          onPress={() => this.handleGenderCheckbox('Male')}
          checked={male}
        />
        <CheckBox
          title="Female"
          onPress={() => this.handleGenderCheckbox('Female')}
          checked={female}
        />
        <TextInput
          multiline
          maxLength={1000}
          autoCapitalize="sentences"
          placeholder="Enter workout standards..."
          value={description}
          onChangeText={(text) => this.handleDescriptionChange(text)}
        />
        {
          stepInputs.map((input, index) => {
            return (
              <TextInput
                key={input}
                style={styles.textInput}
                placeholder={`Step ${index + 1}`}
                onChangeText={(text) => this.handleStepInput(text, index)}
                value={steps[index]}
              />
            )
          })
        }
        <Button
          title="Add Step"
          onPress={this.handleAddStep}
        />
        <Button
          title="Remove Step"
          onPress={this.handleRemoveStep}
        />
        <Button
          title="Submit"
          onPress={this.handleWorkoutSubmit}
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
  modalTextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    height: 50,
  },
})

export default WorkoutForm