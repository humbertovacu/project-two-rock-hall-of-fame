const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  profilePicture: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  deathDate: {
    type: String,
    required: false,
  },
  bands: [String],

  instrument: {
    type: [String],
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  occupation: {
    type: [String],
    required: true,
  },
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;
