import React from 'react'

// containers
import NewDivisionContainer from '../../containers/NewDivisionContainer'

const AddDivision = (props) => {
  const navigation = props.navigation
  return (
    <NewDivisionContainer
      admin={true}
      navigation={navigation}
    />
  )
}

export default AddDivision