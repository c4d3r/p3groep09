<?php
/**
 * Created by IntelliJ IDEA.
 * User: Maxim
 * Date: 12/11/2014
 * Time: 08:52
 */

namespace Groep09\AdminBundle;


use Groep09\AdminBundle\DependencyInjection\Groep09AdminBundleExtension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class Groep09AdminBundle extends Bundle
{
    public function getContainerExtension()
    {
        return new Groep09AdminBundleExtension();
    }
} 