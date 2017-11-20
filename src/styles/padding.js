import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const padding = StyleSheet.create({
  smPadding: {
    padding: scale(10),
  },
  mdPadding: {
    padding: scale(25),
  },
  lgPadding: {
    padding: scale(40),
  },
  smPaddingLeft: {
    paddingLeft: scale(10),
  },
  mdPaddingLeft: {
    paddingLeft: scale(25),
  },
  lgPaddingLeft: {
    paddingLeft: scale(40),
  },
  smPaddingRight: {
    paddingRight: scale(10),
  },
  mdPaddingRight: {
    paddingRight: scale(25),
  },
  lgPaddingRight: {
    paddingRight: scale(40),
  },
  smPaddingTop: {
    paddingTop: scale(10),
  },
  mdPaddingTop: {
    paddingTop: scale(25),
  },
  lgPaddingTop: {
    paddingTop: scale(40),
  },
  smPaddingBottom: {
    paddingBottom: scale(10),
  },
  mdPaddingBottom: {
    paddingBottom: scale(25),
  },
  lgPaddingBottom: {
    paddingBottom: scale(40),
  },
})