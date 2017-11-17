import React from 'react'

// containers
import CompetitorContainer from '../../containers/CompetitorContainer'

class Competitors extends React.Component {
  render() {
    return (
      <CompetitorContainer
        admin={false}
        navigation={this.props.navigation}
      />
    )
  }
}

export default Competitors