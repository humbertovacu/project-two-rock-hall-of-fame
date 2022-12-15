const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required."],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required."],
    },
    favoriteArtists: [{type: Schema.Types.ObjectId, refPath: 'ratingModel', unique: true}],
    ratingModel: {
      type: String,
      required: true,
      enum: ['Artist', 'Band']},
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
