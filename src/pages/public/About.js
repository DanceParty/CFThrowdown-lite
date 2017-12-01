import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

// styles
import { typography } from '../../styles/typography'


class About extends React.Component {

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 0.12 }}>
            <Text style={[typography.title3, { textAlign: 'center', padding: 15 }]}>This tournament made possible by:</Text>
          </View>
          <Image
            style={styles.logo}
            source={require('../../../assets/sponser-parra.jpg')}
            resizeMode="contain"
          />
          <Image
            style={styles.logo}
            source={require('../../../assets/sponser-creativetwo.png')}
            resizeMode="contain"
          />
          <Image
            style={styles.logo}
            source={require('../../../assets/sponser-rxbar.jpg')}
            resizeMode="contain"
          />
          <Image
            style={styles.logo}
            source={require('../../../assets/sponser-mwod.jpg')}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    flex: 0.22,
    height: undefined,
    width: undefined,
    marginBottom: 15,
  }
})

export default About