import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const modal = StyleSheet.create({
  modal: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: verticalScale(20)
  },
  button: {
    width: moderateScale(150),
  }
})