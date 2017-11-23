import React from 'react'

// containers
import LeaderboardContainer from '../../containers/LeaderboardContainer'


const Leaderboard = (props) => {
  const navigation = props.navigation
  return (
    <LeaderboardContainer
      admin={false}
      navigation={navigation}
    />
  )
}

export default Leaderboard