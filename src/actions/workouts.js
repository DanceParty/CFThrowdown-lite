import { database } from '../firebase/firebase'

export const addWorkout = (workout) => {
  return database.ref('workouts').push(workout)
}