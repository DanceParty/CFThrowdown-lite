import React from 'react'
import { Button, FlatList, TouchableHighlight, Text, StyleSheet, View } from 'react-native'

class CompetitorFilter extends React.Component {

  handleGenderFilter = (gender) => {
    this.props.handleGenderFilter(gender)
  }

  handleDivisionFilter = (division) => {
    this.props.handleDivisionFilter(division)
  }

  render() {
    const divisions = this.props.divisions
    return (
      <View>
        <Text>Gender Filters:</Text>
        <TouchableHighlight
          onPress={() => this.handleGenderFilter('Male')}
        >
          <Text>Men</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.handleGenderFilter('Female')}
        >
          <Text>Women</Text>
        </TouchableHighlight>
        <Text>Division Filters:</Text>
        {
          divisions.map((division, index) => {
            return (
              <TouchableHighlight onPress={() => this.handleDivisionFilter(division)} key={index}>
                <Text>{division}</Text>
              </TouchableHighlight>
            )
          })
        }
      </View>
    )
  }
}

export default CompetitorFilter