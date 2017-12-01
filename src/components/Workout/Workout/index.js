import React from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { Card } from 'react-native-elements'

// styles
import { modal } from '../../../styles/modal'
import { typography } from '../../../styles/typography'
import { padding } from '../../../styles/padding'
import { card } from '../../../styles/card'


class Workout extends React.Component {

  state = {
    showDescription: false,
    modalVisible: false,
  }

  onSubmitWorkout = () => {
    this.props.onSubmitWorkout()
  }

  handleRemoveWorkout = () => {
    this.props.handleRemoveWorkout()
    this.setState({
      modalVisible: false,
    })
  }

  onClickShowDescription = () => {
    this.setState((prevState) => ({
      showDescription: !prevState.showDescription
    }))
  }

  handleModalOpenClose = (visible) => {
    this.setState({
      modalVisible: visible,
    })
  }

  renderDescription = () => {
    const showDescription = this.state.showDescription
    const workout = this.props.workout

  }

  render() {
    const workout = this.props.workout
    const gender = this.props.gender
    const admin = this.props.admin
    const steps = this.props.workout.steps
    const showDescription = this.state.showDescription
    let description = null
    if (workout.description && showDescription) {
      description =
        <View style={card.padding}>
          <Text style={[typography.footnote, padding.smPaddingBottom, { textAlign: 'center' }]}>{workout.description}</Text>
          <Button
            style={card.seperator}
            title="Hide Standards"
            onPress={this.onClickShowDescription}
          />
        </View>
    } else if (workout.description && !showDescription) {
      description =
        <View style={card.padding}>
          <Button
            style={{ color: '#4492D0' }}
            title="View Standards"
            onPress={this.onClickShowDescription}
          />
        </View>
    }
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.handleModalOpenClose(false)}
        >
          <View style={modal.modal}>
            <View style={modal.content}>
              <Text style={[modal.textCenter, typography.body]}>Deleting this workout may have unintended consequences, are you sure you want to remove it?</Text>
            </View>
            <View style={modal.footer}>
              <Button
                style={modal.button}
                title="Cancel"
                onPress={() => this.handleModalOpenClose(false)}
              />
              <Button
                style={modal.button}
                title="Delete"
                onPress={() => this.handleRemoveWorkout()}
                color="red"
              />
            </View>
          </View>
        </Modal>

        <Card containerStyle={{padding: 0}}>

          <View style={card.header}>
            <Text style={[typography.title1, card.title]}>{workout.name}</Text>
            <Text style={[typography.title2, card.subtitle, padding.mdPaddingTop]}>{gender} - {workout.division}</Text>
          </View>

          <View style={card.content}>
            {
              steps.map((step, index) => <Text style={[typography.body, padding.smPadding]} key={index}>{step}</Text>)
            }
          </View>

          {description}

          {
            admin &&
            <View>
              <View style={{ padding: '10%'}}>
                <Button
                  style={{ color: '#4492D0', padding: '2%' }}
                  title="Submit Workout Scores"
                  onPress={() => this.onSubmitWorkout()}
                />
              </View>
              <View style={{ padding: '10%'}}>
                <Button
                  style={{ color: '#4492D0', padding: '2%' }}
                  title="Delete Workout"
                  onPress={() => this.handleModalOpenClose(true)}
                />
              </View>
            </View>
          }
        </Card>
      </View>
    )
  }

}

export default Workout