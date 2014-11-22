<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:53
 */
namespace Groep09\AdminBundle\Document;


use Doctrine\ODM\MongoDB\Mapping\Annotations as ODM;

/** @ODM\Document(collection="gebruikers") */
class Gebruiker
{
    /** @ODM\Id */
    private $id;

    /** @ODM\String(name="email") */
    private $email;

    /** @ODM\String */
    private $naam;

    /** @ODM\String */
    private $voornaam;

    /** @ODM\String */
    private $role;

    /** @ODM\String */
    private $hashedWachtwoord;

    /** @ODM\String */
    private $provider = "local";

    /** @ODM\String */
    private $salt;

    /** @ODM\ReferenceMany(targetDocument="Inschrijving") */
    private $inschrijvingen;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getNaam()
    {
        return $this->naam;
    }

    /**
     * @param mixed $naam
     */
    public function setNaam($naam)
    {
        $this->naam = $naam;
    }

    /**
     * @return mixed
     */
    public function getVoornaam()
    {
        return $this->voornaam;
    }

    /**
     * @param mixed $voornaam
     */
    public function setVoornaam($voornaam)
    {
        $this->voornaam = $voornaam;
    }

    /**
     * @return mixed
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * @param mixed $role
     */
    public function setRole($role)
    {
        $this->role = $role;
    }

    /**
     * @return mixed
     */
    public function getHashedWachtwoord()
    {
        return $this->hashedWachtwoord;
    }

    /**
     * @param mixed $hashedWachtwoord
     */
    public function setHashedWachtwoord($hashedWachtwoord)
    {
        $this->hashedWachtwoord = $hashedWachtwoord;
    }

    /**
     * @return mixed
     */
    public function getProvider()
    {
        return $this->provider;
    }

    /**
     * @param mixed $provider
     */
    public function setProvider($provider)
    {
        $this->provider = $provider;
    }

    /**
     * @return mixed
     */
    public function getSalt()
    {
        return $this->salt;
    }

    /**
     * @param mixed $salt
     */
    public function setSalt($salt)
    {
        $this->salt = $salt;
    }

    /**
     * @return mixed
     */
    public function getInschrijvingen()
    {
        return $this->inschrijvingen;
    }


    /**
     * @param mixed $inschrijvingen
     */
    public function setInschrijvingen($inschrijvingen)
    {
        $this->inschrijvingen = $inschrijvingen;
    }

    public function __toString()
    {
        return sprintf("%s %s", $this->voornaam, $this->naam);
    }


} 