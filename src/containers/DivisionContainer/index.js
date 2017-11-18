import React from 'react'

// actions
import { allDivisions } from '../../actions/divisions'

// components
import DivisionList from '../../components/DivisionList'


class DivisionContainer extends React.Component {

  state = {
    divisions: undefined,
  }

  componentWillMount() {
    allDivisions().then((res) => {
      if (res) {
        const divisionArr = Object.keys(res)
        this.setState({
          divisions: divisionArr,
        })
      }
    })
  }

  render() {
    const divisions = this.state.divisions
    const admin = this.props.admin
    const navigation = this.props.navigation
    if (divisions) {
      return (
        <DivisionList
          divisions={divisions}
          navigation={navigation}
          admin={this.props.admin}
        />
      )
    } else {
      return (
        <Button
          title="Add Division"
          onPress={() => this.props.navigation.navigate('AddDivision')}
        />
      )
    }
  }

}

export default DivisionContainer