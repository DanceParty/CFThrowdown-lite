import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

// components
import WorkoutListItem from '../WorkoutListItem'


class WorkoutList extends React.Component {

  render() {
    const admin = this.props.admin
    const workouts = this.props.filteredWorkouts
    const navigation = this.props.navigation
    return (
      <View>
        <FlatList
          style={styles.list}
          data={workouts}
          renderItem={({item}) =>
            <WorkoutListItem
              navigation={navigation}
              item={item}
              admin={admin}
            />
          }
          keyExtractor={(item, index) => index}
        />
        {
          admin &&
          <Button
            title="Add Workout"
            onPress={() => this.props.navigation.navigate('NewWorkout')}
          />
        }
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