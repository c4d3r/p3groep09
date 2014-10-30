/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var ActiviteitSchema = new Schema({
    beschrijving: {type: String},
    contact: {type: Schema.ObjectId, ref: "GebruikerSchema"},
    eindDatum: {type: Timestamp},
    locatie: {type: String},
    naam: {type: String},
    startDatum: {type: Timestamp},
    comments: [{type: Schema.ObjectId, ref: "CommentSchema"}],
    createdOn: {type: Timestamp, Default: Date.now}
});

module.exports = mongoose.model('Activiteit', ActiviteitSchema);