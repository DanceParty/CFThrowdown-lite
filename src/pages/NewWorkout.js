import React from 'react'
import { Button, Picker, Text, TextInput, View } from 'react-native'
import ModalSelector from 'react-native-modal-selector'

// firebase
import { addWorkout } from '../actions/workouts'
import { allDivisions, getDivisionWorkouts, updateDivisionWorkouts } from '../actions/divisions'

class NewWorkout extends React.Component {

  state = {
    name: '',
    division: '',
    type: '',
    steps: [],
    stepInputs: ['input-0'],
    divisionList: [],
  }

  componentWillMount() {
    allDivisions().then((result) => {
      const divisionArray = Object.keys(result)
      console.log(divisionArray)
      this.setState(() => ({
        divisionList: divisionArray
      }))
    })
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
    let workoutsArray = []
    // get all workouts for this division
    getDivisionWorkouts(workout.division).then((result) => {
      if (result) {
        // if there are already workouts, add this workout to the array
        workoutsArray = [...result, workout.name]
      } else {
        // otherwise, create the workouts array
        workoutsArray = [workout.name]
      }
      // add the workout
      addWorkout(workout)
      // update the division to contain the workout
      updateDivisionWorkouts(workoutsArray, workout.division)
    })
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
  }

  render() {
    const pickerData = this.state.divisionList.map((division, index) => {
      return {
        key: index,
        label: division,
      }
    })
    const scoreTypeData = [
      { key: 0, label: 'Timed' },
      { key: 1, label: 'Weighted' },
      { key: 2, label: 'Points' },
    ]
    return (
      <View>
        <Text>Add a new workout</Text>
        <TextInput
          style={{ borderWidth: 1, borderColor: 'black'}}
          placeholder="Workout name..."
          onChangeText={(text) => this.handleNameChange(text)}
          value={this.state.name}
        />
        <ModalSelector
          data={pickerData}
          initValue="Select a division"
          onChange={(value) => this.handleDivisionChange(value.label)}
        >
          <TextInput
            style={{borderWidth:1, borderColor:'#ccc', padding:10, height:50}}
            editable={false}
            placeholder="Select a division"
            value={this.state.division}
          />
        </ModalSelector>
        <ModalSelector
          data={scoreTypeData}
          initValue="Select a score type"
          onChange={(text) => this.handleTypeChange(text.label)}
        >
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 50 }}
            editable={false}
            placeholder="Select a score type"
            value={this.state.type}
          />
        </ModalSelector>
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