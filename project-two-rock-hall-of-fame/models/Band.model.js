const { Schema, model } = require("mongoose");

const bandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  bandPicture: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },

  members: [{ type: Schema.Types.ObjectId, ref: "Artist" }],

  genres: {
    type: [String],
    required: true,
  },
});

const Band = model("Band", bandSchema);

module.exports = Band;
