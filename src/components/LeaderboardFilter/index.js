import React from 'react'
import { FlatList, Text, ScrollView, StyleSheet, TouchableHighlight, View } from 'react-native'


class LeaderboardFilter extends React.Component {

  handleGenderFilter = (gender) => {
    this.props.handleGenderFilter(gender)
  }

  handleDivisionFilter = (division) => {
    this.props.handleDivisionFilter(division)
  }

  render() {
    const gender = this.props.gender
    const divisions = this.props.divisions
    const currDivision = this.props.currDivision

    let isMale = gender === 'Male'
    let isFemale = gender === 'Female'
    return (
      <View>
        <Text>Gender: </Text>

        <Text
          style={isMale && styles.textHighlight}
          onPress={() => this.handleGenderFilter('Male')}
        >
          Men
        </Text>
        <Text
          style={isFemale && styles.textHighlight}
          onPress={() => this.handleGenderFilter('Female')}
        >
          Women
        </Text>

        <Text>Division: </Text>
        {
          divisions.map((division, index) =>
            <Text
              style={(currDivision === division) && styles.textHighlight}
              key={index}
              onPress={() => this.handleDivisionFilter(division)}
            >
              {division}
            </Text>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textHighlight: {
    color: 'red',
  },
})

export default LeaderboardFilter
