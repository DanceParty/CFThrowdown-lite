import React from 'react'
import { FlatList, Text, ScrollView, StyleSheet, TouchableHighlight, View } from 'react-native'

import { getCompetitors } from '../../actions/competitors'
import { allDivisions } from '../../actions/divisions'

class Leaderboard extends React.Component {

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
      // create array of divisions
      const divisionList = Object.keys(divisionResult)
      // try and store 'RX' by grabbing the shortest element of the array
      const currDivision = divisionList.reduce((a, b) => (a.length <= b.length) ? a : b)

      this.setState({
        divisions: divisionList,
        currentDivision: currDivision
      }, () => {
        getCompetitors().then((competitorRes) => {
          // create filtered array of competitors that fit the filter set in state
          const filteredCompetitors = competitorRes.filter((competitor) => {
            return (competitor.gender === this.state.currentGender) && (competitor.division === this.state.currentDivision)
          })
          this.setState({
            competitors: competitorRes,
            filteredCompetitors: filteredCompetitors,
          })
        })
      })
    })
  }

  handleMaleFilter = () => {
    // set the current gender to Male and
    // filter the list of competitors
    if (this.state.currentGender === 'Male') {
      return null
    } else {
      const competitors = this.state.competitors
      // filter competitors by Male and currentDivision
      const filteredCompetitors = competitors.filter((competitor) => {
        if ((competitor.gender === 'Male') && (competitor.division === this.state.currentDivision)) {
          return true
        }
        return false
      })
      this.setState({
        filteredCompetitors: filteredCompetitors,
        currentGender: 'Male',
      })
    }
  }

  handleFemaleFilter = () => {
    // set the current gender to Male and
    // filter the list of competitors
    if (this.state.currentGender === 'Female') {
      return null
    } else {
      const competitors = this.state.competitors
      // filter competitors by Male and currentDivision
      const filteredCompetitors = competitors.filter((competitor) => {
        if ((competitor.gender === 'Female') && (competitor.division === this.state.currentDivision)) {
          return true
        }
        return false
      })
      this.setState({
        filteredCompetitors: filteredCompetitors,
        currentGender: 'Female',
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
    if (this.state.filteredCompetitors && this.state.divisions) {
      return (
        <ScrollView>
          <View style={styles.container}>

            <View>
              <Text>Gender Filters:</Text>
              <TouchableHighlight
                onPress={this.handleMaleFilter}
              >
                <Text
                  style={(this.state.currentGender === 'Male') && {color: 'red'}}
                >
                  Men
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this.handleFemaleFilter}
              >
                <Text
                  style={(this.state.currentGender === 'Female') && {color: 'red'}}
                >
                  Women
                </Text>
              </TouchableHighlight>
            </View>

            <View>
              <Text>Division Filters:</Text>
              {
                this.state.divisions.map((division, index) => {
                  return (
                    <TouchableHighlight
                      onPress={() => this.handleDivisionFilter(division)}
                      key={index}
                    >
                      <Text
                        style={(this.state.currentDivision === division) && { color: 'red' } }
                      >
                        {division}
                      </Text>
                    </TouchableHighlight>
                  )
                })
              }
            </View>

            <FlatList
              style={styles.list}
              data={this.state.filteredCompetitors.sort((a, b) => {
                return a.totalScore - b.totalScore
              })}
              renderItem={({item}) =>
                <Text
                  style={styles.text}
                >
                  {item.fullName}
                </Text>
              }
              keyExtractor={(item, index) => index}
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
  list: {
    margin: 10
  },
  text: {
    flex: 1,
    margin: 25,
    textAlign: 'center'
  }
})

export default Leaderboard