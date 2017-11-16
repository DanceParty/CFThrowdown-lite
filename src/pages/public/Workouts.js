import React from 'react'

// container
import WorkoutContainer from '../../containers/WorkoutContainer'


class Workouts extends React.Component {
  render() {
    return (
      <WorkoutContainer
        admin={false}
        navigation={this.props.navigation}
      />
    )
  }
}

export default Workouts