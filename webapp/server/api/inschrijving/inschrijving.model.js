/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
, Schema = mongoose.Schema;

var InschrijvingSchema = new Schema({
    aansluitingsNummer: {type: String},
    codeGerechtigde: {type: String},
    geboorteDatum: {type: Date, default: Date.now},
    gemeente: {type: String},
    gsmNummer: {type: String},
    postcode: {type: String},
    rijksregisterNummer: {type: String},
    straat: {type: String},
    telefoonNummer: {type: String},
    toevoeging: {type: String},
    gebruiker: [{type: Schema.ObjectId, ref: "GebruikerSchema"}],
    activiteit: {type: Schema.ObjectId, ref: "ActiviteitSchema"}
});

module.exports = mongoose.model('Inschrijving', InschrijvingSchema);