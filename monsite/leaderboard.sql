CREATE DATABASE IF NOT EXISTS mabase;
USE mabase;

CREATE TABLE level1 (
  id_joueur int(3) NOT NULL AUTO_INCREMENT,
  nomJoueur varchar(20) DEFAULT NULL,
  score int DEFAULT NULL,
  PRIMARY KEY (id_joueur)
) ENGINE=InnoDB ;

CREATE TABLE level2 (
  id_joueur int(3) NOT NULL AUTO_INCREMENT,
  nomJoueur varchar(20) DEFAULT NULL,
  score int DEFAULT NULL,
  PRIMARY KEY (id_joueur)
) ENGINE=InnoDB ;

CREATE TABLE level3 (
  id_joueur int(3) NOT NULL AUTO_INCREMENT,
  nomJoueur varchar(20) DEFAULT NULL,
  score int DEFAULT NULL,
  PRIMARY KEY (id_joueur)
) ENGINE=InnoDB ;

USE mysql;
GRANT ALL PRIVILEGES ON *.* TO 'monuser'@'%' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;