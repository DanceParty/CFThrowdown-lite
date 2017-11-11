import { database } from '../firebase/firebase'

export const addCompetitor = (competitor) => {
  return database.ref(`competitors`).push(competitor)
}

export const getCompetitors = () => {
  return database.ref(`competitors`).once('value').then((snapshot) => {
    if (snapshot.val()) {
      let competitorArray = []
      let index = 0
      const result = snapshot.val()
      // convert object of objects to array of objects
      Object.keys(result).forEach((key) => {
        const id = key
        const fullName = `${result[key].firstName} ${result[key].lastName}`
        const gender = (result[key].male) ? 'Male' : 'Female'
        const division = result[key].division
        const scores = result[key].scores
        let totalScore = 0
        Object.keys(scores).forEach((key) => {
          totalScore += scores[key]
        })
        competitorArray[index++] = { id, fullName, gender, division, scores, totalScore }
      })
      // return an array of competitor objects
      return competitorArray
    }
  })
}

export const updateCompetitor = (competitorId, scores) => {
  return database.ref(`competitors/${competitorId}/scores`).set(scores)
}