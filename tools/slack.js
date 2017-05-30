export function createSlackText(formResponse) {
  const slackString = `*________ New Applicant Details: ________*\nFirst Name: ${formResponse["First Name"]}\nLast Name: ${formResponse["Last Name"]}\nUniversity: ${formResponse["University you attend(ed)"]}`;
  return JSON.stringify({text: slackString});
}