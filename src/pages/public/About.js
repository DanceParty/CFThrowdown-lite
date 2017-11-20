import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

// styles
import { typography } from '../../styles/typography'


class About extends React.Component {

  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Text style={[typography.title2, { textAlign: 'center', padding: 15 }]}>About:</Text>
          <Text style={[typography.body, { padding: 15, textAlign: 'center' }]}>This tournament has been hosted and built by Crossfit Yuma.</Text>
          <Text style={[typography.body, { padding: 15, textAlign: 'center' }]}>Mobile application built by Keevan Dance.</Text>
          <Text style={[typography.title2, { textAlign: 'center', padding: 15 }]}>Sponsers:</Text>
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
    flex: 1,
    height: undefined,
    width: undefined,
    marginBottom: 15,
  }
})

export default About