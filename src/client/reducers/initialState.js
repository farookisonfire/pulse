export default {
  pageProfiles : {
    accepted: {
      selectable: false,
      tableHeaders: ["Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Why OHS"],
      tableHeadersMap: ["name", "email", "phone", "dob", "gender", "university", "program", "why"],
    },
    secondary: [
      {
        program: 'health',
        selectable: true,
        tableHeaders: ["Name", "Email", "Phone", "D.O.B.", "Gender", "Method of Contact", "Timezone", "Major", "Volunteered with OHS?", "Top Strengths", "Ideal Vocation", "What would you change about volunteer experience?"],
        tableHeadersMap: ["name", "email", "phone", "dob", "gender", "methodOfContact", "timezone", "major", "volunteeredWithOhs", "topStrengths", "idealVocation", "changeExperience"],
      }
    ],
    applied: {
      selectable: true,
      tableHeaders: ["Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Why OHS"],
      tableHeadersMap: ["name", "email", "phone", "dob", "gender", "university", "program", "why"],
    },
  },
};
