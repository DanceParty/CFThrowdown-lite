import React from 'react'
import { Button, FlatList, Text, View } from 'react-native'

// components
import DivisionListItem from '../DivisionListItem'

// styles
import { container } from '../../styles/container'


class DivisionList extends React.Component {
  render() {
    const divisions = this.props.divisions.sort((a, b) => {
      return a.length - b.length
    })
    const navigation = this.props.navigation
    const admin = this.props.admin
    return (
      <View style={container.containerWhite}>
        <FlatList
          data={divisions}
          keyExtractor={(item, index) => index}
          renderItem={({item}) =>
            <DivisionListItem
              navigation={navigation}
              item={item}
            />
          }
        />
        {
          admin &&
          <Button
            title="Add Division"
            onPress={() => this.props.navigation.navigate('AddDivision')}
          />
        }
      </View>
    )
  }
}

export default DivisionList