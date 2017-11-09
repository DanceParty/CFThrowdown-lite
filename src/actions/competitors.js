import { database } from '../firebase/firebase'

export const addCompetitor = (competitor) => {
  return database.ref(`competitors`).push(competitor)
}

export const getCompetitors = () => {
  return database.ref(`competitors`).once('value').then((snapshot) => {
    return snapshot
  })
}