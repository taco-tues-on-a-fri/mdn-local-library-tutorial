var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, minlength: 3, maxlength: 100}
  }
);

// Virtual for genre URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

// Virtual for genre name
GenreSchema
.virtual('genre_name')
.get(function () {
  return this.name;
});


// Export model
module.exports = mongoose.model('Genre', GenreSchema);