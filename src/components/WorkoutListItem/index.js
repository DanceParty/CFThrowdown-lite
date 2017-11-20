import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// styles
import { typography } from '../../styles/typography'
import { listItem } from '../../styles/listItem'


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
        underlayColor="white"
        onPress={() => this.handleNavigate(workout)}
      >
        <View style={listItem.container}>

          <View style={listItem.left}>
            <Text style={[listItem.item, typography.headline]}>{workout.name}</Text>
            <Text style={typography.footnote}>{gender} {workout.division}</Text>
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