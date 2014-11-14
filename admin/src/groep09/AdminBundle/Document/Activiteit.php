<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:54
 */

namespace Groep09\AdminBundle\Document;

/** @Document */
class Activiteit
{
    private $beschrijving;

    private $contact;

    private $eindDatum;

    private $locatie;

    private $naam;

    private $startDatum;

    /** @ReferenceMany(targetDocument="Comment") */
    private $comments;

    private $createdOn;
} 