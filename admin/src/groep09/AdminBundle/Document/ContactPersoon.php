<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:55
 */
namespace Groep09\AdminBundle\Document;


use Doctrine\ODM\MongoDB\Mapping\Annotations as ODM;

/** @ODM\Document */
class ContactPersoon
{
    /** @ODM\Id */
    private $id;

    /** @ODM\String */
    private $bus;

    /** @ODM\String */
    private $gemeente;

    /** @ODM\String */
    private $gsm;

    /** @ODM\String */
    private $naam;

    /** @ODM\String */
    private $voornaam;

    /** @ODM\String */
    private $postcode;

    /** @ODM\String */
    private $rijksregisterNumer;

    /** @ODM\String */
    private $straat;

    /** @ODM\Boolean */
    private $nood;

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
    public function getBus()
    {
        return $this->bus;
    }

    /**
     * @param mixed $bus
     */
    public function setBus($bus)
    {
        $this->bus = $bus;
    }

    /**
     * @return mixed
     */
    public function getGemeente()
    {
        return $this->gemeente;
    }

    /**
     * @param mixed $gemeente
     */
    public function setGemeente($gemeente)
    {
        $this->gemeente = $gemeente;
    }

    /**
     * @return mixed
     */
    public function getGsm()
    {
        return $this->gsm;
    }

    /**
     * @param mixed $gsm
     */
    public function setGsm($gsm)
    {
        $this->gsm = $gsm;
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
    public function getPostcode()
    {
        return $this->postcode;
    }

    /**
     * @param mixed $postcode
     */
    public function setPostcode($postcode)
    {
        $this->postcode = $postcode;
    }

    /**
     * @return mixed
     */
    public function getRijksregisterNumer()
    {
        return $this->rijksregisterNumer;
    }

    /**
     * @param mixed $rijksregisterNumer
     */
    public function setRijksregisterNumer($rijksregisterNumer)
    {
        $this->rijksregisterNumer = $rijksregisterNumer;
    }

    /**
     * @return mixed
     */
    public function getStraat()
    {
        return $this->straat;
    }

    /**
     * @param mixed $straat
     */
    public function setStraat($straat)
    {
        $this->straat = $straat;
    }

    /**
     * @return mixed
     */
    public function getNood()
    {
        return $this->nood;
    }

    /**
     * @param mixed $nood
     */
    public function setNood($nood)
    {
        $this->nood = $nood;
    }


} 