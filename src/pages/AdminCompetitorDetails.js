import React from 'react'
import { Button, FlatList, TouchableHighlight, Text, TextInput, StyleSheet, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'

// firebase
import { allDivisions } from '../actions/divisions'
import { getWorkoutsByDivisionAndGender } from '../actions/workouts'
import { updateCompetitor } from '../actions/competitors'

// helpers
import { msToMinutesSeconds, minutesAndSecondsToMs } from '../utils/time'

class AdminCompetitorDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.competitor.firstName} ${navigation.state.params.competitor.lastName}`
  })

  state = {
    competitor: this.props.navigation.state.params.competitor || undefined,
    originalGender: this.props.navigation.state.params.competitor.gender,
    originalDivision: this.props.navigation.state.params.competitor.division,
    workouts: undefined,
    editMode: false,
    scores: undefined,
    divisionList: [],
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
        }, () => {
          allDivisions().then((result) => {
            const divisionList = Object.keys(result)
            this.setState(() => ({
              divisionList: divisionList
            }))
          })
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
      let gender = this.state.competitor.gender
      let originalGender = this.state.originalGender
      let division = this.state.competitor.division
      let originalDivision = this.state.originalDivision
      let totalScore = 0
      const competitorId = this.props.navigation.state.params.competitor.id

      console.log(gender, division)
      // check if we need new workouts due to new gender or division
      if (gender !== originalGender || division !== originalDivision) {
        // get workouts of new gender + division
        getWorkoutsByDivisionAndGender(division, gender).then((workoutResult) => {
          console.log(workoutResult)
          let scores = []
          let index = 0
          workoutResult.map((workout) => {
            scores[index++] = {
              workoutId: workout.id,
              points: 0,
              place: 100000,
            }
          })
          let competitor = {
            division: division,
            female: (gender === 'Female'),
            male: (gender === 'Male'),
            firstName: this.state.competitor.firstName,
            lastName: this.state.competitor.lastName,
            scores: scores,
            totalScore: totalScore,
          }
          updateCompetitor(competitorId, competitor)

          this.setState((prevState) => ({
            scores: scores,
            editMode: !prevState.editMode,
          }))
        })
      } else {
        this.state.scores.map(scoreObj => totalScore += scoreObj.points)

        let competitor = {
          division: this.state.competitor.division,
          female: (this.state.competitor.gender === 'Female'),
          male: (this.state.competitor.gender === 'Male'),
          firstName: this.state.competitor.firstName,
          lastName: this.state.competitor.lastName,
          scores: this.state.scores,
          totalScore: totalScore,
        }

        updateCompetitor(competitorId, competitor)

        // update state with no more edit mode
        this.setState((prevState) => ({
          editMode: !prevState.editMode,
        }))
      }
      this.props.navigation.navigate('AdminHome')
    }
  }

  handleScoreEdit = (text, scoreId) => {
    const scoresArr = this.state.scores

    // find the index of the workout we are entering
    const scoreIndex = scoresArr.findIndex((obj => obj.workoutId === scoreId))

    // at that index, change the score to match the new score
    scoresArr[scoreIndex].points = Number(text) || ''


    let competitor = this.state.competitor
    Object.keys(competitor).forEach((key) => {
      if (key === 'scores') {
        competitor[key] = scoresArr
      }
    })
    // set the state
    this.setState({
      competitor: competitor,
      scores: scoresArr,
    })
  }

  handleFirstNameEdit = (text) => {
    const competitor = this.state.competitor
    Object.keys(competitor).forEach((key) => {
      if (key === 'firstName') {
        competitor[key] = text
      }
    })

    this.setState({
      competitor: competitor
    })
  }

  handleLastNameEdit = (text) => {
    const competitor = this.state.competitor
    Object.keys(competitor).forEach((key) => {
      if (key === 'lastName') {
        competitor[key] = text
      }
    })

    this.setState({
      competitor: competitor
    })
  }

  handleMaleCheckbox = () => {
    let competitor = this.state.competitor
    Object.keys(competitor).forEach((key) => {
      if (key === 'gender') {
        competitor[key] = 'Male'
      }
    })

    this.setState({
      competitor: competitor
    })
  }

  handleFemaleCheckbox = () => {
    let competitor = this.state.competitor
    Object.keys(competitor).forEach((key) => {
      if (key === 'gender') {
        competitor[key] = 'Female'
      }
    })

    this.setState({
      competitor: competitor
    })
  }

  handleDivisionChange = (value) => {
    let competitor = this.state.competitor
    Object.keys(competitor).forEach((key) => {
      if (key === 'division') {
        competitor[key] = value
      }
    })
    this.setState(() => ({
      competitor: competitor
    }))
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

      if (!this.state.editMode && this.state) {
        return (
          <View>
            <Text><Text>NAME: </Text>{competitor.firstName} {competitor.lastName}</Text>
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
            <Button
              onPress={this.handleEditMode}
              title='Edit Mode'
              color='purple'
            />
          </View>
        )
      } else if (this.state.editMode) {
        const pickerData = this.state.divisionList.map((division, index) => {
          return {
            key: index,
            label: division,
          }
        })
        return (
          <View>
            <Text>NAME: </Text>
            <TextInput
              style={{ borderWidth: 1, borderColor: 'black' }}
              onChangeText={(text) => this.handleFirstNameEdit(text)}
              value={this.state.competitor.firstName}
            />
            <TextInput
              style={{ borderWidth: 1, borderColor: 'black' }}
              onChangeText={(text) => this.handleLastNameEdit(text)}
              value={this.state.competitor.lastName}
            />
            <Text>GENDER: </Text>
            <CheckBox
              title="Male"
              checked={this.state.competitor.gender === 'Male'}
              onPress={() => this.handleMaleCheckbox()}
            />
            <CheckBox
              title="Female"
              onPress={() => this.handleFemaleCheckbox()}
              checked={this.state.competitor.gender === 'Female'}
            />

            <Text>DIVISION: </Text>
            <ModalSelector
              data={pickerData}
              initValue={this.state.competitor.division}
              onChange={(value) => this.handleDivisionChange(value.label)}
            >
              <TextInput
                style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 50 }}
                editable={false}
                placeholder={this.state.competitor.division}
                value={this.state.division}
              />
            </ModalSelector>
            <Text>SCORES:</Text>
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
              title="Save Changes"
              color='purple'
            />
          </View>
        )
      }
    } else {
      return null
    }
  }

}

export default AdminCompetitorDetails