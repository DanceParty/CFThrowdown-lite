export const getGenderString = (male, female) => {
  if (male && female) {
    return 'Male & Female'
  } else if (male && !female) {
    return 'Male'
  } else if (!male && female) {
    return 'Female'
  } else {
    return false
  }
}