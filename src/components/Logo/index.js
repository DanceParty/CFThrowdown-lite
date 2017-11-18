import React from 'react'
import { Image } from 'react-native'


const Logo = (props) => {
  return (
    <Image
      source={require('../../../assets/logo.png')}
      resizeMode="center"
    />
  )
}

export default Logo