Cours Université Paris 13
=========================

Site d'hébergement de cours, initialement crée pour l'université Paris 13

## Installation 

### Prérequis

* PHP 5.4 ou supérieur
* `php5-pgsql` ou équivalent (pour le driver pdo_pgsql)

### Composer

* Téléchargez Composer : [https://getcomposer.org/download/](https://getcomposer.org/download/)
* Dans un shell exécutez la commande `php composer.phar install`

### Configuration

* Dans le fichier `web/index.php`, assurez vous que la variable `$app['env']` est initialisée
  à la valeur désirée, `dev`  pour une exécution en serveur de développemet, ou `prod` pour
  le serveur de production.
* Dans votre base de données, exécuter le fichier `db/schema.sql`.
* Si vous êtes en développement, vous pouvez évenuellement exécuter le fichier `db/values.sql` pour
  avoir une base de données de tests.
* Si vous avez besoin du front-end, clonez `https://github.com/cours-univ/cours-univ-front.git`, et 
  placez le contenu du dossier téléchargé dans `web`, en s'assurant de copier les fichiers et dossiers
  cachés (`.git/` et `.gitignore` en particulier) : `mv cours-univ-front/.[!.]* web`. Pas de panique, ce que vous venez de copier
  ne sera pas indexé par le repository du backend, celui-ci donc. Il n'a de toute façon aucune raison
  de l'etre. Suivez ensuite les instructions du README dans le dossier `web` pour configurer le front.

### Serveur de développement

Dans un shell, depuis la racine du projet, exécutez la commande `./bin/php-server`.
Cette commande sert uniquement à lancer rapidement le serveur de développement, et n'est pas
censé etre utilisé en production.

## Développement

### Architecture des fichiers

Le projet s'organise de la sorte :

* `bin/` contient des scripts utiles au développement.
* `app/` contient tout ce qui est relatif à la configuration de notre site.
* `src/` contient le code métier de l'application.
* `views/` contient toutes les pages HTML.
* `web/` est la racine de notre serveur de développement, et contient tout
  ce que le client peut voir.

### Comprendre le code

Démarrez la lecture de la documentation en commençant par le fichier `web/index.php`.
