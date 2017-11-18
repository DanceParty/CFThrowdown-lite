import { database } from '../firebase/firebase'

export const removeWorkout = (workoutId) => {
  return database.ref(`workouts/${workoutId}`).remove().then(() => console.log('workout:', workoutId, 'removed'))
}

export const addWorkout = (workout) => {
  return database.ref('workouts').push(workout)
}

export const getWorkoutsByDivisionAndGender = (division, gender) => {
  return database.ref('workouts').orderByChild('division').equalTo(division).once('value').then((snapshot) => {
    if (snapshot.val()) {
      let workoutArray = []
      let index = -1
      const result = snapshot.val()

      if (gender === 'Male') {
        Object.keys(result).forEach((key) => {
          if (result[key].male === true) {
            const id = key
            const name = result[key].name
            const type = result[key].type
            workoutArray[index += 1] = { id, name, type }
          }
        })
      }
      if (gender === 'Female') {
        Object.keys(result).forEach((key) => {
          if (result[key].female === true) {
            const id = key
            const name = result[key].name
            const type = result[key].type
            workoutArray[index += 1] = { id, name, type }
          }
        })
      }
      return workoutArray
    }
  })
}

export const getWorkoutsByDivision = (division) => {
  return database.ref('workouts').orderByChild('division').equalTo(division).once('value').then((snapshot) => {
    if (snapshot.val()) {
      let workoutArr = []
      let index = -1
      const res = snapshot.val()
      // convert object of objects to array of objects
      Object.keys(res).forEach((key) => {
        const id = key
        const male = result[key].male
        const female = result[key].female
        const name = result[key].name
        const steps = result[key].steps
        const type = result[key].type
        const division = result[key].division
        const description = result[key].description
        workoutArr[index += 1] = { id, male, female, name, steps, type, division, description }
      })
      return workoutArr
    } else {
      return false
    }
  })
}

export const getWorkouts = () => {
  return database.ref(`workouts`).once('value').then((snapshot) => {
    if (snapshot.val()) {
      let workoutArray = []
      let index = -1
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
        const description = result[key].description
        workoutArray[index += 1] = { id, male, female, name, steps, type, division, description }
      })
      // return an array of workout objects
      return workoutArray
    }
  })
}