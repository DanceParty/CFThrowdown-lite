import React from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'

// components
import CompetitorListItem from '../CompetitorListItem'

// styles
import { container } from '../../styles/container'


const CompetitorList = (props) => {
  const competitors = props.competitors
  const navigation = props.navigation
  const admin = props.admin
  return (
    <View style={container.containerWhite}>
      <FlatList
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