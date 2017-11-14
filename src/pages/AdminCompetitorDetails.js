import React from 'react'
import { Button, FlatList, TouchableHighlight, Text, TextInput, StyleSheet, View } from 'react-native'

// firebase
import { getWorkoutsByDivisionAndGender } from '../actions/workouts'
import { updateCompetitorScores, updateCompetitorTotalScore } from '../actions/competitors'

// helpers
import { msToMinutesSeconds, minutesAndSecondsToMs } from '../utils/time'

class AdminCompetitorDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.competitor.fullName}`
  })

  state = {
    workouts: undefined,
    editMode: false,
    scores: undefined,
  }

  componentWillMount() {
    // get workouts to match data with scores
    const divisionFilter = this.props.navigation.state.params.competitor.division
    const genderFilter = this.props.navigation.state.params.competitor.gender
    let scores = this.props.navigation.state.params.competitor.scores

    this.setState({
      scores: scores,
    }, () => {
      getWorkoutsByDivisionAndGender(divisionFilter, genderFilter).then((workoutResult) => {
        this.setState({
          workouts: workoutResult,
        })
      })
    })


  }

  handleEditMode = () => {
    const currentState = this.state.editMode

    if (!this.state.editMode) {
      this.setState((prevState) => ({
        editMode: !prevState.editMode,
      }))
    } else {
      // update scores for the competitor
      const competitorId = this.props.navigation.state.params.competitor.id
      const scores = this.state.scores
      let totalScore = 0
      scores.map((scoreObj) => {
        totalScore += scoreObj.points
      })
      console.log(totalScore)
      updateCompetitorScores(competitorId, scores)
      updateCompetitorTotalScore(competitorId, totalScore)
      // update state with no more edit mode
      this.setState((prevState) => ({
        editMode: !prevState.editMode,
      }))
    }
  }

  handleScoreEdit = (text, scoreId) => {
    const scoresArr = this.state.scores

    // find the index of the workout we are entering
    const scoreIndex = scoresArr.findIndex((obj => obj.workoutId === scoreId))

    // at that index, change the score to match the new score
    scoresArr[scoreIndex].points = Number(text) || ''

    // set the state
    this.setState({
      scores: scoresArr
    })
  }

  render() {
    const { competitor } = this.props.navigation.state.params

    // if there are workouts for this division/gender combination
    // create an array to store them all so we can add points
    if (this.state.workouts) {
      const scoresArray = []
      const index = 0
      this.state.workouts.map((workout) => {
        competitor.scores.map((scoreObj) => {
          Object.keys(scoreObj).forEach((key) => {
            if (workout.id === scoreObj[key]) {
              scoresArray[index++] = {
                name: workout.name,
                type: workout.type,
                points: scoreObj['points'] || '',
                id: workout.id
              }
            }
          })
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
                  <Text key={index}>{score.name} - {score.points}</Text>
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
                  <View>
                    <TextInput
                      style={{ borderWidth: 1, borderColor: 'black' }}
                      onChangeText={(text) => this.handleScoreEdit(text, score.id)}
                      value={score.points.toString()}
                    />
                    {
                      score.type === 'Weight' ?
                      <Text>lbs</Text> :
                      <Text>minutes + seconds</Text>
                    }
                  </View>
                </View>
              )
            })
          }
          <Button
            onPress={this.handleEditMode}
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