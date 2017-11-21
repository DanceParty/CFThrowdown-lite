import React from 'react'
import { Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// actions
import { allDivisions } from '../../actions/divisions'
import { getWorkoutsByDivisionAndGender } from '../../actions/workouts'
import { addCompetitor } from '../../actions/competitors'

// components
import CompetitorForm from '../../components/CompetitorForm'


class NewCompetitorContainer extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    division: '',
    male: false,
    female: false,
    divisionList: []
  }

  componentWillMount() {
    // get all divisions and assign them to the state
    allDivisions().then((result) => {
      if (result) {
        const divisionList = Object.keys(result)
        this.setState(() => ({
          divisionList: divisionList
        }))
      }
    })
  }

  handleFirstNameChange = (value) => {
    this.setState(() => ({
      firstName: value
    }))
  }

  handleLastNameChange = (value) => {
    this.setState(() => ({
      lastName: value
    }))
  }

  handleDivisionChange = (value) => {
    this.setState(() => ({
      division: value
    }))
  }

  handleGenderCheckbox = (gender) => {
    this.setState((prevState) => ({
      male: (gender === 'Male') ? !prevState.male : false,
      female: (gender === 'Female') ? !prevState.female : false,
    }))
  }

  submitCompetitorForm = () => {
    const gender = this.state.male ? 'Male' : 'Female'
    const warning = !this.state.firstName || !this.state.lastName || (!this.state.male && !this.state.female)

    if (warning) {
      Alert.alert('New Competitor Warning', 'Please check empty fields and try again.')
    } else {
      getWorkoutsByDivisionAndGender(this.state.division, gender).then((result) => {
        if (result) {
          let scoresArray = []
          let index = -1
          result.map((workout) => {
            scoresArray[index += 1] = {
              workoutId: workout.id,
              points: 0,
              place: 100000,
            }
          })

          const competitor = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            division: this.state.division,
            male: this.state.male,
            female: this.state.female,
            scores: scoresArray,
            totalScore: 0,
          }

          addCompetitor(competitor)
        } else {
          const competitor = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            division: this.state.division,
            male: this.state.male,
            female: this.state.female,
            scores: null,
            totalScore: 0,
          }
          addCompetitor(competitor)
        }
      })
      this.props.navigation.navigate('AdminHome')
    }
  }

  handleCancelForm = () => {
    this.props.navigation.navigate('AdminHome')
  }

  render() {
    const navigation = this.props.navigation
    const admin = this.props.admin
    const firstName = this.state.firstName
    const lastName = this.state.lastName
    const division = this.state.division
    const male = this.state.male
    const female = this.state.female
    const modalData = this.state.divisionList.map((division, index) => {
      return {
        key: index,
        label: division,
      }
    })
    return (
      <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid={true}>
        <CompetitorForm
          firstName={firstName}
          lastName={lastName}
          division={division}
          male={male}
          female={female}
          modalData={modalData}
          handleFirstNameChange={this.handleFirstNameChange}
          handleLastNameChange={this.handleLastNameChange}
          handleDivisionChange={this.handleDivisionChange}
          handleGenderCheckbox={this.handleGenderCheckbox}
          submitCompetitorForm={this.submitCompetitorForm}
          handleCancelForm={this.handleCancelForm}
        />
      </KeyboardAwareScrollView>
    )
  }
}

export default NewCompetitorContainer