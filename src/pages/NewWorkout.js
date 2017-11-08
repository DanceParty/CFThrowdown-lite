import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

// firebase
import { addWorkout } from '../actions/workouts'

class NewWorkout extends React.Component {

  state = {
    name: '',
    division: '',
    type: '',
    steps: [],
    stepInputs: ['input-0']
  }

  handleNameChange = (text) => {
    this.setState(() => ({ name: text }))
  }

  handleDivisionChange = (text) => {
    this.setState(() => ({ division: text }))
  }

  handleTypeChange = (text) => {
    this.setState(() => ({ type: text }))
  }

  handleWorkoutSubmit = () => {
    const workout = {
      name: this.state.name,
      division: this.state.division,
      type: this.state.type,
      steps: [...this.state.steps],
    }
    addWorkout(workout)
  }

  handleAddStep = () => {
    const newKey = `input-${this.state.stepInputs.length}`
    this.setState(() => ({
      stepInputs: this.state.stepInputs.concat([newKey])
    }))
  }

  handleStepInput = (text, index) => {
    const newArray = [...this.state.steps]
    newArray[index] = text
    this.setState(() => ({
      steps: newArray
    }))
    console.log(this.state.steps)
  }

  render() {
    return (
      <View>
        <Text>Add a new workout</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black'}}
          placeholder="Workout name..."
          onChangeText={(text) => this.handleNameChange(text)}
          value={this.state.name}
        />
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black'}}
          placeholder="Division name..."
          onChangeText={(text) => this.handleDivisionChange(text)}
          value={this.state.division}
        />
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black'}}
          placeholder="Type name..."
          onChangeText={(text) => this.handleTypeChange(text)}
          value={this.state.type}
        />
        {
          this.state.stepInputs.map((input, index) => {
            return (
              <TextInput
                key={input}
                style={{ borderWidth: 1, borderColor: 'black' }}
                placeholder={`Step ${index + 1}`}
                onChangeText={(text) => this.handleStepInput(text, index)}
                value={this.state.steps[index]}
              />
            )
          })
        }
        <Button
          title="Add Step"
          onPress={this.handleAddStep}
        />
        <Button
          title="Submit"
          onPress={this.handleWorkoutSubmit}
        />
      </View>
    )
  }
}

export default NewWorkout