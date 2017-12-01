import { PixelRatio, StyleSheet } from 'react-native'

import { scale, moderateScale } from '../utils/scaling'

export const typography = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  title1: {
    fontSize: PixelRatio.get() <= 2 ? 30 : 35,
    fontWeight: '300',
    lineHeight: scale(44),
    letterSpacing: moderateScale(0.364)
  },
  title2: {
    fontSize: PixelRatio.get() <= 2 ? 18 : 22,
    fontWeight: '400',
    lineHeight: scale(28),
    letterSpacing: scale(0.352)
  },
  title3: {
    fontSize: PixelRatio.get() <= 2 ? 16 : 20,
    fontWeight: '400',
    lineHeight: scale(24),
    letterSpacing: scale(0.38)
  },
  headline: {
    fontSize: PixelRatio.get() <= 2 ? 15 : 17,
    fontWeight: '600',
    lineHeight: scale(22),
    letterSpacing: scale(-0.408)
  },
  body: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: -0.408
  },
  callout: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: -0.32
  },
  subhead: {
    fontSize: PixelRatio.get() <= 2 ? 12 : 15,
    fontWeight: '400',
    lineHeight: scale(20),
    letterSpacing: scale(-0.24)
  },
  footnote: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19,
    letterSpacing: -0.078
  },
  caption1: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
  caption2: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.066
  },
  caption3: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.05
  },
})