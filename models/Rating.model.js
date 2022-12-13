const { Schema, model } = require("mongoose");
const Artist = require("./Artist.model");
const Band = require("./Band.model");

const ratingSchema = new Schema({
    userID: {type: Schema.Types.ObjectId, ref: 'User'},
    objectID: {type: Schema.Types.ObjectId, refPath: 'ratingModel'}, 
    ratingModel: {
        type: String,
        required: true,
        enum: ['Artist', 'Band']},
    rating: {type: Number}
      });

const Rating = model("Rating", ratingSchema);
ratingSchema.index({userID: 1, objectID: 1}, {unique: true});

module.exports = Rating;
