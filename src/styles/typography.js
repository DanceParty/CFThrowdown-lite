import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const typography = StyleSheet.create({
  title1: {
    fontSize: moderateScale(35),
    fontWeight: '300',
    lineHeight: verticalScale(40),
    letterSpacing: moderateScale(0.364)
  },
  title2: {
    fontSize: scale(22),
    fontWeight: '400',
    lineHeight: scale(28),
    letterSpacing: scale(0.352)
  },
  title3: {
    fontSize: scale(20),
    fontWeight: '400',
    lineHeight: scale(24),
    letterSpacing: scale(0.38)
  },
  headline: {
    fontSize: scale(17),
    fontWeight: '600',
    lineHeight: scale(22),
    letterSpacing: scale(-0.408)
  },
  body: {
    fontSize: scale(17),
    fontWeight: '400',
    lineHeight: scale(22),
    letterSpacing: scale(-0.408)
  },
  callout: {
    fontSize: scale(16),
    fontWeight: '400',
    lineHeight: scale(21),
    letterSpacing: scale(-0.32)
  },
  subhead: {
    fontSize: scale(15),
    fontWeight: '400',
    lineHeight: scale(20),
    letterSpacing: scale(-0.24)
  },
  footnote: {
    fontSize: scale(13),
    fontWeight: '400',
    lineHeight: scale(20),
    letterSpacing: scale(-0.078)
  },
  caption1: {
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(16),
  },
  caption2: {
    fontSize: scale(11),
    fontWeight: '400',
    lineHeight: scale(16),
    letterSpacing: scale(0.066)
  },
})