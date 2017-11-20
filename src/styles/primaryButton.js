import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const primaryButton = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#4492D0',
    height: verticalScale(50),
    width: moderateScale(300),
  },
  smButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#4492D0',
    height: verticalScale(25),
    width: moderateScale(150),
  },
  buttonActive: {
    color: 'white'
  },
  buttonInactive: {
    color: '#4492D0',
  },
})