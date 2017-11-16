import React from 'react'

// container
import WorkoutContainer from '../../containers/WorkoutContainer'


class AdminWorkouts extends React.Component {
  render() {
    return (
      <WorkoutContainer
        admin={true}
        navigation={this.props.navigation}
      />
    )
  }
}

export default AdminWorkouts