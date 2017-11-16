import React from 'react'
import { Button, FlatList, TouchableHighlight, Text, StyleSheet, View } from 'react-native'

class CompetitorFilter extends React.Component {

  handleMaleFilter = () => {
    this.props.handleMaleFilter()
  }

  handleFemaleFilter = () => {
    this.props.handleFemaleFilter()
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
          onPress={this.handleMaleFilter}
        >
          <Text>Men</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.handleFemaleFilter}
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