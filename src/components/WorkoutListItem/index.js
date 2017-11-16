import React from 'react'
import { StyleSheet, Text } from 'react-native'


class WorkoutListItem extends React.Component {

  render() {
    const navigate = this.props.navigation.navigate
    const workout = this.props.item
    const admin = this.props.admin
    return (
      <Text
        stlye={styles.text}
        onPress={() => {
          if (admin) {
            navigate('AdminWorkoutDetails', { workout: workout })
          }
          // navigate to public page
        }}
      >
        {workout.name}
      </Text>
    )
  }

}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    margin: 25,
    textAlign: 'center'
  }
})

export default WorkoutListItem