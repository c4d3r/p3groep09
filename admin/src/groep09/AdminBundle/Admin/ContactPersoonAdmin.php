<?php
/**
 * Author: Maxim
 * Date: 22/11/2014
 * Time: 14:10
 */

namespace Groep09\AdminBundle\Admin;


use Sonata\AdminBundle\Admin\Admin;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;

class ContactPersoonAdmin extends Admin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('id')
            ->add('naam')
            ->add('voornaam')
            ->add('nood')
            ->add('gsm')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('naam', 'text', array('required' => true))
            ->add('voornaam', 'text', array('required' => true))
            ->add('straat', 'text', array('required' => true))
            ->add('bus', 'text', array('required' => false))
            ->add('postcode', 'text', array('required' => true))
            ->add('gemeente', 'text', array('required' => true))
            ->add('rijksregisterNummer', 'text', array('required' => false))
            ->add('gsm', 'text', array('required' => true))
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('naam')
            ->add('voornaam')
            ->add('gemeente')
            ->add('postcode')
            ->add('gsm')
        ;
    }
}