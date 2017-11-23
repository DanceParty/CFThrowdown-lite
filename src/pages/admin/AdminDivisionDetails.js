import React from 'react'

// containers
import DivisionDetailsContainer from '../../containers/DivisionDetailsContainer'


class AdminDivisionDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.division
  })

  render() {
    const division = this.props.navigation.state.params.division
    const navigation = this.props.navigation
    return (
      <DivisionDetailsContainer
        admin={true}
        navigation={navigation}
        division={division}
      />
    )
  }

}

export default AdminDivisionDetails