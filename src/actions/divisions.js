import { database } from '../firebase/firebase'

export const removeDivision = (divisionId) => {
  return database.ref(`divisions/${divisionId}`).remove().then(() => console.log(divisionId, 'removed'))
}

export const addDivision = (division) => {
  return database.ref(`divisions/${division.name}`).set(division)
}

export const allDivisions = () => {
  return database.ref('divisions').once('value').then((snapshot) => {
    return snapshot.val()
  })
}

export const getDivisionWorkouts = (divisionName) => {
  return database.ref(`divisions/${divisionName}/workouts`).once('value').then((snapshot) => {
    return snapshot.val()
  })
}

export const updateDivisionWorkouts = (workoutArray, divisionName) => {
  return database.ref(`divisions/${divisionName}/workouts`).set(workoutArray)
}
