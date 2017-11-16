import React from 'react'
import { Button, FlatList, Text, StyleSheet,  View } from 'react-native'

// components
import DivisionListItem from '../DivisionListItem'

class DivisionList extends React.Component {
  render() {
    const divisions = this.props.divisions
    const navigation = this.props.navigation
    const admin = this.props.admin
    return (
      <View>
        <FlatList
            style={styles.list}
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

const styles = StyleSheet.create({
  list: {
    margin: 10,
  },
})

export default DivisionList