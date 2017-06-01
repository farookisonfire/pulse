/* eslint-disable no-console */
import fetch from 'node-fetch';

function createSlackText(formResponse) {
  const slackString = `*________ New Applicant Details: ________*\nFirst Name: ${formResponse["First Name"]}\nLast Name: ${formResponse["Last Name"]}\nUniversity: ${formResponse["University you attend(ed)"]}`;
  return JSON.stringify({text: slackString});
}

export function updateSlack(formResponse) {
    return new Promise((resolve, reject) => {
      fetch('https://hooks.slack.com/services/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', { 
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: createSlackText(formResponse)
        })
        .then(response => {
          if (!response.ok) { throw new Error(response.statusText); }
          console.log('ok');
          resolve();
        })
        .catch(err => {
          console.log(err);
          reject();
        });
    });
  }