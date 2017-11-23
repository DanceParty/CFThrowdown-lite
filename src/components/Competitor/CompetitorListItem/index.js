import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// styles
import { typography } from '../../../styles/typography'
import { listItem } from '../../../styles/listItem'


const CompetitorListItem = (props) => {
  const navigation = props.navigation
  const competitor = props.competitor
  const admin = props.admin
  return (
    <TouchableHighlight
      underlayColor="white"
      onPress={() => admin ? navigation.navigate('AdminCompetitorDetails', { competitor: competitor }) : navigation.navigate('CompetitorDetails', { competitor: competitor })}
    >
      <View style={listItem.container}>

        <View style={listItem.left}>
          <Text style={[listItem.item, typography.headline]}>{competitor.fullName}</Text>
          <Text style={typography.footnote}>{competitor.gender} - {competitor.division}</Text>
        </View>

        <View style={listItem.right}>
          <Ionicons name="ios-arrow-forward" size={28} color="black" />
        </View>

      </View>
    </TouchableHighlight>
  )
}

export default CompetitorListItem