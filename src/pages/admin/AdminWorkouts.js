import React from 'react'

// container
import WorkoutContainer from '../../containers/WorkoutContainer'


const AdminWorkouts = (props) => {
  const navigation = props.navigation
  return (
    <WorkoutContainer
      admin={true}
      navigation={navigation}
    />
  )
}

export default AdminWorkouts