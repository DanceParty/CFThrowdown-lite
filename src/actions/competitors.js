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
        const firstName = result[key].firstName
        const lastName = result[key].lastName
        const gender = (result[key].male) ? 'Male' : 'Female'
        const division = result[key].division
        const scores = result[key].scores
        const totalScore = result[key].totalScore
        competitorArray[index++] = { id, fullName, firstName, lastName, gender, division, scores, totalScore }
      })
      // return an array of competitor objects
      return competitorArray
    }
  })
}

export const getCompetitorByGenderAndDivision = (division, gender) => {
  return database.ref(`competitors`).orderByChild('division').equalTo(division).once('value').then((snapshot) => {
    if (snapshot.val()) {
      let competitorArray = []
      let index = 0
      const result = snapshot.val()

      if (gender === 'MaleFemale') {
        Object.keys(result).forEach((key) => {
          const id = key
          const fullName = `${result[key].firstName} ${result[key].lastName}`
          const gender = (result[key].male) ? 'Male' : 'Female'
          const division = result[key].division
          const scores = result[key].scores
          const totalScore = result[key].totalScore
          competitorArray[index++] = { id, fullName, gender, division, scores, totalScore }
        })
      } else if (gender === 'Male') {
        Object.keys(result).forEach((key) => {
          if (result[key].male === true) {
            const id = key
            const fullName = `${result[key].firstName} ${result[key].lastName}`
            const gender = (result[key].male) ? 'Male' : 'Female'
            const division = result[key].division
            const scores = result[key].scores
            const totalScore = result[key].totalScore
            competitorArray[index++] = { id, fullName, gender, division, scores, totalScore }
          }
        })
      } else if (gender === 'Female') {
        Object.keys(result).forEach((key) => {
          if (result[key].female === true) {
            const id = key
            const fullName = `${result[key].firstName} ${result[key].lastName}`
            const gender = (result[key].male) ? 'Male' : 'Female'
            const division = result[key].division
            const scores = result[key].scores
            const totalScore = result[key].totalScore
            competitorArray[index++] = { id, fullName, gender, division, scores, totalScore }
          }
        })
      }
      return competitorArray
    }
  })
}

export const updateCompetitor = (competitorId, competitor) => {
  return database.ref(`competitors/${competitorId}`).set(competitor)
}

export const updateCompetitorScores = (competitorId, scores) => {
  return database.ref(`competitors/${competitorId}/scores`).set(scores)
}

export const updateCompetitorTotalScore = (competitorId, totalScore) => {
  return database.ref(`competitors/${competitorId}/totalScore`).set(totalScore)
}