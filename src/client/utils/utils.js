export const formatApplicants = (applicants, filter) => {
  const formatted = [];
  if (applicants.length) {
    applicants.map(applicant => {
      if (applicant.status === filter) {
        const format = {};
        format.refcode = applicant.refcode;
        format.primarySubmitDate = applicant.primarySubmitDate;
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
        format.why = applicant["Why do you want to join OHS?"] ?
          applicant["Why do you want to join OHS?"] :
          applicant["Why do you want to volunteer with OHS?"];
        format.program = applicant["Which program are you most interested in?"];
        format.stream = applicant["Select your preferred program focus"];
        format.major = applicant["What is your major or field of study/work?"];
        format.hbcu = applicant["Do you attend a historically black college or university (HBCU)?"];
        formatted.push(format);
      }
    });
  }
  return formatted;
};

export const formatAcceptedApplicants = (applicants, filter) => {
  const formatted = [];
  if (applicants.length) {
    applicants.map(applicant => {
      if (applicant.status === filter) {
        const format = {};
        format.refcode = applicant.refcode;
        format.acceptedDate = applicant.acceptedDate;
        format.enrollmentFeeDeadline = applicant.enrollmentFeeDeadline;
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
        format.why = applicant["Why do you want to join OHS?"] ?
          applicant["Why do you want to join OHS?"] :
          applicant["Why do you want to volunteer with OHS?"];
        format.program = applicant.acceptedTo;
        format.stream = applicant["Select your preferred program focus"];
        format.major = applicant["What is your major or field of study/work?"];
        formatted.push(format);
      }
    });
  }
  return formatted;
};

export const formatConfirmedApplicants = (applicants, filter, secondaryFilter = '') => {
  const formatted = [];
  if (applicants.length) {
    applicants.map(applicant => {
      if (applicant.status === filter || applicant.status === secondaryFilter) {
        const format = {};
        format.refcode = applicant.refcode;
        format.status = applicant.status;
        format.id = applicant._id;
        format.name = applicant["First Name"] + ' ' + applicant["Last Name"];
        format.email = applicant["Email"] || applicant['Please confirm your e-mail address:'];
        format.phone = applicant["Mobile Phone Number"] || applicant['Phone:'];
        format.dob = applicant["Date of Birth"];
        format.gender = applicant["Gender"];
        applicant["University you attend(ed)"] === '- Other University -'
          ? format.university = applicant["Name of University"]
          : format.university = applicant["University you attend(ed)"];
        format.selectedProgramId = applicant.selectedProgramId;
        format.promotionDeadline = applicant.promotionDeadline;
        format.finalDeadline = applicant.finalDeadline;
        format.paymentStatus = applicant.paymentStatus;
        format.qualifyPromotion = applicant.qualifyPromotion;
        format.enrollDate = applicant.enrollDate;
        format.sentDeferWithdrawEmail = applicant.sentDeferWithdrawEmail;
        formatted.push(format);
      }
    });
  }
  return formatted;
};

export const formatConfirmedFellows = (applicants, filter) => {
  const formatted = [];
  if (applicants.length) {
    applicants.map(applicant => {
      if (applicant.status === filter) {
        const format = {};
        format.status = applicant.status;
        format.id = applicant._id;
        format.name = `${applicant.firstName} ${applicant.lastName}`;
        format.selectedProgramId = applicant.selectedProgramId;
        format.promotionDeadline = applicant.promotionDeadline;
        format.finalDeadline = applicant.finalDeadline;
        format.paymentStatus = applicant.paymentStatus;
        format.qualifyPromotion = applicant.qualifyPromotion;
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
        format.refcode = applicant.refcode;
        format.secondaryDate = applicant.secondaryDate;
        format.secondaryDeadline = applicant.secondaryDeadline;
        format.secondarySubmitDate = applicant.secondarySubmitDate;
        format.status = applicant.status;
        format.secondaryProgram = applicant.secondary;
        format.id = applicant._id;
        format.name = applicant["First Name"] + ' ' + applicant["Last Name"];
        format.email = applicant["Email"];
        format.phone = applicant["Mobile Phone Number"];
        format.dob = applicant["Date of Birth"];
        format.gender = applicant["Gender"];
        format.stream = applicant["Select your preferred program focus"];
        applicant["University you attend(ed)"] === '- Other University -'
          ? format.university = applicant["Name of University"]
          : format.university = applicant["University you attend(ed)"];
        format.major = applicant["What is your major or field of study/work?"];
        format.methodOfContact = applicant["Preferred method of contact?"];
        format.timezone = applicant["Your time zone?"];
        format.bestTime = applicant["What\'s the best time for a member of our team to call?"];
        format.pastVolunteer = applicant["Have you participated in an experiential program abroad with OHS before?"];
        format.questionOrSuggestion = applicant["What questions do you have about the program or the organization?"];
        format.topStrengths = applicant["What would you identify as your top strengths?"];
        format.idealProfession = applicant['What is your ideal profession? Why?'] ?
          applicant['What is your ideal profession? Why?'] :
          applicant["What is your ideal vocation? Why?"];
        format.hopeToGain = applicant["In three words, what do you hope to gain from this experience?"];
        format.hopeToGive = applicant["In three words, what do you hope to give during this experience?"];
        format.hbcu = applicant["Do you attend a historically black college or university (HBCU)?"];
        format.infoSentDate = applicant.infoSentDate;
        format.secondaryReminderSentDate = applicant.secondaryReminderSentDate;
        formatted.push(format);
      }
    });
  }
  return formatted;
};

export const filterApplicantsBySearchText = (applicants, searchText, field) => {
  return applicants.filter((applicant) => {
    if (Array.isArray(applicant[field])) {
      return applicant[field].join().includes(searchText);
    }
    return applicant[field] && applicant[field].includes(searchText);
  });
};

