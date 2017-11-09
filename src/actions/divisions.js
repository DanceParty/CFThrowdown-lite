import { database } from '../firebase/firebase'

export const addDivision = (division) => {
  return database.ref(`divisions/${division.name}`).set(division)
}