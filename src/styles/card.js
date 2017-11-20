import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const card = StyleSheet.create({
  header: {
    height: verticalScale(100),
    backgroundColor: '#4492D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white'
  },
  subtitle: {
    color: 'lightgray'
  },
  caption: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: verticalScale(30),
  },
  padding: {
    padding: scale(20),
  },
  seperator: {
    paddingTop: scale(15),
  },
})