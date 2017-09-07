//Typeform Field Types
const SHORT_TEXT = "short_text";
const LONG_TEXT = "long_text";
const EMAIL = "email";
const WEBSITE = "website";
const MULTIPLE_CHOICE = "multiple_choice";
const PICTURE_CHOICE = "picture_choice";
const DROPDOWN = "dropdown";
const DATE = "date";
const FILE_UPLOAD = "file_upload";
const NUMBER = "number";
const RATING = "rating";
const OPINION_SCALE = "opinion_scale";
const YES_NO = "yes_no";
const LEGAL = "legal";

export function mapAnswersToQuestions(questions, answers, status, program) {
  const map = {};
  map.status = status;
  if (program) {
    map.secondaryProgram = program;
  }
  questions.map(question => {
    answers.map(answer => {
      if(question.id === answer.field.id) {
        switch (question.type) {
          case SHORT_TEXT:
          case LONG_TEXT:
            return map[question.title] = answer.text;
          case EMAIL:
            return map[question.title] = answer.email;
          case WEBSITE:
            return map[question.title] = answer.url;
          case MULTIPLE_CHOICE:
          case PICTURE_CHOICE:
          case DROPDOWN:
            if (answer.choice) {
              return answer.choice.label ?
                map[question.title] = answer.choice.label :
                map[question.title] = answer.choice.other;
            } else if (answer.choices) {
              if (answer.choices.other) { answer.choices.labels.push(answer.choices.other); } 
              return map[question.title] = answer.choices.labels;
            } break;
          case DATE:
            return map[question.title] = answer.date;
          case FILE_UPLOAD:
            return map[question.title] = answer.file_url;
          case NUMBER:
          case RATING:
          case OPINION_SCALE:
            return map[question.title] = answer.number;
          case YES_NO:
          case LEGAL:
            return map[question.title] = answer.boolean;
          default:
            break;
        }
      }
    });
  });
  return map;
}
