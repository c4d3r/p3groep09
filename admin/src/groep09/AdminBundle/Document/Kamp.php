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

    /** @ODM\String */
    private $leeftijdsCatDoelgroep;

    /** @ODM\String */
    private $locatie;

    /** @ODM\String */
    private $naam;

    /** @ODM\Float */
    private $prijs;

    /** @ODM\ReferenceMany(targetDocument="Inschrijving") */
    private $inschrijvingen;

    /** @ODM\ReferenceMany(targetDocument="Inschrijving") */
    private $periodes;

    /** @ODM\ReferenceOne(targetDocument="Vervoer") */
    private $vervoer;

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

    /**
     * @return mixed
     */
    public function getPeriodes()
    {
        return $this->periodes;
    }

    /**
     * @param mixed $periodes
     */
    public function setPeriodes($periodes)
    {
        $this->periodes = $periodes;
    }

}

/** @ODM\EmbeddedDocument */
class Periode {

    /** @ODM\Date */
    private $eindDatum;

    /** @ODM\Date */
    private $startDatum;

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

}

/** @ODM\EmbeddedDocument */
class Vervoer {

    /** @ODM\String */
    private $heen;

    /** @ODM\String */
    private $terug;

    /**
     * @return mixed
     */
    public function getHeen()
    {
        return $this->heen;
    }

    /**
     * @param mixed $heen
     */
    public function setHeen($heen)
    {
        $this->heen = $heen;
    }

    /**
     * @return mixed
     */
    public function getTerug()
    {
        return $this->terug;
    }

    /**
     * @param mixed $terug
     */
    public function setTerug($terug)
    {
        $this->terug = $terug;
    }

}