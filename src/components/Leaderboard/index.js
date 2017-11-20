import React from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'

// styles
import { container } from '../../styles/container'
import { typography } from '../../styles/typography'
import { listItem } from '../../styles/listItem'


class Leaderboard extends React.Component {
  render() {
    console.log(this.props.competitors)
    const competitors = this.props.competitors.sort((a, b) => {
      return a.totalScore - b.totalScore
    })
    return (
      <View style={container.containerWhite}>
        <FlatList
          keyExtractor={(item, index) => index}
          data={competitors}
          renderItem={({item}) =>
            <View style={listItem.container}>
              <View style={listItem.left}>
                <Text style={typography.headline}>{item.firstName}</Text>
              </View>
              <View style={[listItem.right, { alignItems: 'center' }]}>
                <Text style={typography.caption1}>{item.fullName}</Text>
                <Text style={typography.caption3}>{item.gender} - {item.division}</Text>
              </View>
              <View style={[listItem.right, { alignItems: 'center' }]}>
                <Text style={typography.caption1}>{item.fullName}</Text>
                <Text style={typography.caption3}>{item.gender} - {item.division}</Text>
              </View>
              <View style={[listItem.right, { alignItems: 'center' }]}>
                <Text style={typography.caption1}>{item.fullName}</Text>
                <Text style={typography.caption3}>{item.gender} - {item.division}</Text>
              </View>
              <View style={[listItem.right, { alignItems: 'center' }]}>
                <Text style={typography.caption1}>{item.fullName}</Text>
                <Text style={typography.caption3}>{item.gender} - {item.division}</Text>
              </View>
            </View>
          }
        />
      </View>
    )
  }
}

export default Leaderboard