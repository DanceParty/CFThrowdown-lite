import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { CheckBox } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'


class CompetitorEditForm extends React.Component {

  handleFirstNameEdit = (text) => {
    this.props.handleFirstNameEdit(text)
  }

  handleLastNameEdit = (text) => {
    this.props.handleLastNameEdit(text)
  }

  handleMaleCheckbox = () => {
    this.props.handleMaleCheckbox()
  }

  handleFemaleCheckbox = () => {
    this.props.handleFemaleCheckbox()
  }

  handleDivisionChange = (text) => {
    this.props.handleDivisionChange(text)
  }

  handleScoreEdit = (text, scoreId) => {
    this.props.handleScoreEdit(text, scoreId)
  }

  handleEditMode = () => {
    this.props.handleEditMode()
  }

  render() {
    const competitor = this.props.competitor
    const firstName = this.props.competitor.firstName
    const lastName = this.props.competitor.lastName
    const isMale = this.props.competitor.gender === 'Male'
    const isFemale = this.props.competitor.gender === 'Female'
    const division = this.props.competitor.division || 'Select A Division'
    const selectedDivision = this.props.selectedDivision
    const scores = this.props.scores
    const modalData = this.props.modalData
    return (
      <View>
        <Text>NAME: </Text>
        <TextInput
          style={styles.textInput}
          value={firstName}
          onChangeText={(text) => this.handleFirstNameEdit(text)}
        />
        <TextInput
          style={styles.textInput}
          value={lastName}
          onChangeText={(text) => this.handleLastNameEdit(text)}
        />
        <Text>GENDER: </Text>
        <CheckBox
          title="Male"
          checked={isMale}
          onPress={() => this.handleMaleCheckbox()}
        />
        <CheckBox
          title="Female"
          checked={isFemale}
          onPress={() => this.handleFemaleCheckbox()}
        />

        <Text>DIVISION: </Text>
        <ModalSelector
          data={modalData}
          initValue={division}
          onChange={(value) =>
            this.handleDivisionChange(value.label)
          }
        >
          <TextInput
            style={styles.modalPicker}
            editable={false}
            placeholder={division}
            value={selectedDivision}
          />
        </ModalSelector>
        <Text>SCORES:</Text>
        {
          scores.map((score, index) => {
            const points = score.points.toString()
            const pointsText = (score.type === 'Weighted') ? <Text>lbs</Text> : <Text>minutes + seconds</Text>
            return (
              <View key={index}>
                <Text>{score.name}:</Text>
                <View>
                  <TextInput
                    style={styles.textInput}
                    value={points}
                    onChangeText={(text) => this.handleScoreEdit(text, score.id)}
                  />
                  { pointsText }
                </View>
              </View>
            )
          })
        }
        <Button
          onPress={this.handleEditMode}
          title="Save Changes"
          color='purple'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
  },
  modalPicker: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    height: 50,
  }
})

export default CompetitorEditForm