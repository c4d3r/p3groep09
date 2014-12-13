/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var ContactpersoonSchema = new Schema({
    rijksregisterNummer: {type: String},
    voornaam: {type: String},
    naam: {type: String},
    straat: {type: String},
    huisNummer: {type:String},
    bus: {type: String},
    gemeente: {type: String},
    postcode: {type: String},
    telefoonNummer: {type: String}
    //nood: {type: Boolean}
});

ContactpersoonSchema.path('gemeente').required(true, 'Gemeente mag niet null zijn');
ContactpersoonSchema.path('naam').required(true, 'Naam mag niet null zijn');
ContactpersoonSchema.path('voornaam').required(true, 'Voornaam mag niet leeg zijn');
ContactpersoonSchema.path('postcode').required(true, 'Postcode mag niet leeg zijn');
//ContactpersoonSchema.path('naam').required(true, 'Naam mag niet leeg zijn');
ContactpersoonSchema.path('rijksregisterNummer').required(true, 'Rijksregisternummer mag niet leeg zijn');
//ContactpersoonSchema.path('nood').required(true, 'Nood mag niet null zijn');

module.exports = mongoose.model('Contactpersoon', ContactpersoonSchema);