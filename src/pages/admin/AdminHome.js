import React from 'react'
import { StyleSheet, View } from 'react-native'

// containers
import MenuContainer from '../../containers/MenuContainer'


class AdminHome extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <MenuContainer
          admin={true}
          navigation={this.props.navigation}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'stretch'
  }
})

export default AdminHome