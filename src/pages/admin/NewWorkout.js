import React from 'react'

// container
import NewWorkoutContainer from '../../containers/NewWorkoutContainer'


const NewWorkout = (props) => {
  const navigation = props.navigation
  return (
    <NewWorkoutContainer
      navigation={navigation}
    />
  )
}

export default NewWorkout