import React from 'react'

// containers
import LoginContainer from '../../containers/LoginContainer'


const AdminLogin = (props) => {
  const navigation = props.navigation
  return (
    <LoginContainer
      admin={false}
      navigation={navigation}
    />
  )
}

export default AdminLogin