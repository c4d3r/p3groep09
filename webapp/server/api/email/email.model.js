/**
 * Created by Bram on 7/11/2014.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var EmailSchema = new Schema({
    sendBy: {type: Schema.ObjectId, ref: 'GebruikerSchema'},
    sendDate: {type: Date},
    subject:{type: String},
    text: {type: String}
});

//EmailSchema.path('text').required(true, 'Text mag niet leeg zijn');
//EmailSchema.path('subject').required(true, 'Onderwerp mag niet leeg zijn');

module.export = mongoose.model('Email', EmailSchema);
