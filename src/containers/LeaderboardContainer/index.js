import React from 'react'
import { FlatList, Text, ScrollView, StyleSheet, TouchableHighlight, View } from 'react-native'

// actions
import { getCompetitors } from '../../actions/competitors'
import { allDivisions } from '../../actions/divisions'

// components
import Leaderboard from '../../components/Leaderboard'
import LeaderboardFilter from '../../components/LeaderboardFilter'


class LeaderboardContainer extends React.Component {

  state = {
    competitors: undefined,
    filteredCompetitors: undefined,
    divisions: undefined,
    currentDivision: undefined,
    currentGender: 'Male',
  }

  /**
   * get all divisions
   * store all divisions in state
   * store shortest length division as current division
   * get all competitors
   * store all competitors in state
   * filter competitors by currentGender and currentDivision then store in state
   */
  componentWillMount() {
    // get divisions
    allDivisions().then((divisionResult) => {
      if (divisionResult) {
        // create array of divisions
        const divisionList = Object.keys(divisionResult)
        // try and store 'RX' by grabbing the shortest element of the array
        const currDivision = divisionList.reduce((a, b) => (a.length <= b.length) ? a : b)

        this.setState({
          divisions: divisionList,
          currentDivision: currDivision
        }, () => {
          getCompetitors().then((competitorRes) => {
            if (competitorRes) {
              // create filtered array of competitors that fit the filter set in state
              const filteredCompetitors = competitorRes.filter((competitor) => {
                return (competitor.gender === this.state.currentGender) && (competitor.division === this.state.currentDivision)
              })
              this.setState({
                competitors: competitorRes,
                filteredCompetitors: filteredCompetitors,
              })
            }
          })
        })
      }
    })
  }

  handleGenderFilter = (gender) => {
    const currentGender = this.state.currentGender

    if (currentGender === gender) {
      return false
    } else {
      const competitors = this.state.competitors
      const currentDivision = this.state.currentDivision
      const filteredCompetitors = competitors.filter((competitor) => {
        return ((competitor.gender === gender) && (competitor.division === currentDivision)) ? true : false
      })
      this.setState({
        filteredCompetitors: filteredCompetitors,
        currentGender: gender,
      })
    }
  }

  handleDivisionFilter = (division) => {
    const competitors = this.state.competitors
    const currentGender = this.state.currentGender

    const filteredCompetitors = competitors.filter((competitor) => {
      if ((competitor.gender === currentGender) && (competitor.division === division)) {
        return true
      }
      return false
    })

    this.setState({
      filteredCompetitors: filteredCompetitors,
      currentDivision: division,
    })
  }

  render() {
    const competitors = this.state.filteredCompetitors
    const divisions = this.state.divisions
    const currDivision = this.state.currentDivision
    const gender = this.state.currentGender
    if (competitors && divisions) {
      return (
        <ScrollView>
          <View style={styles.container}>

            <LeaderboardFilter
              gender={gender}
              divisions={divisions}
              currDivision={currDivision}
              handleGenderFilter={this.handleGenderFilter}
              handleDivisionFilter={this.handleDivisionFilter}
            />

            <Leaderboard
              competitors={competitors}
            />

          </View>
        </ScrollView>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})

export default LeaderboardContainer