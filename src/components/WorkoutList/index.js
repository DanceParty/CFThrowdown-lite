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
      <View style={styles.container}>
        <FlatList
          data={workouts}
          keyExtractor={(item, index) => index}
          renderItem={({item}) =>
            <WorkoutListItem
              navigation={navigation}
              item={item}
              admin={admin}
            />
          }

        />
        {
          admin &&
          <Button
            title="Add Workout"
            onPress={() => navigation.navigate('NewWorkout')}
          />
        }
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default WorkoutList