import { PixelRatio, StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const listItem = StyleSheet.create({
  listItem: {
    flex: 1,
    borderBottomColor: '#424244',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: PixelRatio.get() <= 2 ? 10 : 15,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  left: {
    flex: 0.8,
    flexDirection: 'row',
  },
  right: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})