import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const listItem = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(60),
    alignItems: 'center',
    borderBottomColor: '#424244',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: scale(10),
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: scale(10),
  },
  item: {
    //alignSelf: 'stretch',
  },
})