import React from 'react'

// containers
import NewCompetitorContainer from '../../containers/NewCompetitorContainer'


const AddCompetitor = (props) => {
  const navigation = props.navigation
  return (
    <NewCompetitorContainer
      admin={true}
      navigation={navigation}
    />
  )
}
export default AddCompetitor