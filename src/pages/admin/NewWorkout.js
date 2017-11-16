import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'

// container
import NewWorkoutContainer from '../../containers/NewWorkoutContainer'


class NewWorkout extends React.Component {
  render() {
    return (
      <NewWorkoutContainer
        navigation={this.props.navigation}
      />
    )
  }
}

export default NewWorkout