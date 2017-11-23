import React from 'react'
import { Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// actions
import { addDivision } from '../../actions/divisions'

// components
import DivisionForm from '../../components/Division/DivisionForm'

class NewDivisionContainer extends React.Component {

  state = {
    name: '',
  }

  handleNameChange = (value) => {
    this.setState(() => ({
      name: value
    }))
  }

  handleDivisionSubmit = () => {
    if (!this.state.name) {
      Alert.alert('New Division Warning', 'Please enter a division name')
    } else {
      const division = {
        name: this.state.name,
        workouts: [],
      }
      addDivision(division)
      this.props.navigation.navigate('AdminHome')
    }
  }

  handleCancelDivision = () => {
    this.props.navigation.navigate('AdminHome')
  }

  render() {
    return (
      <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid={true}>
        <DivisionForm
          handleNameChange={this.handleNameChange}
          handleDivisionSubmit={this.handleDivisionSubmit}
          handleCancelDivision={this.handleCancelDivision}
        />
      </KeyboardAwareScrollView>
    )
  }
}

export default NewDivisionContainer