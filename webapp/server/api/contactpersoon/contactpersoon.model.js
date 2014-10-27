/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var ContactpersoonSchema = new Schema({
    bus: {type: String},
    gemeente: {type: String},
    gsm: {type: String},
    naam: {type: String},
    voornaam: {type: String},
    postcode: {type: String},
    rijksregisterNummer: {type: String},
    straat: {type: String},
    nood: {type: Boolean}
});

module.exports = mongoose.model('Contactpersoon', ContactpersoonSchema);