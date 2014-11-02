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

InschrijvingSchema.path('aansluitingsNummer').required(true, 'Aansluitingsnummer mag niet leeg zijn');
InschrijvingSchema.path('codeGerechtigde').required(true, 'Code Gerechtigde mag niet leeg zijn');
InschrijvingSchema.path('geboorteDatum').required(true, 'Geboorte datum mag niet null zijn');
InschrijvingSchema.path('gemeente').required(true, 'Gemeente mag niet leeg zijn');
InschrijvingSchema.path('postcode').required(true, 'Postcode mag niet leeg zijn');
InschrijvingSchema.path('rijksregisterNummer').required(true, 'Rijksregisternummer mag niet leeg zijn');
InschrijvingSchema.path('straat').required(true, 'Straat mag niet leeg zijn');
InschrijvingSchema.path('telefoonNummer').required(true, 'Telefoonnummer mag niet leeg zijn');
InschrijvingSchema.path('gebruiker').required(true, 'Gebruiker mag niet null zijn');
InschrijvingSchema.path('activiteit').required(true, 'Activiteit mag niet null zijn');


module.exports = mongoose.model('Inschrijving', InschrijvingSchema);