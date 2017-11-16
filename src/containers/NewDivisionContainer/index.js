import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'

// actions
import { addDivision } from '../../actions/divisions'

// components
import DivisionForm from '../../components/DivisionForm'

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
    const division = {
      name: this.state.name,
      workouts: [],
    }
    addDivision(division)
    this.props.navigation.navigate('AdminHome')
  }

  render() {
    return (
      <DivisionForm
        handleNameChange={this.handleNameChange}
        handleDivisionSubmit={this.handleDivisionSubmit}
      />
    )
  }
}

export default NewDivisionContainer