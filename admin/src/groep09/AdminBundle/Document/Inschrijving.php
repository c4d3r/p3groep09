<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:53
 */

namespace Groep09\AdminBundle\Document;


class Inschrijving
{
    private $lidMutualiteit;

    /** @EmbedOne(targetDocument="PersoonTenLaste") */
    private $persoonTenLaste;

    /** @EmbedOne(targetDocument="TweedeOuder") */
    private $tweedeOuder;

    private $contactPersoon;

    /** @EmbedOne(targetDocument="BetalendeOuder") */
    private $betalendeOuder;

    private $rijksregisterNummer;

    private $voornaam;

    private $naam;

    private $geboorteDatum;

    /** @EmbedOne(targetDocument="AdresDeelnemer") */
    private $adresDeelnemer;

    /** @EmbedMany(targetDocument="NoodPersoon") */
    private $noodPersonen = array();

    private $extraInformatie;

    private $toevoeging;

    /** @ReferenceOne(targetDocument="Gebruiker") */
    private $gebruiker;


    /** @ReferenceOne(targetDocument="Kamp") */
    private $kamp;

    /** @ReferenceOne(targetDocument="Activiteit") */
    private $activiteit;

}

/** @EmbeddedDocument */
class Address
{
    private $aansluitingsNummer;

    private $codeGerechtigde;
}

/** @EmbeddedDocument */
class TweedeOuder {
    private $aansluitingsNummer;
}

/** @EmbeddedDocument */
class BetalendeOuder {
    private $rijksregisterNummer;

    private $voornaam;

    private $naam;

    private $straat;

    private $huisnummer;

    private $bus;

    private $gemeente;

    private $postcode;

    private $telefoonNummer;
}

/** @EmbeddedDocument */
class AdresDeelnemer {
    private $straat;

    private $huisnummer;

    private $bus;

    private $gemeente;

    private $postcode;
}

/** @EmbeddedDocument */
class NoodPersoon{
    private $voornaam;

    private $naam;

    private $telefoonNummer;
}