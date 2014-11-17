Project 3, groep 9: Joetz
==========================

Configuratie
------------
Zorg dat deze extensies zijn geïnstalleerd:

- php_mongo
- ...

Installatie
-----------
Run volgende commando's

- composer install
- bower install ./vendor/sonata-project/admin-bundle/bower.json
- php app/console assets:install web --symlink
- php app/console assetic:dump
- php app/console cache:clear --env=prod

