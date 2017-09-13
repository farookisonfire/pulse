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
      tableHeaders: ["Date", "Name", "Email", "Phone", "D.O.B.", "Gender","Stream", "Method of Contact", "Timezone", "Best Time To Call?", "Volunteered With OHS?", "Questions or Suggestions", "Top Strengths" , "Ideal Vocation", "Hope To Gain", "Hope To Give"],
      tableHeadersMap: ["submitDate" ,"name", "email", "phone", "dob", "gender", "stream", "methodOfContact", "timezone", "bestTime", "pastVolunteer", "questionOrSuggestion", "topStrengths", "idealVocation", "hopeToGain", "hopeToGive"],
      radioButtons : {
        buttons: [
          {value: "healthInnovation", label: "Health Innovation"},
          {value: "serve", label: "Serve a Million"}
        ],
        defaultSelected: "healthInnovation",
      }
    },
    applied: {
      selectable: true,
      tableHeaders: ["Date", "Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Stream",  "Why OHS"],
      tableHeadersMap: ["submitDate", "name", "email", "phone", "dob", "gender", "university", "program", "stream", "why"],
    },
  },
};
