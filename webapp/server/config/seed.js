/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';


var Gebruiker = require('../api/gebruiker/gebruiker.model')
    , Inschrijving = require('../api/inschrijving/inschrijving.model')
    , Activiteit = require('../api/activiteit/activiteit.model')
    , Comment = require('../api/comment/comment.model')
    , NieuwsItem = require('../api/nieuwsitem/nieuwsitem.model')
    , Kamp = require('../api/kamp/kamp.model')
    , Email = require('../api/email/email.model')
    , Categorie = require('../api/categorie/categorie.model');


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

Gebruiker.find({}).remove(function () {
    Gebruiker.create({
            provider: 'local',
            naam: 'Doe',
            voornaam: 'John',
            email: 'test@test.com',
            wachtwoord: 'test'
        }, {
            provider: 'local',
            role: 'ROLE_ADMIN',
            naam: 'Admin',
            voornaam: 'John',
            name: 'Admin',
            email: 'admin@admin.com',
            wachtwoord: 'admin'
        },
        {
            provider: 'local',
            name: 'Roy Hollanders',
            naam: 'Hollanders',
            voornaam: 'Roy',
            email: 'roy_9852@hotmail.com',
            wachtwoord: 'Test123'
        },
        {
            provider: 'local',
            naam: 'Moni',
            voornaam: 'Tor',
            role: 'ROLE_MONITOR',
            email: 'monitor@joetz.com',
            wachtwoord: 'monitor1'
        }
        , function () {
            console.log('finished populating users');

            // Ah async
            populateCategories();
            populateKampen();
            populateNieuws();
            populateComments;
            populateActiviteiten();
            populateInschrijvingen();
            populateEmails();
        }
    );
});

