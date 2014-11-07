/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/gebruikers', require('./api/gebruiker'));
  app.use('/api/kampen', require('./api/kamp'));
  app.use('/api/inschrijvingen', require('./api/inschrijving'));
  app.use('/api/activiteiten', require('./api/activiteit'));
  app.use('/api/comments', require('./api/comment'));
  app.use('/api/contactpersonen', require('./api/contactpersoon'));
  app.use('/api/nieuwsitems', require('./api/nieuwsitem'));
  //Nog in commentaar, deze geeft een fout bij het serven
  // app.use('/api/categories', require('./api/categorie'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
