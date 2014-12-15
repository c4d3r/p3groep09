/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , Inschrijving = require('../inschrijving/inschrijving.model')
    , Activiteit = require('../activiteit/activiteit.model');

var KampSchema = new Schema({
    naam: {type: String},
    beschrijving: {type: String},
    contact: {type: String},
    periodes: [{
      startDatum: {type: String},
      eindDatum: {type: String}
    }],
    doelgroepen: [{type: Number}],
    promoAfbeelding: {type: String},
    afbeeldingen: [{type: String}],
    inschrijvingen: [{type: Schema.ObjectId, ref: "Inschrijving"}],

//Extra informatie over het kamp
    prijs: {type: Number},
    korting: {type: Number},
    locatie: {type: String},
    formule: {type:String},
    inbegrepen:[{type:String}],
    //busreis
    vervoer: {
      heen: {type: String},
      terug: {type: String}
    },
    vakantie: {type: String}

    //categorie: {type: Schema.ObjectId, ref: "Categorie"}
});

KampSchema.path('beschrijving').required(true, "Beschrijving mag niet leeg zijn");
KampSchema.path('contact').required(true, "Contact mag niet leeg zijn");
//KampSchema.path('eindDatum').required(true, "Einddatum mag niet leeg zijn");
//KampSchema.path('startDatum').required(true, "Begindatum mag niet leeg zijn");
//KampSchema.path('leeftijdsCatDoelgroep').required(true, "Leeftijdscategorie mag niet leeg zijn");
KampSchema.path('locatie').required(true, "Locatie mag niet leeg zijn");
KampSchema.path('naam').required(true, "Naam mag niet leeg zijn");
KampSchema.path('prijs').required(true, "Prijs mag niet leeg zijn");
//KampSchema.path('vervoer').required(true, "Vervoer mag niet leeg zijn");

/*KampSchema.methods = {
    addInschrijving: function(inschrijving) {
        this.inschrijvingen.push(inschrijving);
    }
};*/

module.exports = mongoose.model('Kamp', KampSchema);
