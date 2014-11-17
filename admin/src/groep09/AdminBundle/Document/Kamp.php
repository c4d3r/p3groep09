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
class Kamp
{
    /** @ODM\Id */
    private $id;

    /** @ODM\Float */
    private $korting;

    /** @ODM\String */
    private $beschrijving;

    /** @ODM\String */
    private $contact;

    /** @ODM\Date */
    private $eindDatum;

    /** @ODM\Date */
    private $startDatum;

    /** @ODM\String */
    private $leeftijdsCatDoelgroep;

    /** @ODM\String */
    private $locatie;

    /** @ODM\String */
    private $naam;

    /** @ODM\Int */
    private $prijs;

    /** @ODM\String */
    private $vervoer;

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
    public function getKorting()
    {
        return $this->korting;
    }

    /**
     * @param mixed $korting
     */
    public function setKorting($korting)
    {
        $this->korting = $korting;
    }

    /**
     * @return mixed
     */
    public function getBeschrijving()
    {
        return $this->beschrijving;
    }

    /**
     * @param mixed $beschrijving
     */
    public function setBeschrijving($beschrijving)
    {
        $this->beschrijving = $beschrijving;
    }

    /**
     * @return mixed
     */
    public function getContact()
    {
        return $this->contact;
    }

    /**
     * @param mixed $contact
     */
    public function setContact($contact)
    {
        $this->contact = $contact;
    }

    /**
     * @return mixed
     */
    public function getEindDatum()
    {
        return $this->eindDatum;
    }

    /**
     * @param mixed $eindDatum
     */
    public function setEindDatum($eindDatum)
    {
        $this->eindDatum = $eindDatum;
    }

    /**
     * @return mixed
     */
    public function getStartDatum()
    {
        return $this->startDatum;
    }

    /**
     * @param mixed $startDatum
     */
    public function setStartDatum($startDatum)
    {
        $this->startDatum = $startDatum;
    }

    /**
     * @return mixed
     */
    public function getLeeftijdsCatDoelgroep()
    {
        return $this->leeftijdsCatDoelgroep;
    }

    /**
     * @param mixed $leeftijdsCatDoelgroep
     */
    public function setLeeftijdsCatDoelgroep($leeftijdsCatDoelgroep)
    {
        $this->leeftijdsCatDoelgroep = $leeftijdsCatDoelgroep;
    }

    /**
     * @return mixed
     */
    public function getLocatie()
    {
        return $this->locatie;
    }

    /**
     * @param mixed $locatie
     */
    public function setLocatie($locatie)
    {
        $this->locatie = $locatie;
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
    public function getPrijs()
    {
        return $this->prijs;
    }

    /**
     * @param mixed $prijs
     */
    public function setPrijs($prijs)
    {
        $this->prijs = $prijs;
    }

    /**
     * @return mixed
     */
    public function getVervoer()
    {
        return $this->vervoer;
    }

    /**
     * @param mixed $vervoer
     */
    public function setVervoer($vervoer)
    {
        $this->vervoer = $vervoer;
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


} 