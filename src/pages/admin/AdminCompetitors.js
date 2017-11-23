import React from 'react'

// containers
import CompetitorContainer from '../../containers/CompetitorContainer'


const AdminCompetitors = (props) => {
  const navigation = props.navigation
  return (
    <CompetitorContainer
      navigation={navigation}
      admin={true}
    />
  )
}

export default AdminCompetitors