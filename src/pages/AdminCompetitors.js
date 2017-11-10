import React from 'react'
import { Button, FlatList, TouchableHighlight, Text, StyleSheet, View } from 'react-native'

// firebase
import { getCompetitors } from '../actions/competitors'
import { allDivisions } from '../actions/divisions'

class AdminCompetitors extends React.Component {

  state = {
    competitors: undefined,
    filteredCompetitors: undefined,
    divisions: undefined,
    currentGender: undefined,
  }

  componentWillMount() {
    // get all of the competitors and store them in an array in the state
    getCompetitors().then((competitorsResult) => {
      // get competitors and store them in state
      this.setState({
        competitors: competitorsResult,
        filteredCompetitors: competitorsResult,
      }, () => {
        // after storing competitors, grab all divisions and store in state
        allDivisions().then((divisionsResult) => {
          const divisionList = Object.keys(divisionsResult)
          this.setState({
            divisions: divisionList
          })
        })
      })
    })
  }

  handleMaleFilter = () => {
    const competitors = this.state.competitors
    // filter competitor array into a filtered array by gender 'male'
    const filteredArray = competitors.filter((competitor) => {
      if (competitor.gender === 'Male') {
        return true
      }
      return false
    })
    this.setState(() => ({
      filteredCompetitors: filteredArray,
      currentGender: 'Male',
    }))
  }

  handleFemaleFilter = () => {
    const competitors = this.state.competitors
    // filter competitor array into a filtered array by gender 'female'
    const filteredArray = competitors.filter((competitor) => {
      if (competitor.gender === 'Female') {
        return true
      }
      return false
    })
    this.setState(() => ({
      filteredCompetitors: filteredArray,
      currentGender: 'Female'
    }))
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
    if (this.state.filteredCompetitors && this.state.divisions) {
      return (
        <View style={styles.container}>
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
          </View>
          <View>
          <Text>Division Filters:</Text>
            {
              this.state.divisions.map((division, index) => {
                return (
                  <TouchableHighlight onPress={() => this.handleDivisionFilter(division)} key={index}>
                    <Text>{division}</Text>
                  </TouchableHighlight>
                )
              })
            }
          </View>
          <FlatList
            style={styles.list}
            data={this.state.filteredCompetitors}
            renderItem={({item}) =>
              <Text
                style={styles.text}
                onPress={() => this.props.navigation.navigate('AdminCompetitorDetails', { competitor: item })}
              >
                {item.fullName} - {item.gender} - {item.division}
              </Text>
            }
            keyExtractor={(item, index) => index}
          />
          <Button
            title="Add Competitor"
            onPress={() => this.props.navigation.navigate('AddCompetitor')}
          />
        </View>
      )
    } else {
      return (
        <Button
          title="Add Competitor"
          onPress={() => this.props.navigation.navigate('AddCompetitor')}
        />
      )
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

export default AdminCompetitors