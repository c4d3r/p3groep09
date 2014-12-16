<?php
/**
 * Author: Maxim
 * Date: 22/11/2014
 * Time: 14:11
 */

namespace Groep09\AdminBundle\Admin;


use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;

class KampAdmin extends Admin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('id')
            ->add('korting')
            ->add('locatie')
            ->add('prijs')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('korting', 'number', array('required' => false))
            ->add('contact', 'text', array('required' => false))
            ->add('beschrijving', 'text', array('required' => false))
            ->add('leeftijdsCatDoelgroep', 'text', array('required' => false))
            ->add('locatie', 'text', array('required' => false))
            ->add('prijs', 'number', array('required' => false))
            ->add('vervoer', 'sonata_type_model', array('required' => false))
            ->add('periodes', 'sonata_type_model', array('required' => false))
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('naam')
            ->add('prijs')
            ->add('korting')
            ->add('locatie')
        ;
    }
}