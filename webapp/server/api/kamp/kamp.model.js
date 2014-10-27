/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var KampSchema = new Schema({
    korting: {type: Double},
    beschrijving: {type: String},
    contact: {type: String},
    eindDatum: {type: Date},
    startDatum: {type: Date},
    leeftijdsCatDoelgroep: {type: String},
    locatie: {type: String},
    naam: {type: String},
    prijs: {type: Double},
    vervoer: {type: String},
    inschrijvingen: [{type: Schema.ObjectId, ref: "InschrijvingSchema"}]
});
