import React from 'react'

// containers
import CompetitorDetailsContainer from '../../containers/CompetitorDetailsContainer'


class CompetitorDetails extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.competitor.firstName} ${navigation.state.params.competitor.lastName}`
  })

  render() {
    const navigation = this.props.navigation
    const competitor = this.props.navigation.state.params.competitor
    return (
      <CompetitorDetailsContainer
        admin={false}
        navigation={navigation}
        competitor={competitor}
      />
    )
  }
}

export default CompetitorDetails