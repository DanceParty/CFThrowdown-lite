import React from 'react'
import { StyleSheet, Text } from 'react-native'


const CompetitorListItem = (props) => {
  const navigation = props.navigation
  const competitor = props.competitor
  return (
    <Text
      style={styles.text}
      onPress={() => navigation.navigate('AdminCompetitorDetails', { competitor: competitor })}
    >
      {competitor.fullName} - {competitor.gender} - {competitor.division}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    margin: 25,
    textAlign: 'center',
  }
})

export default CompetitorListItem