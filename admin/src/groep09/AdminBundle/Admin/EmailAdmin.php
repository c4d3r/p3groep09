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

class EmailAdmin extends Admin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('id')
            ->add('sendBy')
            ->add('sendDate')
            ->add('text')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('sendBy', 'text', array('required' => false))
            ->add('sendDate', 'date', array('required' => false))
            ->add('text', 'text', array('required' => false))
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('sendBy')
            ->add('sendDate')
            ->add('text')
        ;
    }
}