function populateNieuws() {
    NieuwsItem.find({}).remove(function () {

        Gebruiker.findOne({email: "admin@admin.com"}, function (err, gebruiker) {

            NieuwsItem.create(
                {
                    title: "Joetz organiseert flashmob in het teken van de Internationale week van de Vrede",
                    text: "Joetz organiseert op woensdag 24 september een flashmob op het Muntplein in Brussel. Tientallen vrijwilligers zullen verkleed als knuffeldier een groepsknuffel organiseren. Met deze ludieke actie willen we de aandacht vestigen op verdraagzaamheid en vrede. <br/>" +
                        "We staan aan het begin van een nieuw werkjaar waarin zoals steeds vrede en verdraagzaamheid twee essentiële pijlers zijn in de werking van Joetz. Vooral tijdens de Internationale Week van de Vrede willen we deze topics extra benadrukken. Inclusie, verdraagzaamheid en aandacht voor minderheden zijn thema’s die al in meerdere Joetz-campagnes aan bod zijn gekomen. Aan de hand van reizen en infomomenten, proberen we om verdraagzaamheid en solidariteit zoveel mogelijk te promoten." +
                        "Er zijn echter veel kinderen in andere delen van de wereld die op dagelijkse basis geconfronteerd worden met geweld en oorlog. Om duidelijk te maken dat er ook aan hen gedacht wordt, organiseert Joetz de actie ‘Knuffel voor een Truffel’. Op 24 september zullen tientallen monitoren en vrijwilligers van Joetz verkleed als knuffeldieren naar het Muntplein in Brussel stappen waar ze onderweg gratis knuffels uitdelen aan voorbijgangers. Ze krijgen in ruil voor de knuffel een lekkere truffel. Met deze ludieke actie wil Joetz duidelijk maken dat verdraagzaamheid en vrede twee kerneigenschappen zijn van een gezonde maatschappij waarin jongeren en kinderen zich kunnen ontplooien." +
                        "Waarom dan precies knuffelen?" +
                        "willen met deze actie benadrukken dat het voor kinderen en jongeren heel gezond is om dagelijks iemand te knuffelen. Uit wetenschappelijk onderzoek is zelfs gebleken dat kin¬deren die tijdens de eerste zes jaar niet genoeg werden geknuffeld, lichamelijke of geestelijke achter-stand kunnen oplopen. Knuffelen heeft een positieve invloed op het immuunsysteem, vermindert stress, helpt tegen slapeloos¬heid en blijkt te helpen tegen depressie�?, legt Sofie De Bisschop van Joetz vzw uit.",
                    createdBy: gebruiker,
                    createdOn: new Date(2014, 9, 22)
                },
                {
                    title: "SMOOR",
                    text: "Een educatief theaterproject over roken. " +
                        "SMOOR is een leuk stukje theater waar jongeren zonder autoritair gemoraliseer en zonder overdreven bangmakerij duidelijk gemaakt worden dat een sigaret weigeren stoer is. Met veel humor, fijne intriges en blitse dialogen wordt SMOOR een aantrekkelijk project in het kader van tabakspreventie. Met de educatieve werkmap en de nieuwe affichecampagne kan je in de klas verder werken rond het thema. De affiche kan je gratis via email aanvragen.",
                    createdBy: gebruiker,
                    createdOn: new Date(2014, 9, 19)
                },
                {
                    title: "Red Je Rug!",
                    text: "Het nieuwe schooljaar is begonnen: tijd om elke dag te sjouwen met een zware boekentas." +
                        "Overladen tassen vormen thans regelmatig een last voor de rug van kinderen en jongeren. Om te vermijden dat kinderen en jongeren op jonge leeftijd al rugpijn ontwikkelen, is het belangrijk om hier aandacht voor te hebben." +
                        "Daarom lanceert JOETZ naast de bestaande \"Red je Rug\" affiche voor jongeren, een nieuwe affichecampagne \"Red Je Rug\" voor kinderen van de lagere school. 10 \"Red je Rug\" - tips met bijhorende leuke cartoons zetten leerlingen aan om hun boekentas niet nodeloos vol te proppen.",
                    createdBy: gebruiker,
                    createdOn: new Date(2014, 9, 11)
                },
                {
                    title: "Eén op tien kinderen gaat nooit naar toilet op school. Dat moet veranderen.",
                    text: "Uit recent betrouwbaar onderzoek is gebleken dat 1 op 10 kinderen nooit naar het toilet gaat op school. Het toilet is voor veel kinderen een vieze, donkere en koude plaats die ze liefst zo veel mogelijk vermijden. JOETZ vzw wil daar verandering in brengen en van de toiletten een hippe plek maken waar kinderen kunnen ontspannen en eventjes tot rust komen." +
                        "Antistresscampagne" +
                        "Daarom trekt JOETZ vzw, partner van de Socialistische Mutualiteiten, op vrijdag 5 september naar Basisschool Het Schrijvertje in Mol ter promotie van www.stresskip.be een antistresscampagne voor lagere schoolkinderen. JOETZ vzw zal de kale toiletten van deze basisschool omtoveren tot een plekje waar het aangenaam vertoeven is en waar kinderen even tot rust kunnen komen en de stress loslaten.",
                    createdBy: gebruiker,
                    createdOn: new Date(2014, 9, 5)
                },
                {
                    title: "Professor Slurp leert de JOETZ-deelnemers wat etiquette is",
                    text: "De zomer is begonnen en dit betekent meteen ook de start van de zomerkampen en speelpleinwerkingen. Ook JOETZ ontvangt deze zomer ruim 3.500 kinderen op de JOETZ-vakanties en speelpleinwerkingen. Maar dit jaar gaat er wel een hele speciale gast mee met JOETZ: Professor Slurp! Deze gekke handpop is overgewaaid uit Nederland en is een uniek concept om kinderen op een speelse manier iets te leren over etiquette. Slurp komt oorspronkelijk uit Burpieland en weet zich totaal niet te gedragen. De jongste JOETZ-deelnemers gaan de onaangepaste en ondeugende Professor Slurp deze zomer leren hoe hij zich beter kan gedragen. Ze helpen hem in verschillende situaties waardoor zij ongemerkt bijleren over etiquette.",
                    createdBy: gebruiker,
                    createdOn: new Date(2014, 7, 25)
                }, function () {
                    console.log("populated nieuwsitems");
                }
            )
        });
    });
}
function populateActiviteiten() {
    Activiteit.find({}).remove(function () {
        Gebruiker.findOne({email: "Monitor@Joetz.com"}, function (err, gebruiker) {
            Comment.find(function (err, comments) {
                Activiteit.create(
                    {
                        beschrijving: "Test",
                        contact: gebruiker,
                        eindDatum: new Date(2014, 12, 16),
                        locatie: "Dromenland",
                        naam: "Slapen",
                        startDatum: new Date(2014, 12, 15),
                        comments: comments,
                        createdOn: new Date(2014, 9, 5)
                    }
                    , function () {
                        console.log('populated activiteiten')
                    }
                )
            })
        });
    })
}

