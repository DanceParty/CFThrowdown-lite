import React from 'react'

// containers
import CompetitorContainer from '../../containers/CompetitorContainer'


const Competitors = (props) => {
  const navigation = props.navigation
  return (
    <CompetitorContainer
      admin={false}
      navigation={navigation}
    />
  )
}

export default Competitors