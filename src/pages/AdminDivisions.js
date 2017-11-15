import React from 'react'
import { FlatList, Text, StyleSheet,  View } from 'react-native'

import { allDivisions } from '../actions/divisions'


class AdminDivisions extends React.Component {

  state = {
    divisions: undefined,
  }

  componentWillMount() {
    allDivisions().then((res) => {
      const divisionArr = Object.keys(res)
      this.setState({
        divisions: divisionArr,
      })
    })
  }

  render() {
    const divisions = this.state.divisions
    if (divisions) {
      return (
        <View>
        <FlatList
          style={styles.list}
          data={divisions}
          renderItem={({item}) =>
            <Text
              style={styles.text}
              onPress={() => this.props.navigation.navigate('AdminDivisionDetails', { division: item })}
            >{item}</Text>
          }
          keyExtractor={(item, index) => index}
        />
        </View>
      )
    } else {
      return null
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  list: {
    margin: 10
  },
  text: {
    flex: 1,
    margin: 25,
    textAlign: 'center'
  }
})

export default AdminDivisions