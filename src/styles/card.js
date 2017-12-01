import { PixelRatio, StyleSheet } from 'react-native'

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
  },
  contentAlt: {
    flex: 1,
    padding: PixelRatio.get() <= 2 ? 10 : 15,
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentLeft: {
    flex: 0.33,
  },
  contentCenter: {
    flex: 0.33,
  },
  contentRight: {
    flex: 0.33,
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: scale(30),
    paddingBottom: scale(20),
    paddingLeft: scale(10),
    paddingRight: scale(10),
  },
  unalignedContent: {
    paddingTop: scale(30),
    paddingBottom: scale(20),
    paddingLeft: scale(10),
    paddingRight: scale(10),
  },
  padding: {
    padding: scale(20),
  },
  seperator: {
    paddingTop: scale(15),
  },
})