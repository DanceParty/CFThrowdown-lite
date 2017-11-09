import { database } from '../firebase/firebase'

export const addWorkout = (workout) => {
  return database.ref('workouts').push(workout)
}

export const getWorkoutsByDivision = (division) => {
  return database.ref('workouts').orderByChild('division').equalTo(division).once('value').then((snapshot) => {
    return snapshot
  })
}

export const getWorkouts = () => {
  return database.ref(`workouts`).once('value').then((snapshot) => {
    if (snapshot.val()) {
      let workoutArray = []
      let index = 0
      const result = snapshot.val()
      // convert object of objects to array of objects
      Object.keys(result).forEach((key) => {
        const id = key
        const male = result[key].male
        const female = result[key].female
        const name = result[key].name
        const steps = result[key].steps
        const type = result[key].type
        const division = result[key].division

        workoutArray[index++] = { id, male, female, name, steps, type, division }
      })
      // return an array of workout objects
      return workoutArray
    }
  })
}