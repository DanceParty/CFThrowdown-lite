export const sortByPoints = (type, workout, competitors) => {
  // if type is timed, sort from lowest to highest
  // if not, sort from highest to lowest

  const sorted = competitors.sort((a, b) => {
    if (type === 'Timed') {

      let scoreA = 0
      a.scores.map((score) => {
        if (score.workoutId === workout.id) {
          scoreA = score.points
        }
      })

      let scoreB = 0
      b.scores.map((score) => {
        if (score.workoutId === workout.id) {
          scoreB = score.points
        }
      })
      return (scoreA < scoreB) ? -1 : 1

    } else {
      let scoreA = 0
      a.scores.map((score) => {
        if (score.workoutId === workout.id) {
          scoreA = score.points
        }
      })

      let scoreB = 0
      b.scores.map((score) => {
        if (score.workoutId === workout.id) {
          scoreB = score.points
        }
      })
      return (scoreA > scoreB) ? -1 : 1
    }
  })

  return sorted
}