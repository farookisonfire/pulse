export default {
  pageProfiles : {
    accepted: {
      selectable: false,
      tableHeaders: ["Name", "Email", "Phone", "D.O.B.", "Gender", "University", "Program", "Why OHS"]
    },
    secondary: [
      {
        program: 'health',
        selectable: true,
        tableHeaders: ["Name", "Email", "Phone", "D.O.B.", "Method of Contact", "Timezone","Gender", "Major", "Volunteered with OHS?", "Top Strengths", "Ideal Vocation", "What would you change about volunteer experience?"],
      }
    ]
  },
};
