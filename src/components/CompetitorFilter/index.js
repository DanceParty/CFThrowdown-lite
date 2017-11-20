import React from 'react'
import { Button, FlatList, TouchableHighlight, Text, StyleSheet, View } from 'react-native'

// styles
import { typography } from '../../styles/typography'
import { tabs } from '../../styles/tabs'
import { padding } from '../../styles/padding'


class CompetitorFilter extends React.Component {

  handleGenderFilter = (gender) => {
    this.props.handleGenderFilter(gender)
  }

  handleDivisionFilter = (division) => {
    this.props.handleDivisionFilter(division)
  }

  render() {
    const divisions = this.props.divisions
    const currGender = this.props.gender
    const currDivision = this.props.division

    // styles
    const tabsGroup = [tabs.tabsGroup, padding.smPaddingTop]
    const title = [typography.title3, padding.smPaddingTop]
    const maleTab = (currGender === 'Male') ? tabs.currTab : tabs.tab
    const maleText = (currGender === 'Male') ? [typography.callout, tabs.currTabText] : [typography.callout, tabs.tabText]
    const femaleTab = (currGender === 'Female') ? tabs.currTab : tabs.tab
    const femaleText = (currGender === 'Female') ? [typography.callout, tabs.currTabText] : [typography.callout, tabs.tabText]

    return (
      <View style={tabs.container}>

        <Text style={title}>
          Filters:
        </Text>

        <View style={tabsGroup}>
          <TouchableHighlight
            style={maleTab}
            onPress={() => this.handleGenderFilter('Male')}
          >
            <Text style={maleText}>Men</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={femaleTab}
            onPress={() => this.handleGenderFilter('Female')}
          >
            <Text style={femaleText}>Women</Text>
          </TouchableHighlight>
        </View>

        <View style={tabsGroup}>
          {
            divisions.map((division, index) => {
              return (
                <TouchableHighlight
                  style={(currDivision === division) ? tabs.currTab : tabs.tab}
                  onPress={() => this.handleDivisionFilter(division)}
                  key={index}
                >
                  <Text style={(currDivision === division) ? [typography.callout, tabs.currTabText] : [typography.callout, tabs.tabText]}>{division}</Text>
                </TouchableHighlight>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default CompetitorFilter