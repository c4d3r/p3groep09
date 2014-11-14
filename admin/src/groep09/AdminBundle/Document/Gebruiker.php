<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:53
 */

namespace Groep09\AdminBundle\Document;


class Gebruiker
{
    private $email;

    private $naam;

    private $voornaam;

    private $role;

    private $hashedWachtwoord;

    private $provider;

    private $salt;

    /** @ReferenceOMany(targetDocument="Inschrijving") */
    private $inschrijvingen;
} 