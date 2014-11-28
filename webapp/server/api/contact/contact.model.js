/**
 * Created by Bram on 7/11/2014.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ContactSchema = new Schema({
    sendBy: {type: Schema.ObjectId, ref: 'Gebruiker'},
    sendDate: {type: Date},
    onderwerp: {type: String},
    bericht: {type: String}
});

ContactSchema.path('onderwerp').required(true, 'Text mag niet leeg zijn');
ContactSchema.path('bericht').required(true, 'Onderwerp mag niet leeg zijn');


module.exports = mongoose.model('Contact', ContactSchema);
