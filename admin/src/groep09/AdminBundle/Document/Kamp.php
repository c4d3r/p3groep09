<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:53
 */

namespace Groep09\AdminBundle\Document;


class Kamp
{
    private $korting;

    private $beschrijving;

    private $contact;

    private $eindDatum;

    private $startDatum;

    private $leeftijdsCatDoelgroep;

    private $locatie;

    private $naam;

    private $prijs;

    private $vervoer;

    /** @ReferenceMany(targetDocument="Inschrijving") */
    private $inschrijvingen;
} 