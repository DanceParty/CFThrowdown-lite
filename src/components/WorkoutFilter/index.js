import React from 'react'
import { TouchableHighlight, StyleSheet, Text, View } from 'react-native'

// styles
import { typography } from '../../styles/typography'
import { tabs } from '../../styles/tabs'
import { padding } from '../../styles/padding'


class WorkoutFilter extends React.Component {

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

    // group filter style
    const tabsGroup = [tabs.tabsGroup, padding.smPaddingTop]

    // title style
    const title = [typography.title3, padding.smPaddingTop]

    // male filter style
    const maleTabStyle = (gender === 'Male') ? tabs.currTab : tabs.tab
    const maleTextStyle = (gender === 'Male') ? [typography.callout, tabs.currTabText] : [typography.callout, tabs.tabText]

    // female filter style
    const womenTabStyle = (gender === 'Female') ? tabs.currTab : tabs.tab
    const womenTextStyle = (gender === 'Female') ? [typography.callout, tabs.currTabText] : [typography.callout, tabs.tabText]

    return (
      <View style={tabs.container}>

        <Text style={title}>
          Filters:
        </Text>

        <View style={tabsGroup}>
          <TouchableHighlight
            style={maleTabStyle}
            onPress={() => this.handleGenderFilter('Male')}
          >
            <Text style={maleTextStyle}>Men</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={womenTabStyle}
            onPress={() => this.handleGenderFilter('Female')}
          >
            <Text style={womenTextStyle}>Women</Text>
          </TouchableHighlight>
        </View>

        <View style={tabsGroup}>
          {
            divisions.map((division, index) => {
              return (
                <TouchableHighlight
                  style={(selectedDivision === division) ? tabs.currTab : tabs.tab}
                  onPress={() => this.handleDivisionFilter(division)}
                  key={index}
                >
                  <Text style={(selectedDivision === division) ? [typography.callout, tabs.currTabText] : [typography.callout, tabs.tabText]}>{division}</Text>
                </TouchableHighlight>
              )
            })
          }
        </View>
      </View>
    )
  }

}

export default WorkoutFilter