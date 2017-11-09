import { database } from '../firebase/firebase'

export const addWorkout = (workout) => {
  return database.ref('workouts').push(workout)
}

export const getWorkoutsByDivision = (division) => {
  return database.ref('workouts').orderByChild('division').equalTo(division).once('value').then((snapshot) => {
    return snapshot.val()
  })
}