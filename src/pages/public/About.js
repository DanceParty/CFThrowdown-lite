import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

// styles
import { typography } from '../../styles/typography'


class About extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={[typography.title2, { textAlign: 'center', padding: 15 }]}>This tournament made possible by:</Text>
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
          <Text style={[typography.body, { padding: 15, textAlign: 'center' }]}>
            This tournament is hosted by CrossFit Yuma, and the app was built by Keevan Dance. If you have questions about the tournament please contact:
          </Text>
          <Text style={[typography.subhead, { padding: 15, textAlign: 'center' }]}>
            Daniel Durham: (928) 446 6763
          </Text>
          <Text style={[typography.subhead, { padding: 15, textAlign: 'center' }]}>
            Michael Fraizer: (931) 332 1229
          </Text>
          <Text style={[typography.body, { padding: 15, textAlign: 'center' }]}>
            If you have any questions about the app please contact:
          </Text>
          <Text style={[typography.subhead, { padding: 15, textAlign: 'center' }]}>
            Keevan Dance: (928) 446 4651
          </Text>
        </View>
      </ScrollView>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    height: undefined,
    width: undefined,
    marginBottom: 15,
  }
})

export default About