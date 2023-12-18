DROP TABLE IF EXISTS players;
CREATE TABLE IF NOT EXISTS players(
   id        INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT
  ,firstName VARCHAR(12) NOT NULL
  ,lastName  VARCHAR(12) NOT NULL
  ,team  VARCHAR(25) NOT NULL
  ,position VARCHAR(10) NOT NULL
  ,teamcolor VARCHAR(8) NOT NULL 
);
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (1,'William','Nylander','Toronto Maple Leafs','Forward','blue');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (2,'Leo','Carlsson','Anaheim Ducks','Center','orange');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (3,'Moritz','Seider','Detroit Red Wings','Defensemen','red');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (4,'Jake','Oettinger','Dallas Stars','Goalie','green');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (5,'Connor','McDavid','Edmonton Oilers','Center','orange');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (6,'Elias','Lindholm','Calgary Flames','Center','red');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (7,'Juuse','Saros','Nashville Predators','Goalie','yellow');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (8,'Sam','Reinhart','Florida Panthers', 'Forward','red');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (9,'Elias','Pettersson','Vancouver Canucks', 'Center','blue');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor) VALUES (10,'Rasmus','Dahlin','Buffalo Sabres','Defensemen','blue');


select * from players;