import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

// styles
import { container } from '../../../styles/container'
import { typography } from '../../../styles/typography'
import { tabs } from '../../../styles/tabs'


class LeaderboardFilter extends React.Component {

  handleGenderFilter = (gender) => {
    this.props.handleGenderFilter(gender)
  }

  handleDivisionFilter = (division) => {
    this.props.handleDivisionFilter(division)
  }

  render() {
    const gender = this.props.gender
    const currDivision = this.props.currDivision
    const divisions = this.props.divisions.sort((a, b) => {
      return a.length - b.length
    })

    let isMale = gender === 'Male'
    let isFemale = gender === 'Female'

    return (

      <View style={container.filterContainer}>

        <View style={tabs.tabsGroup}>
          <Text style={typography.headline}>
            Filters:
          </Text>
        </View>

        <View style={tabs.tabsGroup}>
          <TouchableHighlight
            style={(gender === 'Male') ? tabs.currentGenderTab : tabs.genderTab}
            onPress={() => this.handleGenderFilter('Male')}
          >
            <Text style={[typography.subhead, typography.center, (gender === 'Male' ? tabs.currTabText : tabs.tabText)]}>Men</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={(gender === 'Female') ? tabs.currentGenderTab : tabs.genderTab}
            onPress={() => this.handleGenderFilter('Female')}
          >
            <Text style={[typography.subhead, typography.center, (gender === 'Female' ? tabs.currTabText : tabs.tabText)]}>Women</Text>
          </TouchableHighlight>
        </View>

        <View style={tabs.tabsGroupSecondary}>
          {
            divisions.map((division, index) => {
              return (
                <TouchableHighlight
                  style={(division === currDivision ? tabs.currentDivTab : tabs.divTab)}
                  onPress={() => this.handleDivisionFilter(division)}
                  key={index}
                >
                  <Text style={[typography.subhead, typography.center, (division === currDivision ? tabs.currTabText : tabs.tabText)]}>{division}</Text>
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
