const { Schema, model } = require("mongoose");

const arrayMin = (value) => {
  return value.length < 2;
};

const surveySchema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  options: {
    type: [
      {
        type: String,
      },
    ],
    validate: [arrayMin, "You must add a minimum of 2 options"],
  },
});

const Survey = model("Survey", surveySchema);

module.exports = Survey;
