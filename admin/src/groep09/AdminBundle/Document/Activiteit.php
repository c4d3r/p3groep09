<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:54
 */
namespace Groep09\AdminBundle\Document;


use Doctrine\ODM\MongoDB\Mapping\Annotations as ODM;

/** @ODM\Document */
class Activiteit
{
    /** @ODM\Id */
    private $id;

    /** @ODM\String */
    private $beschrijving;

    /** @ODM\ReferenceOne(targetDocument="Gebruiker") */
    private $contact;

    /** @ODM\Date */
    private $eindDatum;

    /** @ODM\String */
    private $locatie;

    /** @ODM\String */
    private $naam;

    /** @ODM\Date */
    private $startDatum;

    /** @ODM\ReferenceMany(targetDocument="Comment") */
    private $comments;

    /** @ODM\Date */
    private $createdOn;

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
    public function getComments()
    {
        return $this->comments;
    }

    /**
     * @param mixed $comments
     */
    public function setComments($comments)
    {
        $this->comments = $comments;
    }

    /**
     * @return mixed
     */
    public function getCreatedOn()
    {
        return $this->createdOn;
    }

    /**
     * @param mixed $createdOn
     */
    public function setCreatedOn($createdOn)
    {
        $this->createdOn = $createdOn;
    }
} 