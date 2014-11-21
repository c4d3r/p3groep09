/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , Kamp = require('../kamp/kamp.model')
  , Gebruiker = require('../gebruiker/gebruiker.model');

var InschrijvingSchema = new Schema({
  lidMutualiteit: {type: Boolean, default: false},
  persoonTenLaste: {
    aansluitingsNummer: {type: String},
    codeGerechtigde: {type: String}
  },
  tweedeOuder: {
    aansluitingsNummer: {type: String}
  },
  contactPersoon: {type: Schema.ObjectId, ref: "Contactpersoon"},
  betalendeOuder: {
    rijksregisterNummer: {type: String},
    voornaam: {type: String},
    naam: {type: String},
    straat: {type: String},
    huisnummer: {type: String},
    bus: {type: String},
    gemeente: {type: String},
    postcode: {type: String},
    telefoonNummer: {type: String}
  },
  rijksregisterNummer: {type: String},
  voornaam: {type: String},
  naam: {type: String},
  geboorteDatum: {type: Date, default: Date.now},
  adresDeelnemer: {
    straat: {type: String, default: ""},
    huisnummer: {type: String},
    bus: {type: String},
    gemeente: {type: String},
    postcode: {type: String}
  },
  noodPersonen: [
    {
      voornaam: {type: String},
      naam: {type: String},
      telefoonNummer: {type: String}
    }
  ],
  extraInformatie: {type: String},
  toevoeging: {type: String},
  gebruiker: {type: Schema.ObjectId, ref: "Gebruiker"},
  kamp: {type: Schema.ObjectId, ref: "Kamp"}
});

//TODO: Aanmaken virtual voor als adres deelnemer = adres contactpersoon
//TODO: Aanmaken virtual voor als contactpersoon ook betalende ouder is
/*InschrijvingSchema.path('aansluitingsNummer').required(true, 'Aansluitingsnummer mag niet leeg zijn');
 InschrijvingSchema.path('codeGerechtigde').required(true, 'Code Gerechtigde mag niet leeg zijn');
 InschrijvingSchema.path('geboorteDatum').required(true, 'Geboorte datum mag niet null zijn');
 InschrijvingSchema.path('gemeente').required(true, 'Gemeente mag niet leeg zijn');
 InschrijvingSchema.path('postcode').required(true, 'Postcode mag niet leeg zijn');
 InschrijvingSchema.path('rijksregisterNummer').required(true, 'Rijksregisternummer mag niet leeg zijn');
 InschrijvingSchema.path('straat').required(true, 'Straat mag niet leeg zijn');
 InschrijvingSchema.path('telefoonNummer').required(true, 'Telefoonnummer mag niet leeg zijn');
 InschrijvingSchema.path('gebruiker').required(true, 'Gebruiker mag niet null zijn');
 InschrijvingSchema.path('activiteit').required(true, 'Activiteit mag niet null zijn');     */

//post save hook
InschrijvingSchema
    .post('save', function(inschrijving){
        
        Kamp.findOne({_id: inschrijving.kamp}, function(err, kamp) {
            kamp.addInschrijving(inschrijving);
            kamp.save(function(err){
                if(err !== null) console.log(err);
            });
        });

        Gebruiker.findOne({_id: inschrijving.gebruiker}, function(err, gebruiker) {
            gebruiker.addInschrijving(inschrijving);

            gebruiker.save(function(err){
                if(err !== null) console.log(err);
            });
        });
    });

module.exports = mongoose.model('Inschrijving', InschrijvingSchema);
