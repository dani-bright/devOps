node {
stage('Composer Install') {
     sh 'composer install'
 }

 stage("PHPLint") {
     sh 'find app -name "*.php" -print0 | xargs -0 -n1 php -l'
 }

 stage("PHPUnit") {
     sh 'vendor/phpunit/phpunit/phpunit --bootstrap build/bootstrap.php --configuration phpunit-coverage.xml'
 }
}
