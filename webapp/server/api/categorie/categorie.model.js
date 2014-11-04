/**
 * Created by Bram on 4/11/2014.
 */

var mongoose = require('mongoose')
    ,schema = mongoose.Schema;

var CategorieSchema = new Schema({
        naam: {type:String},
        beginDatum: {type: Date},
        eindDatum:{type: Date}
});

CategorieSchema.path('naam').required(true, 'Naam mag niet leeg zijn');
CategorieSchema.path('beginDatum').required(true, 'Begindatum mag niet leeg zijn');
CategorieSchema.path('eindDatum').required(true, 'Einddatum mag niet leeg zijn');

module.exports = mongoose.model('Categorie', CategorieSchema);