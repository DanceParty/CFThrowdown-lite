import React from 'react'
import { StyleSheet, Text } from 'react-native'


class Workout extends React.Component {

  render() {
    const navigate = this.props.navigation.navigate
    const workout = this.props.item
    return (
      <Text
        stlye={styles.text}
        onPress={() => navigate('AdminWorkoutDetails', { workout: workout })}
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

export default Workout