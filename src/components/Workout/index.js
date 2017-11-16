import React from 'react'
import { Button, Text, View } from 'react-native'


class Workout extends React.Component {

  onSubmitWorkout = () => {
    this.props.onSubmitWorkout()
  }

  render() {
    const workout = this.props.workout
    const gender = this.props.gender
    const admin = this.props.admin
    const steps = this.props.workout.steps
    return (
      <View>
        <Text>Division: <Text>{workout.division}</Text></Text>
        <Text>Gender: <Text>{gender}</Text></Text>
        <Text>Type: <Text>{workout.type}</Text></Text>
        <Text>Steps:
          {
            steps.map((step, index) => <Text key={index}> {step}</Text>)
          }
        </Text>

        {
          admin &&
          <Button
            title="Submit Workout Scores"
            onPress={() => this.onSubmitWorkout()}
          />
        }
      </View>
    )
  }

}

export default Workout