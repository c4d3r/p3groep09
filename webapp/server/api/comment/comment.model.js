/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var CommentSchema = new Schema({
    text: {type: String},
    createdOn: {type: Date},
    createdBy: {type: Schema.ObjectId, ref: "Gebruiker"}
});

CommentSchema.path('text').required(true, 'Text mag niet leeg zijn');

module.exports = mongoose.model('Comment', CommentSchema);