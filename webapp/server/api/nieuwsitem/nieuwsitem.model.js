/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var NieuwsitemSchema = new Schema({
    text: {type: String, required: false, default: ""},
    image: {type: String, required: false},
    title: {type: String, required: false, default: ""},
    createdOn: {type: Date, required: true, default: Date.now},
    createdBy: {type: Schema.ObjectId, ref: "Gebruiker"}
});

module.exports = mongoose.model('Nieuwsitem', NieuwsitemSchema);
