import React from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { Card, CheckBox } from 'react-native-elements'
import ModalSelector from 'react-native-modal-selector'

// styles
import { typography } from '../../../styles/typography'
import { card } from '../../../styles/card'
import { form } from '../../../styles/form'


class CompetitorEditForm extends React.Component {

  state = {
    textInputFocused: undefined
  }

  handleFirstNameEdit = (text) => {
    this.props.handleFirstNameEdit(text)
  }

  handleLastNameEdit = (text) => {
    this.props.handleLastNameEdit(text)
  }

  handleGenderCheckbox = (gender) => {
    this.props.handleGenderCheckbox(gender)
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

  handleCancel = () => {
    this.props.handleCancel()
  }

  handleTextInputFocus = (textInput) => {
    this.setState({
      textInputFocused: textInput,
    })
  }

  handleTextInputOff = () => {
    this.setState({
      textInputFocused: undefined,
    })
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
    const focusedInput = this.state.textInputFocused
    return (

      <View>
        <Card containerStyle={{padding: 0}}>

          <View style={card.header}>
            <Text style={[typography.title1, card.title]}>Edit Mode</Text>
          </View>

          <View style={card.unalignedContent}>

            <View style={form.row}>
              <View style={form.halfContainer}>
                <Text style={typography.footnote}>First name</Text>
                <TextInput
                  style={(focusedInput === 'firstName') ? form.focusedTextInput : form.textInput}
                  value={firstName}
                  underlineColorAndroid="transparent"
                  onFocus={() => this.handleTextInputFocus('firstName')}
                  onEndEditing={() => this.handleTextInputOff()}
                  onChangeText={(text) => this.handleFirstNameEdit(text)}
                />
              </View>
              <View style={form.halfContainer}>
                <Text style={typography.footnote}>Last name</Text>
                <TextInput
                  style={(focusedInput === 'lastName') ? form.focusedTextInput : form.textInput}
                  value={lastName}
                  underlineColorAndroid="transparent"
                  onFocus={() => this.handleTextInputFocus('lastName')}
                  onEndEditing={() => this.handleTextInputOff()}
                  onChangeText={(text) => this.handleLastNameEdit(text)}
                />
              </View>
            </View>

            <View style={form.row}>
              <View style={form.halfContainer}>
                <Text style={typography.footnote}>Gender</Text>
                <CheckBox
                  iconType="material"
                  checkedIcon="done"
                  uncheckedIcon="clear"
                  style={form.checkbox}
                  title="Male"
                  checked={isMale}
                  checkedColor="#4492D0"
                  uncheckedColor="grey"
                  onPress={() => this.handleGenderCheckbox('Male')}
                />
              </View>
              <View style={form.halfContainer}>
                <Text style={typography.footnote}> </Text>
                <CheckBox
                  iconType="material"
                  checkedIcon="done"
                  uncheckedIcon="clear"
                  style={form.checkbox}
                  title="Female"
                  checked={isFemale}
                  checkedColor="#4492D0"
                  uncheckedColor="grey"
                  onPress={() => this.handleGenderCheckbox('Female')}
                />
              </View>
            </View>

            <View style={form.row}>
              <View style={form.container}>
                <Text style={typography.footnote}>Division</Text>
                <View style={form.modal}>
                  <ModalSelector
                    data={modalData}
                    initValue={division}
                    onChange={(value) =>
                      this.handleDivisionChange(value.label)
                    }
                  >
                    <TextInput
                      style={form.modalInput}
                      underlineColorAndroid="transparent"
                      editable={false}
                      placeholder={division}
                      value={selectedDivision}
                    />
                  </ModalSelector>
                </View>
              </View>
            </View>

            <View style={form.row}>
              <View style={form.container}>
                <Text style={typography.footnote}>Scores</Text>
              </View>
            </View>
            {
              scores.map((score, index) => {
                const points = score.points.toString()
                return (
                  <View style={form.row} key={index}>
                    <View style={form.halfContainer}>
                      <Text style={{ height: '100%'}}>
                        <Text style={typography.footnote}>{score.name} </Text>
                        <Text style={typography.caption3}>({ score.type })</Text>
                      </Text>
                    </View>
                    <View style={form.halfContainer}>
                      <TextInput
                        style={form.secondaryInput}
                        placeholder={score.type === 'Weighted' ? "lbs" : "mmss"}
                        underlineColorAndroid="transparent"
                        value={points}
                        onChangeText={(text) => this.handleScoreEdit(text, score.id)}
                      />
                    </View>
                  </View>
                )
              })
            }

            <View style={form.row}>
              <View style={form.halfContainer}>
                <Button
                  onPress={this.handleCancel}
                  title="Cancel"
                  color="red"
                />
              </View>
              <View style={form.halfContainer}>
                <Button
                  onPress={this.handleEditMode}
                  title="Save Changes"
                />
              </View>
            </View>

          </View>
        </Card>
      </View>
    )
  }
}

export default CompetitorEditForm