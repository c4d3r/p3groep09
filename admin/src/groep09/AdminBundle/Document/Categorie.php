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
class Categorie
{
    /** @ODM\Id */
    private $id;

    /** @ODM\String */
    private $naam;

    /** @ODM\Date */
    private $beginDatum;

    /** @ODM\Date */
    private $eindDatum;

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
    public function getBeginDatum()
    {
        return $this->beginDatum;
    }

    /**
     * @param mixed $beginDatum
     */
    public function setBeginDatum($beginDatum)
    {
        $this->beginDatum = $beginDatum;
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


} 