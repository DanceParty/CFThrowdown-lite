import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const form = StyleSheet.create({
  checkbox: {
    backgroundColor: 'transparent'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  halfContainer: {
    width: '50%',
    padding: scale(10)
  },
  container: {
    width: '100%',
    padding: scale(10),
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
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(10),
    width: '100%',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    height: verticalScale(40),
    width: moderateScale(250),
    padding: scale(10),
  },
  secondaryInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '90%',
    height: verticalScale(20),
    textAlign: 'right',
    paddingRight: scale(5),
  },
  showView: {
    flex: 1,
    justifyContent: 'center',
  }
})