/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var NieuwsitemSchema = new Schema({
    text: {type: String},
    createdOn: {type: Timestamp},
    createdBy: {type: Schema.ObjectId, ref: "GebruikerSchema"}
});

module.exports = mongoose.model('Nieuwsitem', NieuwsitemSchema);