import React from 'react'
import { Button, Text, View } from 'react-native'
import { Card } from 'react-native-elements'

// styles
import { typography } from '../../styles/typography'
import { padding } from '../../styles/padding'
import { card } from '../../styles/card'

// components
import PrimaryButton from '../PrimaryButton'


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
        <Card containerStyle={{padding: 0}}>

          <View style={card.header}>
            <Text style={[typography.title1, card.title]}>{competitor.firstName} {competitor.lastName}</Text>
          </View>

          <View style={card.caption}>
            <Text style={[typography.title2, card.subtitle, padding.mdPaddingTop]}>
              {competitor.gender}, {competitor.division}
            </Text>
          </View>

          <View style={card.content}>
            {
              scores.map((score, index) => {
                return (
                  <View key={index}>
                    <Text>
                      <Text style={[typography.body, padding.smPadding]}>{score.name}: </Text>
                      <Text style={[typography.headline, padding.smPadding]}>{score.points || '0'}</Text>
                    </Text>
                  </View>
                )
              })
            }
          </View>


          {
            admin &&
            <Button
              onPress={this.handleEditMode}
              title='Edit Mode'
            />
          }
        </Card>
      </View>

    )
  }
}

export default Competitor