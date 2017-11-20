import React from 'react'
import { Image, StyleSheet } from 'react-native'


const Logo = (props) => {
  return (
    <Image
      style={styles.logo}
      source={require('../../../assets/logo.png')}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    height: undefined,
    width: undefined,
  }
})

export default Logo