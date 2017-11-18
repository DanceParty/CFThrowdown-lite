import React from 'react'

// containers
import CompetitorDetailsContainer from '../../containers/CompetitorDetailsContainer'


class CompetitorDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.competitor.firstName} ${navigation.state.params.competitor.lastName}`
  })

  render() {
    return (
      <CompetitorDetailsContainer
        admin={false}
        navigation={this.props.navigation}
      />
    )
  }
}

export default CompetitorDetails