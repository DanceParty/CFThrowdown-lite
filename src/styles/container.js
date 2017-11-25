import { StyleSheet } from 'react-native'

export const container = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWhite: {
    flex: 1,
    backgroundColor: 'white',
  },
  filterContainer: {
    flex: 0.3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listContainer: {
    flex: 0.7,
    flexDirection: 'column'
  }
})