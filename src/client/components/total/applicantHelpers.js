export const formatApplicants = (applicants) => {
  const formatted = [];
  if (applicants.length) {
    applicants.map(applicant => {
        const format = {};
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
      });
  }
  return formatted;
};