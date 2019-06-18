CREATE DATABASE IF NOT EXISTS mabase;
USE mabase;

 -- DROP TABLE IF EXISTS level1;
 --  DROP TABLE IF EXISTS level2;
 --   DROP TABLE IF EXISTS level3;
CREATE TABLE IF NOT EXISTS level1 (
  id_joueur int(3) NOT NULL AUTO_INCREMENT,
  nomJoueur varchar(20) DEFAULT NULL,
  score int DEFAULT NULL,
  PRIMARY KEY (id_joueur)
) ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS level2 (
  id_joueur int(3) NOT NULL AUTO_INCREMENT,
  nomJoueur varchar(20) DEFAULT NULL,
  score int DEFAULT NULL,
  PRIMARY KEY (id_joueur)
) ENGINE=InnoDB ;

CREATE TABLE IF NOT EXISTS level3 (
  id_joueur int(3) NOT NULL AUTO_INCREMENT,
  nomJoueur varchar(20) DEFAULT NULL,
  score int DEFAULT NULL,
  PRIMARY KEY (id_joueur)
) ENGINE=InnoDB ;

USE mysql;
CREATE USER user IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;
