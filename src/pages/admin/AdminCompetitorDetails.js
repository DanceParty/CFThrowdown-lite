import React from 'react'

// containers
import CompetitorDetailsContainer from '../../containers/CompetitorDetailsContainer'


class AdminCompetitorDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.competitor.firstName} ${navigation.state.params.competitor.lastName}`
  })

  render() {
    const competitor = this.props.navigation.state.params.competitor
    const navigation = this.props.navigation
    return (
      <CompetitorDetailsContainer
        admin={true}
        navigation={navigation}
        competitor={competitor}
      />
    )
  }
}

export default AdminCompetitorDetails