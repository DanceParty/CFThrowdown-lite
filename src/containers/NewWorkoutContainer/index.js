import React from 'react'
import { Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// firebase
import { addWorkout } from '../../actions/workouts'
import { allDivisions, getDivisionWorkouts, updateDivisionWorkouts } from '../../actions/divisions'
import { updateCompetitorScores, getCompetitorByGenderAndDivision } from '../../actions/competitors'

// utils
import { getGenderString } from '../../utils/competitors'

// icons
import '@expo/vector-icons'

// components
import WorkoutForm from '../../components/Workout/WorkoutForm'


class NewWorkoutContainer extends React.Component {

  state = {
    name: '',
    division: '',
    type: '',
    male: false,
    female: false,
    description: '',
    steps: [],
    stepInputs: ['input-0'],
    divisionList: [],
  }

  componentWillMount() {
    allDivisions().then((result) => {
      if (result) {
        const divisionArray = Object.keys(result)
        this.setState(() => ({
          divisionList: divisionArray
        }))
      }
    })
  }

  handleNameChange = (text) => {
    this.setState(() => ({ name: text.trim() }))
  }

  handleDivisionChange = (text) => {
    this.setState(() => ({ division: text.trim() }))
  }

  handleTypeChange = (text) => {
    this.setState(() => ({ type: text.trim() }))
  }

  handleGenderCheckbox = (gender) => {
    this.setState((prevState) => ({
      male: (gender === 'Male') ? !prevState.male : prevState.male,
      female: (gender === 'Female') ? !prevState.female : prevState.female,
    }))
  }

  handleDescriptionChange = (text) => {
    this.setState(() => ({ description: text.trim() }))
  }

  handleAddStep = () => {
    const newKey = `input-${this.state.stepInputs.length}`
    this.setState(() => ({
      stepInputs: this.state.stepInputs.concat([newKey])
    }))
  }

  handleRemoveStep = () => {
    const stepsLength = this.state.steps.length
    const stepsInputsLength = this.state.stepInputs.length

    // remove last element if stepsInputs and steps if the last input box is not empty
    // if it is empty, remove only from stepInputs
    if (stepsLength === stepsInputsLength) {
      this.setState((prevState) => ({
        stepInputs: prevState.stepInputs.filter((stepInput, index) => index !== stepsInputsLength-1),
        steps: prevState.steps.filter((step, index) => index !== stepsLength-1)
      }))
    } else {
      this.setState((prevState) => ({
        stepInputs: prevState.stepInputs.filter((stepInput, index) => index != stepsInputsLength-1),
      }))
    }
  }

  handleStepInput = (text, index) => {
    const newArray = [...this.state.steps]
    newArray[index] = text
    this.setState(() => ({
      steps: newArray
    }))
  }

  handleWorkoutSubmit = () => {
    // error handling
    if (!this.state.name || !this.state.division || !this.state.type || (!this.state.male && !this.state.female) || this.state.steps.length <= 0) {
      Alert.alert('Failed Submission', 'Check that all fields are correct and try again.')
    } else {
      const workout = {
        name: this.state.name,
        division: this.state.division,
        type: this.state.type,
        male: this.state.male,
        female: this.state.female,
        steps: [...this.state.steps],
        description: this.state.description,
      }

      let workoutsArray = []
      const gender = getGenderString(this.state.male, this.state.female)
      const newWorkout = addWorkout(workout)
      // get all workouts for this division
      getDivisionWorkouts(workout.division).then((result) => {
        // insert the new workout and store the value to access the key
        if (result) {
          // if there are already workouts, add this workout to the array
          workoutsArray = [...result, newWorkout.key]
        } else {
          // otherwise, create the workouts key array
          workoutsArray = [newWorkout.key]
        }
        // update the division to contain the workout
        updateDivisionWorkouts(workoutsArray, workout.division)
        // and then double check that the 'key' of the newWorkout is
        // in the skills object of the competitor
      })

      // loop through all competitors with this division and gender,
      getCompetitorByGenderAndDivision(workout.division, gender).then((competitorResult) => {
        if (competitorResult) {
          const newWorkoutKey = newWorkout.key
          // iterate through array of all competitors
          competitorResult.map((competitor) => {
            let competitorId = competitor.id
            // if there is not a scores object
            // meaning that there are no scores yet for this competitor
            // then create a new object with the workout
            // and update competitor
            if (typeof competitor.scores === "undefined") {
              const scores = [
                {
                  workoutId: newWorkoutKey,
                  points: 0,
                  place: 100000,
                }
              ]
              updateCompetitorScores(competitorId, scores)
            } else {
              // create a boolean to see if the workout already exists in the current competitor
              let workoutIsPreset = false
              let competitorScores = competitor.scores
              // iterate through the scores of each competitor
              competitor.scores.map((scoreObj) => {
                if (scoreObj.workoutId === newWorkout.key) {
                  workoutIsPresent = true
                }
              })
              if (!workoutIsPreset) {
                competitorScores = [...competitor.scores, {
                  workoutId: newWorkoutKey,
                  points: 0,
                  place: 100000,
                }]
                updateCompetitorScores(competitorId, competitorScores)
              }
            }
          })
        }
      })
      const resetNav = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'AdminHome' }),
          NavigationActions.navigate({ routeName: 'AdminWorkouts' })
        ]
      })
      this.props.navigation.dispatch(resetNav)
    }
  }

  handleCancelForm = () => {
    this.props.navigation.navigate('AdminHome')
  }

  render() {
    const name = this.state.name
    const division = this.state.division
    const type = this.state.type
    const steps = this.state.steps
    const male = this.state.male
    const female = this.state.female
    const stepInputs = this.state.stepInputs
    const pickerData = this.state.divisionList.map((division, index) => {
      return {
        key: index,
        label: division,
      }
    })
    const scoreTypeData = [
      { key: 0, label: 'Timed' },
      { key: 1, label: 'Weighted' },
      { key: 2, label: 'Points' },
    ]
    return (
      <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid={true}>
        <WorkoutForm
          name={name}
          pickerData={pickerData}
          division={division}
          scoreTypeData={scoreTypeData}
          type={type}
          stepInputs={stepInputs}
          steps={steps}
          male={male}
          female={female}
          handleNameChange={this.handleNameChange}
          handleDivisionChange={this.handleDivisionChange}
          handleTypeChange={this.handleTypeChange}
          handleGenderCheckbox={this.handleGenderCheckbox}
          handleStepInput={this.handleStepInput}
          handleAddStep={this.handleAddStep}
          handleRemoveStep={this.handleRemoveStep}
          handleWorkoutSubmit={this.handleWorkoutSubmit}
          handleDescriptionChange={this.handleDescriptionChange}
          handleCancelForm={this.handleCancelForm}
        />
      </KeyboardAwareScrollView>
    )
  }
}

export default NewWorkoutContainer