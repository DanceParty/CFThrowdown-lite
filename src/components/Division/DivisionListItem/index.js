import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// styles
import { typography } from '../../../styles/typography'
import { listItem } from '../../../styles/listItem'


const DivisionList = (props) => {
  const navigation = props.navigation
  const division = props.item
  return (
    <TouchableHighlight
      underlayColor="white"
      onPress={() => navigation.navigate('AdminDivisionDetails', { division: division })}
    >
      <View style={listItem.container}>

        <View style={listItem.left}>
          <Text style={[listItem.item, typography.headline]}>{division}</Text>
        </View>

        <View style={listItem.right}>
          <Ionicons name="ios-arrow-forward" size={28} color="black" />
        </View>

      </View>
    </TouchableHighlight>
  )
}

export default DivisionList