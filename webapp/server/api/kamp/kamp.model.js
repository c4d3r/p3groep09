/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var KampSchema = new Schema({
    korting: {type: Number},
    beschrijving: {type: String},
    contact: {type: String},
    eindDatum: {type: Date},
    startDatum: {type: Date},
    leeftijdsCatDoelgroep: {type: String}, //TODO: te verwijderen doelgroep is beter
    doelgroepen: [{type: Number}],
    locatie: {type: String},
    naam: {type: String},
    prijs: {type: Number},
    vervoer: {type: String},
    promoAfbeelding: {type: String},
    afbeeldingen: [{type: String}],
    inschrijvingen: [{type: Schema.ObjectId, ref: "Inschrijving"}]
    //categorie: {type: Schema.ObjectId, ref: "Categorie"}
});

KampSchema.path('beschrijving').required(true, "Beschrijving mag niet leeg zijn");
KampSchema.path('contact').required(true, "Contact mag niet leeg zijn");
//KampSchema.path('eindDatum').required(true, "Einddatum mag niet leeg zijn");
//KampSchema.path('startDatum').required(true, "Begindatum mag niet leeg zijn");
KampSchema.path('leeftijdsCatDoelgroep').required(true, "Leeftijdscategorie mag niet leeg zijn");
KampSchema.path('locatie').required(true, "Locatie mag niet leeg zijn");
KampSchema.path('naam').required(true, "Naam mag niet leeg zijn");
KampSchema.path('prijs').required(true, "Prijs mag niet leeg zijn");
KampSchema.path('vervoer').required(true, "Vervoer mag niet leeg zijn");

KampSchema.methods = {
    addInschrijving: function(inschrijving) {
        this.inschrijvingen.push(inschrijving);
    }
};

module.exports = mongoose.model('Kamp', KampSchema);
