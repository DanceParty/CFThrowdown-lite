import React from 'react'
import { Button, FlatList, Text, StyleSheet,  View } from 'react-native'


class DivisionList extends React.Component {
  render() {
    const navigation = this.props.navigation
    const division = this.props.item
    return (
      <Text
        style={styles.text}
        onPress={() => navigation.navigate('AdminDivisionDetails', { division: division })}
      >
        {division}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    margin: 25,
    textAlign: 'center'
  }
})

export default DivisionList