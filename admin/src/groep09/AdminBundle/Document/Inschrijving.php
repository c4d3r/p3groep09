<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:53
 */
namespace Groep09\AdminBundle\Document;


use Doctrine\ODM\MongoDB\Mapping\Annotations as ODM;

/** @ODM\Document */
class Inschrijving
{
    /** @ODM\Id */
    private $id;

    /** @ODM\Boolean */
    private $lidMutualiteit;

    /** @ODM\EmbedOne(targetDocument="PersoonTenLaste") */
    private $persoonTenLaste;

    /** @ODM\EmbedOne(targetDocument="TweedeOuder") */
    private $tweedeOuder;

    /** @ODM\ReferenceOne(targetDocument="ContactPersoon") */
    private $contactPersoon;

    /** @ODM\EmbedOne(targetDocument="BetalendeOuder") */
    private $betalendeOuder;

    /** @ODM\String */
    private $rijksregisterNummer;

    /** @ODM\String */
    private $voornaam;

    /** @ODM\String */
    private $naam;

    /** @ODM\Date */
    private $geboorteDatum;

    /** @ODM\EmbedOne(targetDocument="AdresDeelnemer") */
    private $adresDeelnemer;

    /** @ODM\EmbedMany(targetDocument="NoodPersoon") */
    private $noodPersonen = array();

    /** @ODM\String */
    private $extraInformatie;

    /** @ODM\String */
    private $toevoeging;

    /** ODM\ReferenceOne(targetDocument="Gebruiker") */
    private $gebruiker;

    /** @ODM\ReferenceOne(targetDocument="Kamp") */
    private $kamp;

    /** @ODM\ReferenceOne(targetDocument="InschrijvingPeriode") */
    private $periode;

    /** @ODM\ReferenceOne(targetDocument="Activiteit") */
    private $activiteit;

}

/** @ODM\EmbeddedDocument */
class Address
{
    /** @ODM\String */
    private $aansluitingsNummer;

    /** @ODM\String */
    private $codeGerechtigde;
}

/** @ODM\EmbeddedDocument */
class TweedeOuder {

    /** @ODM\String */
    private $aansluitingsNummer;
}

/** @ODM\EmbeddedDocument */
class BetalendeOuder {
    /** @ODM\String */
    private $rijksregisterNummer;

    /** @ODM\String */
    private $voornaam;

    /** @ODM\String */
    private $naam;

    /** @ODM\String */
    private $straat;

    /** @ODM\String */
    private $huisnummer;

    /** @ODM\String */
    private $bus;

    /** @ODM\String */
    private $gemeente;

    /** @ODM\String */
    private $postcode;

    /** @ODM\String */
    private $telefoonNummer;
}

/** @ODM\EmbeddedDocument */
class AdresDeelnemer {

    /** @ODM\String */
    private $straat;

    /** @ODM\String */
    private $huisnummer;

    /** @ODM\String */
    private $bus;

    /** @ODM\String */
    private $gemeente;

    /** @ODM\String */
    private $postcode;
}

/** @ODM\EmbeddedDocument */
class NoodPersoon{
    /** @ODM\String */
    private $voornaam;

    /** @ODM\String */
    private $naam;

    /** @ODM\String */
    private $telefoonNummer;
}

/** @ODM\EmbeddedDocument */
class InschrijvingPeriode {
    /** @ODM\Date */
    private $startDatum;

    /** @ODM\Date */
    private $eindDatum;
}