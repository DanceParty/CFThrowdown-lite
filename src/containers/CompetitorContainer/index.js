import React from 'react'
import { Button, FlatList, TouchableHighlight, Text, StyleSheet, View } from 'react-native'

// firebase
import { getCompetitors } from '../../actions/competitors'
import { allDivisions } from '../../actions/divisions'

// components
import CompetitorList from '../../components/CompetitorList'
import CompetitorFilter from '../../components/CompetitorFilter'


class CompetitorContainer extends React.Component {

  state = {
    competitors: undefined,
    filteredCompetitors: undefined,
    divisions: undefined,
    currentGender: undefined,
  }

  componentWillMount() {
    allDivisions().then((res) => {
      if (res) {
        const divisionList = Object.keys(res)
        this.setState({
          divisions: divisionList
        })
      } else {
        this.setState({
          divisions: []
        })
      }
    })
    // get all of the competitors and store them in an array in the state
    getCompetitors().then((res) => {
      if (res) {
        // get competitors and store them in state
        this.setState({
          competitors: res,
          filteredCompetitors: res,
        })
      } else {
        this.setState({
          competitors: [],
          filteredCompetitors: [],
        })
      }
    })
  }

  handleGenderFilter = (gender) => {
    const currGender = this.state.currentGender
    if (gender === currGender) {
      return false
    } else {
      const competitors = this.state.competitors
      // filter competitor array into a filtered array by gender 'male'
      const filteredArray = competitors.filter((competitor) => {
        return (competitor.gender === gender) ? true : false
      })
      this.setState(() => ({
        filteredCompetitors: filteredArray,
        currentGender: gender,
      }))
    }
  }

  handleDivisionFilter = (division) => {
    const competitors = this.state.competitors
    const currentGender = this.state.currentGender
    // since there is no way to view previous filtered array
    // we need to recreate the filtered array so the division filter
    // doesn't stack on top of each other returning zero results
    const filteredDivisions = competitors.filter((competitor) => {
      if (currentGender) {
        if ((competitor.gender === currentGender) && (competitor.division === division)) {
          return true
        } else {
          return false
        }
      } else {
        if (competitor.division === division) {
          return true
        } else {
          return false
        }
      }
    })
    this.setState(() => ({
      filteredCompetitors: filteredDivisions
    }))
  }

  render() {
    const competitors = this.state.filteredCompetitors
    const divisions = this.state.divisions
    const admin = this.props.admin
    const navigation = this.props.navigation
    if (competitors && divisions) {
      return (
        <View>
          <CompetitorFilter
            divisions={divisions}
            handleMaleFilter={this.handleMaleFilter}
            handleGenderFilter={this.handleGenderFilter}
          />
          <CompetitorList
            admin={admin}
            competitors={competitors}
            navigation={navigation}
          />
        </View>
      )
    } else {
      return (
        <View>
          {
            admin ?
            <Button
              title="Add Competitor"
              onPress={() => navigation.navigate('AddCompetitor')}
            />
            :
            <Text>There are currently no competitors available...</Text>
          }
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export default CompetitorContainer