import React from 'react'

// containers
import LeaderboardContainer from '../../containers/LeaderboardContainer'


class Leaderboard extends React.Component {
  render() {
    return (
      <LeaderboardContainer
        admin={false}
        navigation={this.props.navigation}
      />
    )
  }
}

export default Leaderboard