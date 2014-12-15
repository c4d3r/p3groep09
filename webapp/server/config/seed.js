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
    , Contact = require('../api/contact/contact.model')
    , Categorie = require('../api/categorie/categorie.model');


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
            populateComments();
            populateActiviteiten();
            populateInschrijvingen();
            populateContacts();
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
        Gebruiker.findOne({email: "monitor@joetz.com"}, function (err, gebruiker) {
            Comment.find(function (err, comments) {
                var _gebruiker = gebruiker;
                var _comments = comments;
                Activiteit.create(
                    {
                        beschrijving: "Test",
                        contact: _gebruiker,
                        eindDatum: new Date(2014, 12, 16),
                        locatie: "Dromenland",
                        naam: "Slapen",
                        startDatum: new Date(2014, 12, 15),
                        comments: _comments,
                        createdOn: new Date(2014, 9, 5),
                        inschrijvingen: _gebruiker
                    },
                    {
                        beschrijving: "Kajjakken in Ardeche",
                        contact: _gebruiker,
                        eindDatum: new Date(2014, 12, 16),
                        locatie: "Ardeche",
                        naam: "Kajakken",
                        startDatum: new Date(2014, 12, 15),
                        comments: _comments,
                        createdOn: new Date(2014, 9, 5),
                        inschrijvingen: _gebruiker
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
            var _gebruiker = gebruiker;
            Comment.create(
                {
                    text: "Lekker slapen!",
                    createdOn: new Date(2014, 9, 5),
                    createdBy: _gebruiker
                },
                {
                    text: "Snoezen!",
                    createdOn: new Date(2014, 9, 6),
                    createdBy: _gebruiker
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
            /*Kamp.create(
                //DATUM ATTENTION: ISODAte --> maand begint vanaf 0!
                {
                    naam: "Kerstvakantie aan zee",
                    beschrijving: 'Flikkerende lichtjes en glinsterende slingers, een besneeuwd strand en vooral veel vrienden en plezier. Onze JOETZ monitoren zijn er weer helemaal klaar voor om met jou de laatste dagen van het jaar op een onvergetelijke manier te beleven. We voorzien een fantastisch avontuur in een besneeuwd winterlandschap. Ons monitorenteam ontwikkelende een supergezellig programma waar plezier en sfeer centraal staan. Neem dus je warmste muts en sjaal mee om samen met ons van deze prachtige vakantie te genieten! Wie weet krijgen we de kerstman op bezoek ... .!',
                    contact: "???",
                    startDatum: new Date(2014, 11, 26, 0, 0, 0),
                    eindDatum: new Date(2014, 11, 31, 0, 0, 0),
                    doelgroepen: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                    promoAfbeelding: "zomer/kroatie.jpg",
                    afbeeldingen:["hotel1.jpg","hotel2.jpg","hotel3.jpg"],

                    //Extra Info
                    locatie: "Barkentijn te Nieuwpoort",
                    prijs: 192,
                    korting: 0,
                    formule: "Volpension",
                    inbegrepen:["Heen- en terugreis per luxe autocar"," Verblijf in volpension", "Drank bij de maaltijden", "Dagelijks vieruurtje", "Begeleiding door ervaren, gebrevetteerde monitoren","Gevarieerd spelprogramma incl. aangeboden activiteiten","Ongevallenverzekering"],

                    //Vervoer
                    vervoer: "Bus"
                },
                {
                    naam: "Ski en fun",
                    beschrijving: 'Begrijp je er geen jota van? Geen nood, in elk niveaugroepje skiet een monitor van JOETZ mee. Die helpt je over de taalbarrière en de Oostenrijkse skimonitor leert je vlekkeloos langs elk pisteobstakel laveren. De lunchpauzes nemen we in het hotel dat vlakbij de skipiste ligt. Praktisch toch!? De JOETZ-monitors garanderen leuke après-ski en avondactiviteiten.',
                    contact: "???",
                    startDatum: new Date(2014, 11, 19, 0, 0, 0),
                    eindDatum: new Date(2014, 11, 27, 0, 0, 0),
                    doelgroepen: [10, 11, 12, 13, 14],
                    locatie: "Jeugdhotel Oberau te Maria Alm(Oostenrijk)",
                    prijs: 785,
                    vervoer: "Bus",
                    korting: 0,
                    promoAfbeelding: "winter/oostenrijk.jpg"
                },
                {
                    naam: "Skiën in Maria Alm",
                    startDatum: new Date(2014, 1, 13, 0, 0, 0),
                    beschrijving: 'Wij vertrekken naar Oostenrijk voor een week ski- en snowboardfun. Lange pistes, leuk gezelschap en hopelijk wat zon. Wat wil je nog meer?  Oostenrijkse skimonitoren leren je vlekkeloos langs elk pisteobstakel laveren. De lunchpauzes nemen we in het hotel dat vlak bij de piste ligt: lekker en makkelijk! De JOETZ monitoren skiën een hele dag mee en garanderen geweldige après-ski en avondactiviteiten.',
                    contact: "???",
                    eindDatum: new Date(2015, 1, 21, 0, 0, 0),
                    doelgroepen: [11, 12, 13, 14, 15, 16, 17, 18],
                    locatie: "Jugendgästehaus Oberau te Maria Alm(Oostenrijk)",
                    prijs: 640,
                    vervoer: "Bus",
                    korting: 0,
                    promoAfbeelding: "winter/oostenrijk.jpg"
                },
                {
                    naam: "Austria? Check!",
                    startDatum: new Date(2015, 6, 3, 0, 0, 0),
                    beschrijving: 'Beleef de fun van onze verschillende JOETZ-activiteiten: de berg op in de gondellift, de berg af via de rodelbaan, een duik in het zwemparadijs of aan de waterval, bezoekjes aan grot en burcht, super animaties en nog zoveel meer. De pracht van de Oostenrijkse bergen, de alpenweiden en de kloven krijg je er gratis en voor niks bovenop!',
                    contact: "???",
                    eindDatum: new Date(2015, 6, 12, 0, 0, 0),
                    doelgroepen: [12, 13, 14, 15, 16],
                    locatie: "Jugendgästehaus Oberau te Maria Alm(Oostenrijk)",
                    prijs: 382,
                    vervoer: "Bus",
                    korting: 0,
                    promoAfbeelding: "winter/oostenrijk.jpg"
                },
                {
                    naam: "Actie, fun en avontuur - Trophy",
                    startDatum: new Date(2015, 6, 3, 0, 0, 0),
                    beschrijving: 'Raften, klimmen of hoogteparcours, mountainbiken, oriëntatielopen, avonturentocht … rekening houdend met de (weers)omstandigheden beoefen je verschillende buitensporten. De climax van de vakantie is de Trophy-wedstrijd waarin je alleen of in team je grenzen verlegt.',
                    contact: "???",
                    eindDatum: new Date(2015, 6, 12, 0, 0, 0),
                    doelgroepen: [13, 14, 15, 16],
                    locatie: "Jugendgästehaus Oberau te Maria Alm(Oostenrijk)",
                    prijs: 448,
                    vervoer: "Bus",
                    korting: 0,
                    promoAfbeelding: "winter/oostenrijk.jpg"
                },
                {
                    naam: "Krk binnenstebuiten!",
                    startDatum: new Date(2015, 6, 17, 0, 0, 0),
                    beschrijving: 'Laat onze JOETZ-animatoren je meenemen op ontdekking van het eiland Krk. Oude stadjes, leuke uitstapjes en activiteiten, een heerlijke BBQ op het einde van de dag en natuurlijk een azuurblauwe zee onder de Kroatische zon. Je verveelt je geen minuut… We verblijven in Hostel Krk, in het bovenste gedeelte van het historische, ommuurde stadje Krk.',
                    contact: "???",
                    eindDatum: new Date(2015, 6, 28, 0, 0, 0),
                    doelgroepen: [13, 14, 15],
                    locatie: "Hostel Krk te Krk(Kroatië)",
                    prijs: 535,
                    vervoer: "Bus",
                    korting: 0,
                    promoAfbeelding: "zomer/kroatie.jpg"
                },
                {
                    naam: "Krk, here we come!",
                    beschrijving: 'Kom mee en ontdek het ‘gouden eiland’ Krk. Hostel Krk, onze uitvalsbasis voor 10 dagen ligt in het bovenste gedeelte van het historische, ommuurde stadje Krk. Maak je klaar voor een heerlijk zonnige vakantie, neem een duik in de azuurblauwe zee, lanterfant door oude kleine straatjes, laat de BBQ je smaken, geniet van leuke uitstapjes en activiteiten en laat je verrassen door ons top-animatieteam!',
                    contact: "???",
                    startDatum: new Date(2015, 6, 28, 0, 0, 0),
                    eindDatum: new Date(2015, 7, 6, 0, 0, 0),
                    doelgroepen: [15, 16, 17, 18],
                    locatie: "Hostel Krk te Krk(Kroatië)",
                    prijs: 535,
                    vervoer: "Bus",
                    korting: 0,
                    promoAfbeelding: "zomer/kroatie.jpg"
                },
                {
                    naam: "Sun & Fun Spanje",
                    beschrijving: 'Zon, zee, strand en … actie. Is stilzitten niet jouw ding? Onze dagen onder de zon worden gevuld met geweldige activiteiten als watertrekking, laser-shooting, vlottentocht, een bootcruise, een dag in een waterpretpark, een uitstapje naar Barcelona en nog zoveel meer. Om dan van de leuke avondactiviteiten en een heuse poolparty nog maar te zwijgen.',
                    contact: "???",
                    startDatum: new Date(2015, 6, 6, 0, 0, 0),
                    eindDatum: new Date(2015, 6, 28, 0, 0, 0),
                    doelgroepen: [12, 13, 14, 15],
                    locatie: "tentenkamp aan het strand te Empuriabrava, Spanje",
                    prijs: 585,
                    vervoer: "Bus",
                    korting: 0,
                    promoAfbeelding: "zomer/spanje.jpg"
                },
                {
                    naam: "Balaton-pret",
                    startDatum: new Date(2015, 7, 16, 0, 0, 0),
                    beschrijving: 'Een plons hier en een duik daar: het Balatonmeer leent zich met zijn prachtige omgeving en zijn aangename temperaturen voor tonnen waterpret. Natuurlijk staat er nog veel meer op het programma: wat dacht je van een bezoekje aan het prachtige Boedapest? Of een fietstocht om de omgeving te verkennen? Wat we ook doen, de JOETZ-animatoren maken er een geweldig verblijf van!',
                    contact: "???",
                    eindDatum: new Date(2015, 7, 27, 0, 0, 0),
                    doelgroepen: [13, 14, 15],
                    locatie: "Balaton Hostel bij het Balatonmeer(Hongarije)",
                    prijs: 475,
                    vervoer: "Bus",
                    korting: 0,
                    promoAfbeelding: "zomer/hongarije.jpg"
                },
                {
                    naam: "Balaton-fun",
                    beschrijving: 'We verblijven in het dorpje Révfülöp, aan de noordelijke kust van het Ballatonmeer. We zullen tijdens onze vakantie niet alleen lekker badderen in deze ‘Hongaarse zee’, om en rond zijn nog ontelbare leuke activiteiten. Wat dacht je van een bezoekje aan het prachtige Boedapest? Of een fietstocht om de omgeving te verkennen? Wat we ook doen, de JOETZ-animatoren maken er een geweldig verblijf van!',
                    contact: "???",
                    startDatum: new Date(2015, 7, 17, 0, 0, 0),
                    eindDatum: new Date(2015, 7, 28, 0, 0, 0),
                    doelgroepen: [16, 17, 18],
                    locatie: "Balaton Hostel bij het Balatonmeer(Hongarije)",
                    prijs: 475,
                    vervoer: "Bus",
                    korting: 0,
                    promoAfbeelding: "zomer/hongarije.jpg"
                },
                function () {
                    console.log('populated kampen')
                }
            )    */
          Kamp.create(
            {
              naam: "Krokusvakantie aan zee",
              beschrijving: 'Verveling krijgt geen kans tijdens de krokusvakantie want op maandag 3 maart 2014 trekken we er met z’n allen op uit! We logeren in het vakantiecentrum ‘De Barkentijn’ te Nieuwpoort. Vijf dagen lang spelen we de leukste spelletjes, voor klein en groot. Samen met je vakantievriendjes beleef je het ene avontuur na het andere. Plezier gegarandeerd!',
              contact: "???",
              periodes: [
                {
                  startDatum: new Date(2014, 3, 3, 0, 0, 0),
                  eindDatum: new Date(2014, 3, 7, 0, 0, 0)
                }
              ],
              vakantie: "krokusvakantie",
              doelgroepen: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              promoAfbeelding: "krokus/krokusvakantie_aan_zee.jpg",
              afbeeldingen:[],

              //Extra Info
              locatie: "De Barkentijn, Nieuwpoort",
              prijs: 165,
              korting: 0,
              formule: "Volpension",
              inbegrepen:[
                "Heenreis per autocar",
                "Verblijf in volpension, drank bij de maaltijden",
                "Dagelijks vieruurtje",
                "Begeleiding door ervarenm gebrevetteerde monitoren",
                "Volledig animatiepakket incl. spelmateriaal",
                "Ongevallenverzekering"
              ],

              //Vervoer
              vervoer: {
                "heen": "Busvervoer",
                "terug": "eigen vervoer"
              }
            },
            {
              naam: "Joetz aan zee - Lange periode",
              beschrijving: 'Heb je zin om 12 dagen lang met vrienden te spelen onder een aangenaam lentezonnetje? Wij hebben alvast een superleuk monitorenteam en een tof vakantieverblijf voor je klaarstaan! Aarzel niet en kom de paassfeer opsnuiven in De Barkentijn!',
              contact: "???",
              periodes: [
                {
                  startDatum: new Date(2014, 4, 7, 0, 0, 0),
                  eindDatum: new Date(2014, 4, 18, 0, 0, 0)
                }
              ],
              vakantie: "paasvakantie",
              doelgroepen: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              promoAfbeelding: "pasen/joetz_aan_zee_lange_periode.jpg",
              afbeeldingen:[],

              //Extra Info
              locatie: "De Barkentijn, Nieuwpoort",
              prijs: 324,
              korting: 0,
              formule: "Volpension",
              inbegrepen:[
                "Heenreis-en terugreis per autocar",
                "Verblijf in volpension, drank bij de maaltijden",
                "Dagelijks vieruurtje",
                "Begeleiding door ervarenm gebrevetteerde monitoren",
                "Volledig animatiepakket incl. spelmateriaal",
                "Ongevallenverzekering"
              ],

              //Vervoer
              vervoer: {
                "heen": "Busvervoer of eigen vervoer",
                "terug": "Busvervoer of eigen vervoer"
              }
            },
            {
              naam: "Joetz aan zee - Korte periode",
              beschrijving: 'Ooit al een paashaas op een go-cart gezien? Of paaseieren gezocht in de duinen of op het strand? Waag je kans en kom naar De Barkentijn om 5 dagen te genieten van leuke spelletjes en lekker eten. Breng gerust ook wat vrienden mee, want iedereen is van harte welkom!',
              contact: "???",
              periodes: [
                {
                  startDatum: new Date(2014, 4, 7, 0, 0, 0),
                  eindDatum: new Date(2014, 4, 11, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 4, 14, 0, 0, 0),
                  eindDatum: new Date(2014, 4, 18, 0, 0, 0)
                }
              ],
              vakantie: "paasvakantie",
              doelgroepen: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              promoAfbeelding: "pasen/joetz_aan_zee_korte_periode.jpg",
              afbeeldingen:[],

              //Extra Info
              locatie: "De Barkentijn, Nieuwpoort",
              prijs: 165,
              korting: 0,
              formule: "Volpension",
              inbegrepen:[
                "Heenreis-en terugreis per autocar",
                "Verblijf in volpension, drank bij de maaltijden",
                "Dagelijks vieruurtje",
                "Begeleiding door ervarenm gebrevetteerde monitoren",
                "Volledig animatiepakket incl. spelmateriaal",
                "Ongevallenverzekering"
              ],

              //Vervoer
              vervoer: {
                "heen": "Busvervoer of eigen vervoer",
                "terug": "Busvervoer of eigen vervoer"
              }
            },
            {
              naam: "Joetz aan zee - danskamp",
              beschrijving: 'Kan je ook niet blijven stilstaan als je muziek hoort? Muziek, maestro, please want bij JOETZ vliegen we er in! Onze professionele dansleraren leren je de leukste dansjes aan en zorgen voor de nodige afwisseling met toffe spelletjes. Danservaring is niet vereist, zolang je er maar zin in hebt!',
              contact: "???",
              periodes: [
                {
                  startDatum: new Date(2014, 4, 7, 0, 0, 0),
                  eindDatum: new Date(2014, 4, 11, 0, 0, 0)
                },
              ],
              vakantie: "paasvakantie",
              doelgroepen: [6, 7, 8, 9, 10, 11, 12, 13, 14],
              promoAfbeelding: "pasen/joetz_aan_zee_danskamp.jpg",
              afbeeldingen:[],

              //Extra Info
              locatie: "De Barkentijn, Nieuwpoort",
              prijs: 185,
              korting: 0,
              formule: "Volpension",
              inbegrepen:[
                "Heenreis-en terugreis per autocar",
                "Verblijf in volpension, drank bij de maaltijden",
                "Dagelijks vieruurtje",
                "Begeleiding door ervarenm gebrevetteerde monitoren",
                "Volledig animatiepakket incl. spelmateriaal",
                "Ongevallenverzekering"
              ],

              //Vervoer
              vervoer: {
                "heen": "Busvervoer of eigen vervoer",
                "terug": "Busvervoer of eigen vervoer"
              }
            },
            {
              naam: "Joetz aan zee - Welkom in het circus",
              beschrijving: 'Gaat jouw kind de eerste keer op kamp? Dan is deze kleutervakantie zeker iets voor hem haar. Op deze superleuke themavakantie worden onze allerkleinsten volledig ondergedompeld in een wereld van dolle pret! Onze monitoren zorgen alvast voor een leuk programma waar je kind nog lang over zal napraten. Aarzel niet langer en schrijf je kind vlug in voor zijn/haar eerste kleutervakantie!',
              contact: "???",
              periodes: [
                {
                  startDatum: new Date(2014, 4, 7, 0, 0, 0),
                  eindDatum: new Date(2014, 4, 11, 0, 0, 0)
                },
              ],
              vakantie: "paasvakantie",
              doelgroepen: [4, 5, 6],
              promoAfbeelding: "pasen/joetz_aan_zee_circus.jpg",
              afbeeldingen:[],

              //Extra Info
              locatie: "De Barkentijn, Nieuwpoort",
              prijs: 185,
              korting: 0,
              formule: "Volpension",
              inbegrepen:[
                "Heenreis-en terugreis per autocar",
                "Verblijf in volpension, drank bij de maaltijden",
                "Dagelijks vieruurtje",
                "Begeleiding door ervarenm gebrevetteerde monitoren",
                "Volledig animatiepakket incl. spelmateriaal",
                "Ongevallenverzekering"
              ],

              //Vervoer
              vervoer: {
                "heen": "Busvervoer of eigen vervoer",
                "terug": "Busvervoer of eigen vervoer"
              }
            },
            {
              naam: "Joetz aan zee - Lange periode",
              beschrijving: 'Recept voor een fantastische zomervakantie: toffe monitoren, leuke vrienden, een prachtig vakantiecentrum en véél fun en ambiance! De monitoren zorgen voor een afwisselend programma (strand- en duinspelen, daguitstappen, themaspelen, fuif …) maar willen jou er natuurlijk ook bij. Wacht niet te lang en plan je vakantie naar zee met JOETZ!',
              contact: "???",
              periodes: [
                {
                  startDatum: new Date(2014, 7, 5, 0, 0, 0),
                  eindDatum: new Date(2014, 7, 19, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 7, 19, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 2, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 8, 2, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 16, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 8, 16, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 30, 0, 0, 0)
                }
              ],
              vakantie: "zomervakantie",
              doelgroepen: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              promoAfbeelding: "zomer/joetz_aan_zee_lange_periode.jpg",
              afbeeldingen:[],

              //Extra Info
              locatie: "De Barkentijn, Nieuwpoort",
              prijs: 400,
              korting: 0,
              formule: "Volpension",
              inbegrepen:[
                "Heenreis-en terugreis per autocar",
                "Verblijf in volpension, drank bij de maaltijden",
                "Dagelijks vieruurtje",
                "Begeleiding door ervarenm gebrevetteerde monitoren",
                "Volledig animatiepakket incl. spelmateriaal",
                "Ongevallenverzekering"
              ],

              //Vervoer
              vervoer: {
                "heen": "Busvervoer of eigen vervoer",
                "terug": "Busvervoer of eigen vervoer"
              }
            },
            {
              naam: "Joetz aan zee - Korte periode",
              beschrijving: 'Zomervakantie aan zee: zes dagen vol spel en amusement maken van jouw verblijf een leuke vakantie. Een themanamiddag afgewisseld met leuke spelen en een ritje op de go-cart zorgen voor een korte maar krachtige vakantie. Wij zijn er helemaal klaar voor en kijken alvast uit naar jouw komst!',
              contact: "???",
              periodes: [
                {
                  startDatum: new Date(2014, 7, 7, 0, 0, 0),
                  eindDatum: new Date(2014, 7, 12, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 7, 14, 0, 0, 0),
                  eindDatum: new Date(2014, 7, 19, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 7, 21, 0, 0, 0),
                  eindDatum: new Date(2014, 7, 26, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 7, 28, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 2, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 8, 4, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 9, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 8, 11, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 16, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 8, 18, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 23, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 8, 25, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 30, 0, 0, 0)
                }
              ],
              vakantie: "zomervakantie",
              doelgroepen: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
              promoAfbeelding: "zomer/joetz_aan_zee_korte_periode.jpg",
              afbeeldingen:[],

              //Extra Info
              locatie: "De Barkentijn, Nieuwpoort",
              prijs: 192,
              korting: 0,
              formule: "Volpension",
              inbegrepen:[
                "Heenreis-en terugreis per autocar",
                "Verblijf in volpension, drank bij de maaltijden",
                "Dagelijks vieruurtje",
                "Begeleiding door ervarenm gebrevetteerde monitoren",
                "Volledig animatiepakket incl. spelmateriaal",
                "Ongevallenverzekering"
              ],

              //Vervoer
              vervoer: {
                "heen": "Busvervoer of eigen vervoer",
                "terug": "Busvervoer of eigen vervoer"
              }
            },
            {
              naam: "Joetz aan zee - Danskamp",
              beschrijving: 'Kan je ook niet blijven stilstaan als je muziek hoort? Muziek, maestro, please want bij JOETZ vliegen we er in! Onze professionele dansleraren leren je de leukste dansjes aan en zorgen voor de nodige afwisseling met toffe spelletjes. Danservaring is niet vereist, zolang je er maar zin in hebt!',
              contact: "???",
              periodes: [
                {
                  startDatum: new Date(2014, 7, 28, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 2, 0, 0, 0)
                },
                {
                  startDatum: new Date(2014, 8, 25, 0, 0, 0),
                  eindDatum: new Date(2014, 8, 30, 0, 0, 0)
                }
              ],
              vakantie: "zomervakantie",
              doelgroepen: [4, 5, 6],
              promoAfbeelding: "zomer/joetz_aan_zee_danskamp.jpg",
              afbeeldingen:[],

              //Extra Info
              locatie: "De Barkentijn, Nieuwpoort",
              prijs: 207,
              korting: 0,
              formule: "Volpension",
              inbegrepen:[
                "Heenreis-en terugreis per autocar",
                "Verblijf in volpension, drank bij de maaltijden",
                "Dagelijks vieruurtje",
                "Begeleiding door ervarenm gebrevetteerde monitoren",
                "Volledig animatiepakket incl. spelmateriaal",
                "Ongevallenverzekering"
              ],

              //Vervoer
              vervoer: {
                "heen": "Busvervoer of eigen vervoer",
                "terug": "Busvervoer of eigen vervoer"
              }
            },
            function(err) {
              if(err) console.log(err);
              console.log("Populated vakanties!");
            }
          )
        }
    );
}

function populateInschrijvingen() {
    Inschrijving.find({}).remove(function () {
        Gebruiker.findOne({email: "roy_9852@hotmail.com"}, function (err, gebruiker) {
            Kamp.findOne({naam: "Krk, here we come!"}, function (err, kamp) {
                var _gebruiker = gebruiker;
                var _kamp = kamp;
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
                        gebruiker: _gebruiker,
                        kamp: _kamp
                    }
                    , function () {
                        console.log('populated inschrijvingen')
                    }
                )
            })
        });
    })
}

function populateContacts() {
    Contact.find({}).remove(function () {
        Gebruiker.findOne({email: "test@test.com"}, function (err, gebruiker) {
            var _gebruiker = gebruiker;
            Contact.create({
                    sendBy: _gebruiker,
                    sendDate: new Date(2014, 11, 22),
                    onderwerp: "Aanvraag voor meer kampen",
                    bericht: "Zou het mogelijk zijn om enventueel meer kampen toe te voegen aan uw selectie van kampen"
                }
                , function () {
                    console.log('populated contact')
                });
        });
    });
}

function populateCategories() {
    Categorie.find({}).remove(function () {
        Categorie.create({
                naam: "Waterpret"
            }, {
                naam: "Avontuur"
            }, {
                naam: "Sport"
            }, {
                naam: "Exploratie"
            },
            function () {
                console.log('populated categorie')
            });
    });
}

