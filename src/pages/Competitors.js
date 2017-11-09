import React from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'

// firebase
import { getCompetitors } from '../actions/competitors'

class Competitors extends React.Component {

  state = {
    competitors: undefined
  }

  componentWillMount() {
    let competitorsArray = []
    let index = 0
    // get all of the competitors and store them in an array in the state
    getCompetitors().then((result) => {
      const values = result.val()
      Object.keys(values).forEach((key) => {

        const id = key
        const fullName = `${values[key].firstName} ${values[key].lastName}`
        const gender = (values[key].male === false) ? 'Female' : 'Male'
        const division = values[key].division

        competitorsArray[index++] = { id, fullName, gender, division }

      })
      this.setState(() => ({
        competitors: competitorsArray
      }))
    })
  }

  render() {
    if (this.state.competitors) {
      return (
        <View style={styles.container}>
          <Text>
            Filters:
            <Text>

            </Text>

          </Text>
          <FlatList
            style={styles.list}
            data={this.state.competitors}
            renderItem={({item}) =>
              <Text style={styles.text}>{item.fullName} - {item.gender} - {item.division}</Text>
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

export default Competitors