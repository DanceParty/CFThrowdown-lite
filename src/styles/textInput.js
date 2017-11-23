import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const textInput = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  container: {
    width: '50%',
    padding: scale(10)
  },
  containerFull: {
    width: '90%',
    padding: scale(10)
  },
  textInput: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    padding: scale(5),
  },
  focusedTextInput: {
    width: '100%',
    borderBottomWidth: 1.5,
    borderBottomColor: '#4492D0',
    padding: scale(5),
  }
})