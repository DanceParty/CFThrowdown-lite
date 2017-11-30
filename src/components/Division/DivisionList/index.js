import React from 'react'
import { Button, FlatList, View } from 'react-native'

// components
import DivisionListItem from '../DivisionListItem'

// styles
import { container } from '../../../styles/container'


const DivisionList = (props) => {
  const divisions = props.divisions.sort((a, b) => {
    return a.length - b.length
  })
  const navigation = props.navigation
  const admin = props.admin
  return (
    <View style={container.listContainerDiv}>
      <FlatList
        style={{ backgroundColor: 'white' }}
        data={divisions}
        keyExtractor={(item, index) => index}
        renderItem={({item}) =>
          <DivisionListItem
            navigation={navigation}
            item={item}
          />
        }
      />
      {
        admin &&
        <Button
          title="Add Division"
          onPress={() => props.navigation.navigate('AddDivision')}
        />
      }
    </View>
  )
}

export default DivisionList