import React from 'react'
import { StyleSheet, View } from 'react-native'

// containers
import MenuContainer from '../../containers/MenuContainer'


const Home = (props) => {
  const navigation = props.navigation
  return (
    <View style={styles.page}>
      <MenuContainer
        admin={false}
        navigation={navigation}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch'
  }
})

export default Home