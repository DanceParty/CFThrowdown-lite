import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const typography = StyleSheet.create({
  title1: {
    fontSize: moderateScale(35),
    fontWeight: '300',
    lineHeight: verticalScale(44),
    letterSpacing: moderateScale(0.364)
  },
  title2: {
    fontSize: verticalScale(22),
    fontWeight: '400',
    lineHeight: verticalScale(28),
    letterSpacing: scale(0.352)
  },
  title3: {
    fontSize: verticalScale(20),
    fontWeight: '400',
    lineHeight: verticalScale(24),
    letterSpacing: scale(0.38)
  },
  headline: {
    fontSize: verticalScale(17),
    fontWeight: '600',
    lineHeight: verticalScale(22),
    letterSpacing: scale(-0.408)
  },
  body: {
    fontSize: verticalScale(17),
    fontWeight: '400',
    lineHeight: verticalScale(22),
    letterSpacing: scale(-0.408)
  },
  callout: {
    fontSize: verticalScale(16),
    fontWeight: '400',
    lineHeight: verticalScale(21),
    letterSpacing: scale(-0.32)
  },
  subhead: {
    fontSize: verticalScale(15),
    fontWeight: '400',
    lineHeight: verticalScale(20),
    letterSpacing: scale(-0.24)
  },
  footnote: {
    fontSize: verticalScale(13),
    fontWeight: '400',
    lineHeight: verticalScale(19),
    letterSpacing: scale(-0.078)
  },
  caption1: {
    fontSize: verticalScale(12),
    fontWeight: '400',
    lineHeight: verticalScale(16),
  },
  caption2: {
    fontSize: verticalScale(11),
    fontWeight: '400',
    lineHeight: verticalScale(16),
    letterSpacing: scale(0.066)
  },
  caption3: {
    fontSize: verticalScale(10),
    fontWeight: '400',
    lineHeight: verticalScale(15),
    letterSpacing: scale(0.05)
  },
})