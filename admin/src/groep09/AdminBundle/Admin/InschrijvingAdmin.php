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

class InschrijvingAdmin extends Admin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('email')
            ->add('naam')
            ->add('voornaam')
            ->add('role')
            ->add('provider')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('naam', 'text', array('required' => false))
            ->add('voornaam', 'text', array('required' => false))
            ->add('email', 'text', array('required' => false))
            ->add('role', 'text', array('required' => false))
            ->add('provider', 'text', array('required' => false))
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('naam')
            ->add('voornaam')
            ->add('email')
        ;
    }
}