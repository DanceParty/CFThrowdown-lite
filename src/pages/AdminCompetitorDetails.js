import React from 'react'
import { Button, FlatList, TouchableHighlight, Text, TextInput, StyleSheet, View } from 'react-native'

// firebase
import { getWorkoutsByDivisionAndGender } from '../actions/workouts'
import { updateCompetitor } from '../actions/competitors'

class AdminCompetitorDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.competitor.fullName}`
  })

  state = {
    workouts: undefined,
    editMode: false,
    scores: undefined
  }

  componentWillMount() {
    // get workouts to match data with scores
    const divisionFilter = this.props.navigation.state.params.competitor.division
    const genderFilter = this.props.navigation.state.params.competitor.gender

    getWorkoutsByDivisionAndGender(divisionFilter, genderFilter).then((workoutResult) => {
      this.setState({
        workouts: workoutResult,
        scores: this.props.navigation.state.params.competitor.scores,
      })
    })
  }

  handleEditScores = () => {
    const currentState = this.state.editMode

    if (!this.state.editMode) {
      this.setState((prevState) => ({
        editMode: !prevState.editMode,
      }))
    } else {
      // update scores for the competitor
      const competitorId = this.props.navigation.state.params.competitor.id
      const scores = this.state.scores
      updateCompetitor(competitorId, scores)
      // update state with no more edit mode
      this.setState((prevState) => ({
        editMode: !prevState.editMode,
      }))
    }
  }

  handleScoreEdit = (text, scoreId) => {
    const scoreObject = this.state.scores
    Object.keys(scoreObject).forEach((key) => {
      if (key === scoreId) {
        scoreObject[key] = Number(text)
      }
    })
    this.setState({
      scores: scoreObject
    })
  }

  render() {
    const { competitor } = this.props.navigation.state.params
    if (this.state.workouts) {
      const scoresArray = []
      const index = 0
      this.state.workouts.map((workout) => {
        Object.keys(competitor.scores).forEach((key) => {
          if (workout.id === key) {
            scoresArray[index++] = { name: workout.name, score: competitor.scores[key], id: key }
          }
        })
      })
      return (
        <View>
          <Text><Text>NAME: </Text>{competitor.fullName}</Text>
          <Text><Text>GENDER: </Text>{competitor.gender}</Text>
          <Text><Text>DIVISION: </Text>{competitor.division}</Text>
          <Text>SCORES:</Text>
          {
            !this.state.editMode &&
            scoresArray.map((score, index) => {
              return (
                <View key={index}>
                  <Text key={index}>{score.name} - {score.score}</Text>
                </View>
              )
            })
          }
          {
            this.state.editMode &&
            scoresArray.map((score, index) => {
              return (
                <View key={index}>
                  <Text>{score.name}:</Text>
                  <TextInput
                    style={{ borderWidth: 1, borderColor: 'black' }}
                    onChangeText={(text) => this.handleScoreEdit(text, score.id)}
                    value={score.score.toString()}
                  />
                </View>
              )
            })
          }
          <Button
            onPress={this.handleEditScores}
            title={this.state.editMode ? `Save Changes` : `Edit Mode`}
            color='purple'
          />
        </View>
      )
    } else {
      return null
    }
  }

}

export default AdminCompetitorDetails