import React from 'react'
import { Button, Text, View } from 'react-native'


class Division extends React.Component {

  handleDivisionDelete = () => {
    this.props.handleDivisionDelete()
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