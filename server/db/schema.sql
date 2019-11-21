CREATE DATABASE IF NOT EXISTS cowList;

USE cowList;

create TABLE IF NOT EXISTS cows (
  cowId INT AUTO_INCREMENT NOT NULL,
  cowName VARCHAR(20) NOT NULL,
  cowDescription VARCHAR(180) NOT NULL,
  PRIMARY KEY (cowId),
  UNIQUE (cowName)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/