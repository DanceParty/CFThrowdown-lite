import React from 'react'
import { Button, Text, View } from 'react-native'
import { Card } from 'react-native-elements'

// styles
import { typography } from '../../../styles/typography'
import { padding } from '../../../styles/padding'
import { card } from '../../../styles/card'


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
            <Text style={[typography.title2, card.subtitle, padding.mdPaddingTop]}>
              {competitor.division} - {competitor.gender}
            </Text>
          </View>

          <View style={card.contentAlt}>

            <View style={card.row}>
              <View style={card.contentLeft}>
                <Text style={[typography.title2, card.subtitle, padding.mdPaddingTop, {textAlign: 'left'}]}>Workout</Text>
              </View>
              <View style={card.contentCenter}>
                <Text style={[typography.title2, card.subtitle, padding.mdPaddingTop, {textAlign: 'center'}]}>Score</Text>
              </View>
              <View style={card.contentRight}>
                <Text style={[typography.title2, card.subtitle, padding.mdPaddingTop, {textAlign: 'right'}]}>Placing</Text>
              </View>
            </View>

          </View>

          <View style={card.contentAlt}>

            {
              scores.map((score, index) => {
                return (
                  <View style={card.row} key={index}>
                    <View style={card.contentLeft}>
                      <Text style={[typography.title3, padding.smPaddingTop, {textAlign: 'left'}]}>{score.name}</Text>
                    </View>
                    <View style={card.contentCenter}>
                      <Text style={[typography.title2, padding.smPaddingTop, {textAlign: 'center'}]}>
                      {score.points > 0 ? score.points : "N/A"}
                      </Text>
                    </View>
                    <View style={card.contentRight}>
                      <Text style={[typography.title2, padding.smPaddingTop, padding.smPaddingRight, {textAlign: 'right'}]}>
                        {score.place < 100000 ? score.place : "N/A"}
                      </Text>
                    </View>
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