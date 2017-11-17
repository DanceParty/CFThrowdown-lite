import React from 'react'

// containers
import NewCompetitorContainer from '../../containers/NewCompetitorContainer'


class AddCompetitor extends React.Component {
  render() {
    return (
      <NewCompetitorContainer
        admin={true}
        navigation={this.props.navigation}
      />
    )
  }
}

export default AddCompetitor