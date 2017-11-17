import React from 'react'

// containers
import DivisionDetailsContainer from '../../containers/DivisionDetailsContainer'


class AdminDivisionDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.division
  })

  render() {
    return (
      <DivisionDetailsContainer
        admin={true}
        navigation={this.props.navigation}
        division={this.props.navigation.state.params.division}
      />
    )
  }

}

export default AdminDivisionDetails