import React from 'react'

// containers
import DivisionContainer from '../../containers/DivisionContainer'


const AdminDivisions = (props) => {
  const navigation = props.navigation
  return (
    <DivisionContainer
      navigation={navigation}
      admin={true}
    />
  )
}

export default AdminDivisions