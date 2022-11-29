const { Schema, model } = require("mongoose");

const bandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  bandPicture: {
    type: String,
    required: true,
    default: "/images/artists/BlankArtist.jpg",
  },
  origin: {
    type: String,
    required: true,
    default: "Not available",
  },
  year: {
    type: Date,
    required: true,
    default: "Not available",
  },

  members: { type: [Schema.Types.ObjectId], ref: "Artist", required: true },

  genre: {
    type: [String],
    required: true,
    default: "Not available",
  },
});

const Band = model("Band", bandSchema);

module.exports = Band;
