<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:54
 */

namespace Groep09\AdminBundle\Document;


class NieuwsItem
{
    private $text;

    private $image;

    private $title;

    private $createdOn;

    /** @ReferenceOne(targetDocument="Gebruiker") */
    private $createdBy;
} 