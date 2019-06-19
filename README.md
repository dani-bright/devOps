# devOps
#copier mon dossier sur linux
-scp -p -r ./[nomdudossier] [nom du compte]@[ip machine]:[chemin vers ou copier]
#exemple sur mon environnemt: scp -p -r ./TP5 dani@192.168.191.129:/home/dani/

-cd TP5
-docker-compose build
-docker-compose up

#mise en place test unitaire 
#creer un job (freestyle project) 
#le chemin vers mes fichiers php ne semble pas etre le bon (ca fonctionne dans le shell ubuntu)
#cliquer sur add build step -> execute shell et rentrer les commande suivante
-docker run --rm -v $(pwd):/app composer/composer:latest require --dev phpunit/phpunit ^6.0
-docker run -v $(pwd):/app --rm phpunit/phpunit:latest --bootstrap tests/ExampleClass.php tests/testviashell.php
