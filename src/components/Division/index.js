import React from 'react'
import { Button, Modal, Text, View } from 'react-native'


class Division extends React.Component {

  state = {
    modalVisible: false,
  }

  handleDivisionDelete = () => {
    this.props.handleDivisionDelete()
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

        <Text>Insert Division Information Here...</Text>
        {
          admin &&
          <Button
            title="Delete"
            onPress={() => this.handleDivisionDelete()}
          />
        }
      </View>
    )
  }
}

export default Division