import React from 'react'
import { FlatList, Text, TouchableHighlight, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// styles
import { container } from '../../../styles/container'
import { typography } from '../../../styles/typography'
import { listItem } from '../../../styles/listItem'


const Leaderboard = (props) => {
  const competitors = props.competitors.sort((a, b) => {
    return a.totalScore - b.totalScore
  })
  const navigation = props.navigation
  return (
    <View style={container.listContainer}>
      <FlatList
        style={{ backgroundColor: 'white' }}
        keyExtractor={(item, index) => index}
        data={competitors}
        renderItem={({item, index}) =>
          <TouchableHighlight
            style={listItem.listItem}
            underlayColor="white"
            onPress={() => navigation.navigate('CompetitorDetails', { competitor: item })}
          >
            <View style={listItem.content}>
              <View style={listItem.left}>
                <Text style={typography.headline}>{index+1}   <Text style={typography.title3}>{item.firstName} {item.lastName}</Text></Text>
              </View>

              <View style={listItem.right}>
                <Ionicons name="ios-arrow-forward" size={28} color="black" />
              </View>
            </View>

          </TouchableHighlight>
        }
      />
    </View>
  )
}

export default Leaderboard