function populateComments() {
    Comment.find({}).remove(function () {
        Gebruiker.findOne({email: "Monitor@Joetz.com"}, function (err, gebruiker) {
            Comment.create(
                {
                    text: "Lekker slapen!",
                    createdOn: new Date(2014, 9, 5),
                    createdBy: gebruiker
                },
                {
                    text: "Snoezen!",
                    createdOn: new Date(2014, 9, 6),
                    createdBy: gebruiker
                }
                , function () {
                    console.log('populated comments')
                }
            )
        });
    })
}


function populateKampen() {
    Kamp.find({}).remove(function () {
            Kamp.create(
                //DATUM ATTENTION: ISODAte --> maand begint vanaf 0!
                {
                  naam: "Krk, here we come!",
                  beschrijving: 'Wie droomt er nu niet van Kroatië? Geniet mee van een heerlijke vakantie op het zonnige eiland Krk!',
                  contact: "???",
                  startDatum: new Date(2015, 6, 28, 0, 0, 0),
                  eindDatum: new Date(2015, 7, 6, 0, 0, 0),
                  leeftijdsCatDoelgroep: "15 - 18",
                  doelgroepen: [15, 16, 17, 18],
                  locatie: "Krk (Kroatië)",
                  prijs: 535,
                  vervoer: "Bus",
                  korting: 0,
                  promoAfbeelding: "zomer/kroatie.jpg"
                },
                {
                  naam: "Sun & Fun Spanje",
                  beschrijving: 'Zon, zee, strand en … actie. Is stilzitten niet jouw ding? Onze dagen onder de zon worden gevuld met geweldige activiteiten als watertrekking, laser-shooting, vlottentocht, een bootcruise, een dag in een waterpretpark, een uitstapje naar Barcelona en nog zoveel meer. Om dan van de leuke avondactiviteiten en een heuse poolparty nog maar te zwijgen.',
                  contact: "???",
                  startDatum: new Date(2015, 7, 16, 0, 0, 0),
                  eindDatum: new Date(2015, 7, 27, 0, 0, 0),
                  leeftijdsCatDoelgroep: "12 - 15",
                  doelgroepen: [12, 13, 14, 15],
                  locatie: "Empuriabrava, Spanje",
                  prijs: 585,
                  vervoer: "Bus",
                  korting: 0,
                  promoAfbeelding: "zomer/spanje.jpg"
                },
                {
                  naam: "Balaton-fun",
                  beschrijving: 'We verblijven in het dorpje Révfülöp, aan de noordelijke kust van het Ballatonmeer. We zullen tijdens onze vakantie niet alleen lekker badderen in deze ‘Hongaarse zee’, om en rond zijn nog ontelbare leuke activiteiten. Wat dacht je van een bezoekje aan het prachtige Boedapest? Of een fietstocht om de omgeving te verkennen? Wat we ook doen, de JOETZ-animatoren maken er een geweldig verblijf van!',
                  contact: "???",
                  startDatum: new Date(2015, 7, 17, 0, 0, 0),
                  eindDatum: new Date(2015, 7, 28, 0, 0, 0),
                  leeftijdsCatDoelgroep: "16 - 18",
                  doelgroepen: [16, 17, 18],
                  locatie: "Balatonmeer (Hongarije)",
                  prijs: 475,
                  vervoer: "Bus",
                  korting: 0,
                  promoAfbeelding: "zomer/hongarije.jpg"
                },
                {
                naam: "Ski en fun",
                beschrijving: 'Begrijp je er geen jota van? Geen nood, in elk niveaugroepje skiet een monitor van JOETZ mee. Die helpt je over de taalbarrière en de Oostenrijkse skimonitor leert je vlekkeloos langs elk pisteobstakel laveren. De lunchpauzes nemen we in het hotel dat vlakbij de skipiste ligt. Praktisch toch!? De JOETZ-monitors garanderen leuke après-ski en avondactiviteiten.',
                contact: "???",
                startDatum: new Date(2014, 11, 19, 0, 0, 0),
                eindDatum: new Date(2014, 11, 27, 0, 0, 0),
                leeftijdsCatDoelgroep: "10 - 14",
                doelgroepen: [10, 11, 12, 13, 14],
                locatie: "Maria Alm, Oostenrijk",
                prijs: 785,
                vervoer: "Bus",
                korting: 0,
                promoAfbeelding: "winter/oostenrijk.jpg"
                }
                , function () {
                    console.log('populated kampen')
                }
            )
        }
    )
    ;
}

