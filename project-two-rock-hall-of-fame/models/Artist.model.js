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
    default: "/images/artists/BlankArtist.jpg"
  },
  origin: {
    type: String,
    required: true,
    default: "Not available"
  },
  birthday: {
    type: String,
    required: true,
    default: "Not available"
  },
  deathDate: {
    type: String,
    required: false,
  },
  bands: [String],

  instrument: {
    type: [String],
    required: true,
    default: "Not available"
  },
  genres: {
    type: [String],
    required: true,
    default: "Not available"
  },
  occupation: {
    type: [String],
    required: true,
    default: "Not available"
  }
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;
