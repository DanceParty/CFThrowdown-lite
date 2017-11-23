import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

// styles
import { typography } from '../../../styles/typography'
import { tabs } from '../../../styles/tabs'
import { padding } from '../../../styles/padding'


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

    // styles
    const tabsGroup = [tabs.tabsGroup, padding.smPaddingTop]
    const title = [typography.title3, padding.smPaddingTop]
    const maleTab = (gender === 'Male') ? tabs.currTab : tabs.tab
    const maleText = (gender === 'Male') ? [typography.callout, tabs.currTabText] : [typography.callout, tabs.tabText]
    const femaleTab = (gender === 'Female') ? tabs.currTab : tabs.tab
    const femaleText = (gender === 'Female') ? [typography.callout, tabs.currTabText] : [typography.callout, tabs.tabText]
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

export default LeaderboardFilter
