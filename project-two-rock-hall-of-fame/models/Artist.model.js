const { Schema, model } = require("mongoose");

function formatDate(date) {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
    default: "/images/artists/BlankArtist.jpg",
  },
  origin: {
    type: String,
    required: true,
    default: "Not available",
  },
  birthday: {
    type: String,
    required: true,
    set: date => formatDate(date),
    default: "Not available",
  },
  deathDate: {
    type: String,
    required: true,
    set: date => formatDate(date),
    default: "Not available",
  },
  bands: [{type: Schema.Types.ObjectId, ref: 'Band'}],

  instrument: {
    type: [String],
    required: true,
    default: "Not available",
  },
  genre: {
    type: [String],
    required: true,
    default: "Not available",
  },
  occupation: {
    type: [String],
    required: true,
    default: "Not available",
  },
});

const Artist = model("Artist", artistSchema);

module.exports = Artist;

