import React from 'react'

// container
import WorkoutContainer from '../../containers/WorkoutContainer'


const Workouts = (props) => {
  const navigation = props.navigation
  return (
    <WorkoutContainer
      admin={false}
      navigation={navigation}
    />
  )
}

export default Workouts