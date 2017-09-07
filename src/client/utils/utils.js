export const formatApplicants = (applicants, filter) => {
  const formatted = [];
  if (applicants.length) {
    applicants.map(applicant => {
      if (applicant.status === filter) {
        const format = {};
        format.status = applicant.status;
        format.id = applicant._id;
        format.name = applicant["First Name"] + ' ' + applicant["Last Name"];
        format.email = applicant["Email"];
        format.phone = applicant["Mobile Phone Number"];
        format.dob = applicant["Date of Birth"];
        format.gender = applicant["Gender"];
        applicant["University you attend(ed)"] === '- Other University -' 
          ? format.university = applicant["Name of University"]
          : format.university = applicant["University you attend(ed)"];
        format.why = applicant["Why do you want to volunteer with OHS?"];
        format.program = applicant["Which program are you most interested in?"];
        formatted.push(format);
      }
    });
  }
  return formatted;
};

export const formatSecondaryApplicants = (applicants, filter) => {
  const formatted = [];
  if (applicants.length) {
    applicants.map(applicant => {
      if (applicant.status === filter) {
        const format = {};
        format.status = applicant.status;
        format.secondaryProgram = applicant.secondaryProgram;
        format.id = applicant._id;
        format.name = applicant["First Name"] + ' ' + applicant["Last Name"];
        format.email = applicant["Email"];
        format.phone = applicant["Mobile Phone Number"];
        format.dob = applicant["Date of Birth"];
        format.gender = applicant["Gender"];
        format.methodOfContact = applicant["Preferred method of contact?"];
        format.timezone = applicant["Your time zone?"];
        format.bestTime = applicant["What\'s the best time for a member of our team to call?"];
        format.pastVolunteer = applicant["Have you participated in an experiential program abroad with OHS before?"];
        format.questionOrSuggestion = applicant["What questions do you have about the program or the organization?"];
        format.topStrengths = applicant["What would you identify as your top strengths?"];
        format.idealVocation = applicant["What is your ideal vocation? Why?"];
        format.hopeToGain = applicant["In three words, what do you hope to gain from this experience?"];
        format.hopeToGive = applicant["In three words, what do you hope to give during this experience?"];
        formatted.push(format);
      }
    });
  }
  return formatted;
};
