import React from 'react'
import { Button, Text, View } from 'react-native'

// firebase
import { getCompetitors } from '../../actions/competitors'
import { allDivisions } from '../../actions/divisions'

// components
import CompetitorList from '../../components/Competitor/CompetitorList'
import CompetitorFilter from '../../components/Competitor/CompetitorFilter'

// styles
import { container } from '../../styles/container'


class CompetitorContainer extends React.Component {

  state = {
    competitors: undefined,
    filteredCompetitors: undefined,
    divisions: undefined,
    currentGender: 'Male',
    currentDivision: 'RX',
  }

  componentWillMount() {
    allDivisions().then((res) => {
      if (res) {
        const divisionList = Object.keys(res)
        this.setState({
          divisions: ["No Division", ...divisionList]
        })
      }
    })
    // get all of the competitors and store them in an array in the state
    getCompetitors().then((res) => {
      if (res) {
        const filteredCompetitors = res.filter((competitor) => {
          return (competitor.gender === 'Male') && (competitor.division === 'RX')
        })
        this.setState({
          competitors: res,
          filteredCompetitors: filteredCompetitors,
        })
      }
    })
  }

  handleEndFlatList = () => {
    const results = this.state.competitors
  }

  handleGenderFilter = (gender) => {
    const currGender = this.state.currentGender
    const currDivision = this.state.currentDivision
    if (gender === currGender) {
      return false
    } else {
      const competitors = this.state.competitors
      // filter competitor array into a filtered array by gender 'male'
      const filteredArray = competitors.filter((competitor) => {
        return (competitor.gender === gender) && (competitor.division === currDivision)
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
      currentDivision: division,
      filteredCompetitors: filteredDivisions
    }))
  }

  render() {
    const competitors = this.state.filteredCompetitors
    const divisions = this.state.divisions
    const admin = this.props.admin
    const navigation = this.props.navigation
    const currDivision = this.state.currentDivision
    const currGender = this.state.currentGender
    if (competitors && divisions) {
      return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <CompetitorFilter
            gender={currGender}
            division={currDivision}
            divisions={divisions}
            handleMaleFilter={this.handleMaleFilter}
            handleGenderFilter={this.handleGenderFilter}
            handleDivisionFilter={this.handleDivisionFilter}
          />
          <CompetitorList
            admin={admin}
            competitors={competitors}
            navigation={navigation}
          />
        </View>
      )
    } else if (competitors && !divisions) {
      return (
        <View>
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

export default CompetitorContainer