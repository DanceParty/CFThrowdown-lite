import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

// components
import Workout from '../Workout'


class WorkoutList extends React.Component {

  render() {
    return (
      <View>
        <FlatList
          style={styles.list}
          data={this.props.filteredWorkouts}
          renderItem={({item}) =>
            <Workout
              navigation={this.props.navigation}
              item={item}
            />
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
})

export default WorkoutList