function populateInschrijvingen() {
    Inschrijving.find({}).remove(function () {
        Gebruiker.findOne({email: "roy_9852@hotmail.com"}, function (err, gebruiker) {
            Kamp.findOne({naam: "Krk, here we come!"}, function (err, kamp) {
                Inschrijving.create(
                    {
                        lidMutualiteit: false,
                        persoonTenLaste: {
                            aansluitingsNummer: "1234565789",
                            codeGerechtigde: "1234"
                        },
                        tweedeOuder: {
                            aansluitingsNummer: "541562156"
                        },
                        contactPersoon: gebruiker,
                        betalendeOuder: {
                            rijksregisterNummer: "165485162198",
                            voornaam: "Bob",
                            naam: "BobSon",
                            straat: "straat",
                            huisnummer: "1",
                            bus: "2",
                            gemeente: "testegem",
                            postcode: "4567",
                            telefoonNummer: "123456"
                        },
                        rijksregisterNummer: "1232456",
                        voornaam: "test",
                        naam: "testson",
                        geboorteDatum: new Date(2005, 5, 25),
                        adresDeelnemer: {
                            straat: "straat",
                            huisnummer: "1",
                            bus: "2",
                            gemeente: "testegem",
                            postcode: "4567"
                        },
                        noodPersonen: [
                            {
                                voornaam: "nood",
                                naam: "noodson",
                                telefoonNummer: "123456789"
                            }
                        ],
                        extraInformatie: "bla",
                        toevoeging: "Test",
                        gebruiker: gebruiker,
                        kamp: kamp
                    }
                    , function () {
                        console.log('populated inschrijvingen')
                    }
                )
            })
        });
    })
}

function populateEmails() {
    Email.find({}).remove(function () {
        Gebruiker.findOne({email: "test@test.com"}, function (err, gebruiker) {
            Email.create({
                    sendBy: gebruiker,
                    sendDate: new Date(2014, 11, 22),
                    subject: "Aanvraag voor meer kampen",
                    text: "Zou het mogelijk zijn om enventueel meer kampen toe te voegen aan uw selectie van kampen"
                }
                , function () {
                    console.log('populated email')
                });
        });
    });
}

function populateCategories(){
    Categorie.find({}).remove(function(){
        Categorie.create({
            naam: "Waterpret"
        },{
            naam: "Avontuur"
        },{
            naam: "Sport"
        },{
            naam: "Exploratie"
        },
        function(){
            console.log('populated categorie')
        });
    });
}

