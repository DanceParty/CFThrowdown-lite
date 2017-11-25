import React from 'react'
import { Button, FlatList, View } from 'react-native'

// components
import WorkoutListItem from '../WorkoutListItem'

// styles
import { container } from '../../../styles/container'


const WorkoutList = (props) => {
  const admin = props.admin
  const workouts = props.filteredWorkouts
  const navigation = props.navigation
  return (
    <View style={container.listContainer}>
      <FlatList
        style={{ backgroundColor: 'white' }}
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

export default WorkoutList