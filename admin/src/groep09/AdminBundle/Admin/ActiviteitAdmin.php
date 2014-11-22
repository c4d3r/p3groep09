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

class ActiviteitAdmin extends Admin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('id')
            ->add('naam')
            ->add('locatie')
            ->add('beschrijving')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('beschrijving', 'text', array('required' => false))
            ->add('contact', 'sonata_type_model', array(), array())
            ->add('eindDatum', 'date', array('required' => false))
            ->add('locatie', 'text', array('required' => false))
            ->add('naam', 'text', array('required' => true))
            ->add('startDatum', 'date', array('required' => false))
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('naam')
            ->add('locatie')
            ->add('startDatum')
            ->add('eindDatum')
        ;
    }
}