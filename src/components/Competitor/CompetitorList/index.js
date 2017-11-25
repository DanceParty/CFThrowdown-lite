import React from 'react'
import { Button, FlatList, View } from 'react-native'

// components
import CompetitorListItem from '../CompetitorListItem'

// styles
import { container } from '../../../styles/container'


const CompetitorList = (props) => {
  const competitors = props.competitors.sort((a, b) => {
    const aLastName = a.lastName.toUpperCase()
    const bLastName = b.lastName.toUpperCase()
    if (aLastName < bLastName) {
      return -1
    } else if (aLastName > bLastName) {
      return 1
    } else {
      return 0
    }
  })
  const navigation = props.navigation
  const admin = props.admin
  return (
    <View style={container.listContainer}>
      <FlatList
        style={{ backgroundColor: 'white' }}
        data={competitors}
        keyExtractor={(item, index) => index}
        renderItem={({item}) =>
          <CompetitorListItem
            admin={admin}
            competitor={item}
            navigation={navigation}
          />
        }
      />
      {
        admin &&
        <Button
          title="Add Competitor"
          onPress={() => navigation.navigate('AddCompetitor')}
        />
      }
    </View>
  )
}

export default CompetitorList