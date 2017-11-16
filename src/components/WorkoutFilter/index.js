import React from 'react'
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native'


class WorkoutFilter extends React.Component {

  handleMaleFilter = () => {
    this.props.handleMaleFilter()
  }

  handleFemaleFilter = () => {
    this.props.handleFemaleFilter()
  }

  handleGenderFilter = (gender) => {
    this.props.handleGenderFilter(gender)
  }

  handleDivisionFilter = (division) => {
    this.props.handleDivisionFilter(division)
  }

  render() {
    const gender = this.props.gender
    const divisions = this.props.divisions
    const selectedDivision = this.props.selectedDivision
    return (
      <View style={styles.container}>
        <Text>Gender: </Text>

        <TouchableHighlight onPress={() => this.handleGenderFilter('Male')}>
          <Text style={(gender === 'Male') && { color: 'red' }}>
            Men
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.handleGenderFilter('Female')}>
          <Text style={(gender === 'Female') && { color: 'red' }}>
            Women
          </Text>
        </TouchableHighlight>

        <Text>Division: </Text>
        {
          divisions.map((division, index) => {
            return (
              <TouchableHighlight
                onPress={() => this.handleDivisionFilter(division)}
                key={index}
              >
                <Text style={(selectedDivision === division) && { color: 'red' }}>{division}</Text>
              </TouchableHighlight>
            )
          })
        }

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default WorkoutFilter