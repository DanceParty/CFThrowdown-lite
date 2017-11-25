import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// styles
import { typography } from '../../../styles/typography'
import { listItem } from '../../../styles/listItem'


class WorkoutListItem extends React.Component {

  handleNavigate = (workout) => {
    const admin = this.props.admin
    const navigate = this.props.navigation.navigate
    if (admin) {
      navigate('AdminWorkoutDetails', { workout: workout })
    } else {
      navigate('WorkoutDetails', { workout: workout })
    }
  }

  render() {
    const navigate = this.props.navigation.navigate
    const workout = this.props.item
    const admin = this.props.admin
    let gender = 'none'
    if (workout.male && workout.female) {
      gender = 'Men & Women'
    } else if (workout.male && !workout.female) {
      gender = 'Men'
    } else if (!workout.male && workout.female) {
      gender = 'Women'
    }
    return (
      <TouchableHighlight
        style={listItem.listItem}
        underlayColor="white"
        onPress={() => this.handleNavigate(workout)}
      >
        <View style={listItem.content}>

          <View style={listItem.left}>
            <Text style={typography.title3}>{workout.name}</Text>
          </View>

          <View style={listItem.right}>
            <Ionicons name="ios-arrow-forward" size={28} color="black" />
          </View>

        </View>
      </TouchableHighlight>
    )
  }

}

export default WorkoutListItem