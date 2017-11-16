import React from 'react'

// containers
import CompetitorContainer from '../../containers/CompetitorContainer'


class AdminCompetitors extends React.Component {
  render() {
    return (
      <CompetitorContainer
        navigation={this.props.navigation}
        admin={true}
      />
    )
  }
}

export default AdminCompetitors