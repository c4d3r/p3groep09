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

class CategorieAdmin extends Admin
{
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->addIdentifier('id')
            ->add('naam')
            ->add('beginDatum')
            ->add('eindDatum')
        ;
    }

    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->add('naam', 'text', array('required' => false))
            ->add('beginDatum', 'date', array('required' => false))
            ->add('eindDatum', 'date', array('required' => false))
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add('naam')
            ->add('beginDatum')
            ->add('eindDatum')
        ;
    }
}