<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:55
 */

namespace Groep09\AdminBundle\Document;


class Comment
{
    private $text;

    private $createdOn;

    /** @ReferenceOne(targetDocument="Gebruiker") */
    private $createdBy;
} 