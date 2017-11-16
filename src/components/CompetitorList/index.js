import React from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'

// components
import CompetitorListItem from '../CompetitorListItem'


const CompetitorList = (props) => {
  const competitors = props.competitors
  const navigation = props.navigation
  const admin = props.admin
  return (
    <View>
      <FlatList
        style={styles.list}
        data={competitors}
        renderItem={({item}) =>
          <CompetitorListItem
            navigation={navigation}
            competitor={item}
          />
        }
        keyExtractor={(item, index) => index}
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

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
})

export default CompetitorList