import React from 'react'
import { Button, Modal, Text, TouchableHighlight, View } from 'react-native'

// styles
import { modal } from '../../styles/modal'
import { typography } from '../../styles/typography'


class Division extends React.Component {

  state = {
    modalVisible: false,
  }

  handleDivisionDelete = () => {
    this.props.handleDivisionDelete()
    this.setState({
      modalVisible: false,
    })
  }

  handleModalOpenClose = (visible) => {
    this.setState({
      modalVisible: visible,
    })
  }

  render() {
    const admin = this.props.admin
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
              <Text style={[modal.textCenter, typography.body]}>Deleting this division may have unintended consequences, are you sure you want to remove it?</Text>
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
                onPress={() => this.handleDivisionDelete()}
                color="red"
              />
            </View>
          </View>
        </Modal>
        {
          admin &&
          <Button
            title="Delete"
            onPress={() => this.handleModalOpenClose(true)}
          />
        }
      </View>
    )
  }
}

export default Division