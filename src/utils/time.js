export const msToMinutesSeconds = (ms) => {
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(0)
  return { minutes, seconds }
}

export const minutesAndSecondsToMs = (minutes, seconds) => {
  const msMinutes = minutes * 60000
  const msSeconds = seconds * 1000
  return msSeconds + msMinutes
}