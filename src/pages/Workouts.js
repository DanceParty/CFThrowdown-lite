import React from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'

class Workouts extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={[{
            item: 'RX'
          }, {
            item: 'Scaled'
          }, {
            item: 'Masters 35-39'
          }, {
            item: 'Masters 40-44'
          }, {
            item: 'Masters 45-49'
          }, {
            item: 'Masters 50-54'
          }, {
            item: 'Masters 55-59'
          }, {
            item: 'Masters 60-64'
          }, {
            item: 'Masters 65+'
          }]}
          renderItem={({item}) => <Text style={styles.text}>{item.item}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  list: {
    margin: 10
  },
  text: {
    flex: 1,
    margin: 25,
    textAlign: 'center'
  }
})

export default Workouts