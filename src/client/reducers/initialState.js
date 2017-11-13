export default {
  pageProfiles : {
    accepted: {
      selectable: true,
      tableHeaders: ["Row", "Refcode", "Accepted Date", "Enrollment Fee Deadline","Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Major", "Program", "Stream",  "Why OHS"],
      tableHeadersMap: ["refcode", "acceptedDate", "enrollmentFeeDeadline", "name", "email", "phone", "dob", "gender", "university", "major", "program", "stream", "why"],
      denyActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Safe Remove', value: 'removed', isPrimary: false, isSecondary: false },
      ],
      stage: 'accepted'
    },
    secondary: {
      program: 'health',
      selectable: true,
      tableHeaders: ["Row", "Refcode", "Secondary Date", "Secondary Deadline","Secondary Submit Date", "Info Sent", "Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Major", "Program", "Stream", "Method of Contact", "Timezone", "Best Time To Call?", "Volunteered With OHS?", "Questions or Suggestions", "Top Strengths" , "Ideal Profession", "Hope To Gain", "Hope To Give"],
      tableHeadersMap: ["refcode", "secondaryDate", "secondaryDeadline", "secondarySubmitDate", "infoSentDate", "name", "email", "phone", "dob", "gender", "university", "major","secondaryProgram", "stream", "methodOfContact", "timezone", "bestTime", "pastVolunteer", "questionOrSuggestion", "topStrengths", "idealProfession", "hopeToGain", "hopeToGive"],
      radioButtons : {
        buttons: [
          {value: "healthInnovation", label: "Health Innovation"},
          {value: "serve", label: "Serve a Million"},
          {value: "youthEmpowerment", label: "Youth Empowerment"},
          {value: "education", label: "Education / Social Work"},
          {value: "hbcu", label: "HBCU"},
        ],
        defaultSelected: "healthInnovation",
      },
      acceptActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Health Innovation', value: 'accepted', program: 'healthInnovation', isPrimary: true, isSecondary: false },
        { label: 'Youth Empowerment', value: 'accepted', program: 'youthEmpowerment', isPrimary: true, isSecondary: false },
        { label: 'Education / Social Work', value: 'accepted', program: 'education', isPrimary: true, isSecondary: false },
      ],
      denyActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Safe Remove', value: 'removed', isPrimary: false, isSecondary: false },
        { label: 'Deny', value: 'denied', isPrimary: false, isSecondary: true },
      ],
      infoActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Send Health Info', value: 'info-health', program: 'healthInnovation', isPrimary: true, isSecondary: false },
      ],
      stage: 'final',
    },
    applied: {
      selectable: true,
      tableHeaders: ["Row", "Refcode", "Primary Submit Date", "Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Major", "HBCU", "Program", "Stream",  "Why OHS"],
      tableHeadersMap: ["refcode","primarySubmitDate", "name", "email", "phone", "dob", "gender", "university", "major", "hbcu", "program", "stream", "why"],
      acceptActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Health', value: 'healthInnovation', isPrimary: true, isSecondary: false },
        { label: 'Youth Empowerment', value: 'youthEmpowerment', isPrimary: true, isSecondary: false },
        { label: 'Education / Social Work', value: 'education', isPrimary: true, isSecondary: false },
      ],
      denyActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Safe Remove', value: 'removed', isPrimary: false, isSecondary: false },
        { label: 'Confirm', value: 'denied', isPrimary: false, isSecondary: true },
      ],
      stage: 'secondary',
    },
    confirmed: {
      selectable: false,
      tableHeaders: ["Row", "Refcode", "Enroll Date", "Promotion Deadline", "Final Deadline","Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Program Date", "Payment Status", "Qualify for Promotion"],
      tableHeadersMap: ["refcode","enrollDate", "promotionDeadline", "finalDeadline", "name", "email", "phone", "dob", "gender", "university", "selectedProgramType", "selectedProgramDate", "paymentStatus", "qualifyPromotion"],
      deferWithdrawActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Withdraw', value: 'withdraw', isPrimary: true, isSecondary: false },
        { label: 'Defer', value: 'defer', isPrimary: true, isSecondary: false },
      ],
      stage: 'confirmed'
    },
    fellowshipPage: {
      selectable: false,
      tableHeaders: ["Row", "Refcode", "Name", "Program", "Program Date", "Promotion Deadline", "Final Deadline", "Payment Status", "Qualify for Promotion"],
      tableHeadersMap: ["refcode", "name", "selectedProgramType", "selectedProgramDate", "promotionDeadline", "finalDeadline", "paymentStatus", "qualifyPromotion"],
    },
  },
};
