export default {
  pageProfiles : {
    accepted: {
      selectable: false,
      tableHeaders: ["Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Why OHS"],
      tableHeadersMap: ["name", "email", "phone", "dob", "gender", "university", "program", "why"],
    },
    secondary: {
      program: 'health',
      selectable: true,
      tableHeaders: ["Refcode", "Date", "Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Major", "Stream", "Method of Contact", "Timezone", "Best Time To Call?", "Volunteered With OHS?", "Questions or Suggestions", "Top Strengths" , "Ideal Vocation", "Hope To Gain", "Hope To Give"],
      tableHeadersMap: ["refcode", "submitDate" ,"name", "email", "phone", "dob", "gender", "university", "major","stream", "methodOfContact", "timezone", "bestTime", "pastVolunteer", "questionOrSuggestion", "topStrengths", "idealVocation", "hopeToGain", "hopeToGive"],
      radioButtons : {
        buttons: [
          {value: "healthInnovation", label: "Health Innovation"},
          {value: "serve", label: "Serve a Million"}
        ],
        defaultSelected: "healthInnovation",
      },
      acceptActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Accept', value: 'accepted', isPrimary: true, isSecondary: false },
      ],
      denyActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Deny', value: 'denied', isPrimary: false, isSecondary: true },
      ],
      stage: 'final',
    },
    applied: {
      selectable: true,
      tableHeaders: ["Refcode", "Date", "Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Major", "Program", "Stream",  "Why OHS"],
      tableHeadersMap: ["refcode","submitDate", "name", "email", "phone", "dob", "gender", "university", "major", "program", "stream", "why"],
      acceptActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Health', value: 'healthInnovation', isPrimary: true, isSecondary: false },
        { label: 'Serve a Million', value: 'serve', isPrimary: true, isSecondary: false },
      ],
      denyActions: [
        { label: 'Cancel', value: '', isPrimary: false, isSecondary: false },
        { label: 'Confirm', value: 'denied', isPrimary: false, isSecondary: true },
      ],
      stage: 'secondary',
    },
  },
};
