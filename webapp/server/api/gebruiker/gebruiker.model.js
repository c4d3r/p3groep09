/**
 * Created by Maxim on 27/10/2014.
 */
'use strict';

var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , crypto = require('crypto')
    , authTypes = ['github', 'twitter', 'facebook', 'google'];

var GebruikerSchema = new Schema({
    email: String,
    naam: String,
    voornaam: String,
    role: {
        type: String,
        default: 'ROLE_USER'
    },
    hashedWachtwoord: String,
    provider: String,
    salt: String,
    inschrijvingen: [{type: Schema.ObjectId, ref: "Inschrijving"}]
});

//password is gehasht
GebruikerSchema
    .virtual('wachtwoord')
    .set(function(wachtwoord) {
        this._wachtwoord = wachtwoord;
        this.salt = this.makeSalt();
        this.hashedWachtwoord = this.encryptPassword(wachtwoord);
    })
    .get(function() {
        return this._wachtwoord;
    });
// Validate empty email
GebruikerSchema
    .path('email')
    .validate(function(email) {
        if (authTypes.indexOf(this.provider) !== -1) return true;
        return email.length;
    }, 'Email cannot be blank');

// Validate empty password
GebruikerSchema
    .path('hashedWachtwoord')
    .validate(function(hashedPassword) {
        if (authTypes.indexOf(this.provider) !== -1) return true;
        return hashedPassword.length;
    }, 'Password cannot be blank');

// Validate email is not taken
GebruikerSchema
    .path('email')
    .validate(function(value, respond) {
        var self = this;
        this.constructor.findOne({email: value}, function(err, user) {
            if(err) throw err;
            if(user) {
                if(self.id === user.id) return respond(true);
                return respond(false);
            }
            respond(true);
        });
    }, 'The specified email address is already in use.');

var validatePresenceOf = function(value) {
    return value && value.length;
};

/**
 * Pre-save hook
 */
GebruikerSchema
    .pre('save', function(next) {
        if (!this.isNew) return next();

        if (!validatePresenceOf(this.hashedWachtwoord) && authTypes.indexOf(this.provider) === -1)
            next(new Error('Invalid password'));
        else
            next();
    });

/**
 * Methods
 */
GebruikerSchema.methods = {
    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashedWachtwoord;
    },

    addInschrijving: function(inschrijving) {
        this.inschrijvingen.push(inschrijving);
    }

    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */
    makeSalt: function() {
        return crypto.randomBytes(16).toString('base64');
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */
    encryptPassword: function(password) {
        if (!password || !this.salt) return '';
        var salt = new Buffer(this.salt, 'base64');
        return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
    },

    fullName: function() {
      return voornaam + " " + naam;
    }
};

module.exports = mongoose.model('Gebruiker', GebruikerSchema);
