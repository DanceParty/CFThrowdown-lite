import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

// components
import WorkoutListItem from '../WorkoutListItem'

// styles
import { container } from '../../styles/container'


class WorkoutList extends React.Component {

  render() {
    const admin = this.props.admin
    const workouts = this.props.filteredWorkouts
    const navigation = this.props.navigation
    return (
      <View style={container.containerWhite}>
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

export default WorkoutList