/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

//var Thing = require('../api/thing/thing.model');
var Gebruiker = require('../api/gebruiker/gebruiker.model');
var Kamp = require('../api/kamp/kamp.model');

/*Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});*/

Gebruiker.find({}).remove(function() {
    Gebruiker.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    wachtwoord: 'test'
  }, {
    provider: 'local',
    role: 'ROLE_ADMIN',
    name: 'Admin',
    email: 'admin@admin.com',
    wachtwoord: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Kamp.find({}).remove(function(){
    Kamp.create({
       aansluitingsNummer: 1,
       contact: 'Jeff',
        //einddatum: '2012-11-04T14:51:06.157Z',
        //startdatum:'2012-12-04T14:51:06.157Z',
        leeftijdsCatDoelgroep: '3 tot 9',
        locatie:'Rapture',
        naam:'Trip to the bottom of the sea',
        prijs:100,
        vervoer: 'Jetplain'
    }, function(){
            console.log('Kampen zijn gevult')
        }
    );
});