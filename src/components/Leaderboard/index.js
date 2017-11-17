import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'


class Leaderboard extends React.Component {
  render() {
    const competitors = this.props.competitors
    return (
      <FlatList
        style={styles.list}
        data={competitors.sort((a, b) => {
          return a.totalScore - b.totalScore
        })}
        renderItem={({item}) =>
          <Text
            style={styles.text}
          >
            {item.fullName}
          </Text>
        }
        keyExtractor={(item, index) => index}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    margin: 10
  },
  text: {
    flex: 1,
    margin: 25,
    textAlign: 'center'
  }
})

export default Leaderboard