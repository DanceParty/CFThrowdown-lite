import { StyleSheet } from 'react-native'

import { scale, verticalScale, moderateScale } from '../utils/scaling'

export const tabs = StyleSheet.create({
  tabsGroup: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabsGroupSecondary: {
    flex: 0.6,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  currTab: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4492D0',
    height: 23,
    width: 110,
    borderRadius: 50,
  },
  genderTab: {
    width: '33%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divTab: {
    width: '33%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentDivTab: {
    width: '33%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#4492D0',
    overflow: 'hidden',
  },
  currentGenderTab: {
    width: '33%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#4492D0',
    overflow: 'hidden',
  },
  tabText: {
    color: 'black',
  },
  currTabText: {
    color: 'white',
  },
})