import React from 'react'
import { Button, Text, View } from 'react-native'


class Competitor extends React.Component {

  handleEditMode = () => {
    this.props.handleEditMode()
  }

  render() {
    const competitor = this.props.competitor
    const scores = this.props.scores
    const admin = this.props.admin
    return (
      <View>
        <Text>Name: <Text>{competitor.firstName} {competitor.lastName}</Text></Text>
        <Text>Gender: <Text>{competitor.gender}</Text></Text>
        <Text>Division: <Text>{competitor.division}</Text></Text>
        <Text>Gender: <Text>{competitor.gender}</Text></Text>
        {
          scores.map((score, index) => {
            return (
              <View key={index}>
                <Text>{score.name} - {score.points || '0'}</Text>
              </View>
            )
          })
        }
        {
          admin &&
          <Button
            onPress={this.handleEditMode}
            title='Edit Mode'
            color='purple'
          />
        }
      </View>
    )
  }
}

export default Competitor