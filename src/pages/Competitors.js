import React from 'react'
import { FlatList, TouchableHighlight, Text, StyleSheet, View } from 'react-native'

// firebase
import { getCompetitors } from '../actions/competitors'
import { allDivisions } from '../actions/divisions'

class Competitors extends React.Component {

  state = {
    competitors: undefined,
    filteredCompetitors: undefined,
    divisions: undefined,
    currentGender: undefined,
  }

  componentWillMount() {
    // get all of the competitors and store them in an array in the state
    getCompetitors().then((result) => {
      // get competitors and store them in state
      this.setState({
        competitors: result,
        filteredCompetitors: result,
      }, () => {
        // after storing competitors, grab all divisions and store in state
        allDivisions().then((result) => {
          const divisionList = Object.keys(result)
          this.setState({
            divisions: divisionList
          })
        })
      })
    })
  }

  handleMaleFilter = () => {
    const competitors = this.state.competitors
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
              <Text style={styles.text}>{item.fullName} - {item.gender} - {item.division}</Text>
            }
            keyExtractor={(item, index) => index}
          />
        </View>
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

export default Competitors