export const resolveProgramTypeAndDate = (applicants, programs) => {
  return applicants.map((applicant) => {
    const selectedProgram = programs.filter((program) => {
      return program.id === applicant.selectedProgramId;
    });

    if (selectedProgram && selectedProgram.length) {
      const selected = selectedProgram[0];
      const {
        type = '',
        date = '',
      } = selected;

      applicant.selectedProgramType = type;
      applicant.selectedProgramDate = date;
    }

    return applicant;
  });
};

export const resolveApplicantsToUse = (applicants, activeTab, programs) => {
  switch(activeTab) {
    case 'Secondary':
      return formatSecondaryApplicants(applicants, 'secondary');
    case 'Accepted':
      return formatAcceptedApplicants(applicants, 'accepted');
    case 'Confirmed':
      return resolveProgramTypeAndDate(formatConfirmedApplicants(applicants, 'confirmed', 'defer-enroll'), programs);
    default:
      return formatApplicants(applicants, 'applied');
  }
};

export const resolvePath = (status) => {
  if (status === 'info-health') {
    return '/info/health';
  } else if (status === 'defer' || status === 'withdraw') {
    return '/confirmed';
  } else if (status === 'reminder-secondary') {
    return '/reminder/secondary';
  } else {
    return '/api/applicants';
  }
};

export const resolveTotalEnrollmentByProgram = (applicants = []) => {
  const programEnrollment = {};
  const confirmedApplicants = applicants
    .filter(applicant => applicant.status === 'defer-enroll' || 'confirmed');
  confirmedApplicants.forEach((applicant) => {
    const { selectedProgramId } = applicant;
    if (!selectedProgramId) return;
    if (programEnrollment[selectedProgramId]) {
      programEnrollment[selectedProgramId] += 1;
    } else {
      programEnrollment[selectedProgramId] = 1;
    }
  });
  return programEnrollment;
};

export const resolveTotalEnrollmentByCohort = (programEnrollment = {}, allPrograms) => {
  const cohortEnrollment = {};
  const programs = Object.keys(programEnrollment);
  programs.forEach((program) => {
    allPrograms.forEach((p) => {
      if (program === p.id) {
        const { cohort } = p;
        cohort.map((cohort) => {
          if (cohortEnrollment[cohort]) {
            cohortEnrollment[cohort] += programEnrollment[program];
          } else {
            cohortEnrollment[cohort] = programEnrollment[program];
          }
        });
      }
    });
  });
  return cohortEnrollment;
};

// export const resolveAllProgramEnrollment = (applicants = []) => {
//   const enrollmentMap = {};
//   applicants.forEach((applicant) => {
//     const { selectedProgramId } = applicant;
//     if (!selectedProgramId) return;
//     if (enrollmentMap[selectedProgramId]) {
//       const applicantStatus = resolveApplicantStatus(applicant);
//       enrollmentMap[selectedProgramId][applicantStatus] += 1;
//     } else {
//       enrollmentMap[selectedProgramId] = {
//         enrolled: 0,
//         confirmed: 0,
//         waitlist: 0,
//       };
//     }
//   });
//   return enrollmentMap;
// };

// const resolveApplicantStatus = (applicant = {}) => {
//   if (applicant.status === 'waitlist' ) {
//     return 'waitlist';
//   } else {
//     if (applicant.paymentStatus && applicant.paymentStatus === 'paid in full') {
//       return 'confirmed';
//     } else {
//       return 'enrolled';
//     }
//   }
// };

export const resolveProgramTypeEnrollment = (programs, type) => {
  const programTypeEnrollment = { enrolled: 0, confirmed: 0, waitlist: 0 };
  const filteredProgramsByType = programs.forEach(program => {
    if (program.typeId === type) {
      programTypeEnrollment.enrolled += program.enrolled;
      programTypeEnrollment.confirmed += program.confirmed;
      programTypeEnrollment.waitlist += program.waitlist.length;
    }
  });
  return programTypeEnrollment;
};

export const applyProgramFilters = (graphFilters, enrollmentByProgram) => {
  const {
    healthInnovation,
    youthEmpowerment,
    education
  } = graphFilters;

  const programs = Object.keys(enrollmentByProgram);
  
  if (healthInnovation && youthEmpowerment && !education) {
    programs.forEach((program) => {
      if (program.includes('education')) delete enrollmentByProgram[program];
    });
  }
  if (healthInnovation && !youthEmpowerment && education) {
    programs.forEach((program) => {
      if (program.includes('youth')) delete enrollmentByProgram[program];
    });
  }
  if (!healthInnovation && youthEmpowerment && education) {
    programs.forEach((program) => {
      if (program.includes('health')) delete enrollmentByProgram[program];
    });
  }
  if (healthInnovation && !youthEmpowerment && !education) {
    programs.forEach((program) => {
      if (program.includes('youth') || program.includes('education')) delete enrollmentByProgram[program];
    });
  }
  if (!healthInnovation && youthEmpowerment && !education) {
    programs.forEach((program) => {
      if (program.includes('health') || program.includes('education')) delete enrollmentByProgram[program];
    });
  }
  if (!healthInnovation && !youthEmpowerment && education) {
    programs.forEach((program) => {
      if (program.includes('health') || program.includes('youth')) delete enrollmentByProgram[program];
    });
  }
  return enrollmentByProgram;
};

export const alphabetizeList = (list) => {
  list.sort((a,b) => {
    const itemA = a.toLowerCase();
    const itemB = b.toLowerCase();
    if (itemA < itemB) return -1;
    if (itemA > itemB) return 1;
    return 0;
  });
  return list;
};
