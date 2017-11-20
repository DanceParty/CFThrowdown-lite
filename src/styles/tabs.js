import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const tabs = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tabsGroup: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  currTab: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4492D0',
    height: verticalScale(25),
    width: moderateScale(150),
    borderRadius: 50,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(25),
    width: moderateScale(150),
    paddingLeft: scale(10),
    paddingRight: scale(10),
    paddingTop: scale(5),
  },
  tabText: {
    color: 'black'
  },
  currTabText: {
    color: 'white',
  },
})