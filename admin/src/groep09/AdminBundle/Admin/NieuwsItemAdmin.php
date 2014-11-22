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

class NieuwsItemAdmin extends Admin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('id')
            ->add('text')
            ->add('image')
            ->add('title')
            ->add('createdOn')
            ->add('createdBy');
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('text', 'text', array('required' => false))
            ->add('image', 'text', array('required' => false))
            ->add('title', 'text', array('required' => false))
            ->add('createdOn', 'date', array('required' => false))
            ->add('createdBy', 'sonata_type_model', array('required' => false))
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('createdOn')
            ->add('title')
        ;
    }
}