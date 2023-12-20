DROP TABLE IF EXISTS players;
CREATE TABLE IF NOT EXISTS players(
   id        INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT
  ,firstName VARCHAR(12) NOT NULL
  ,lastName  VARCHAR(12) NOT NULL
  ,team  VARCHAR(25) NOT NULL
  ,position VARCHAR(10) NOT NULL
  ,teamcolor1 VARCHAR(8) NOT NULL 
  ,teamcolor2 VARCHAR(8) NOT NULL 
);
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (1,'William','Nylander','Toronto Maple Leafs','Forward','blue-900','white');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (2,'Leo','Carlsson','Anaheim Ducks','Center','orange-500','black');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (3,'Moritz','Seider','Detroit Red Wings','Defensemen','red-700','white');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (4,'Jake','Oettinger','Dallas Stars','Goalie','green-700','white');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (5,'Connor','McDavid','Edmonton Oilers','Center','orange-500','blue-700');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (6,'Elias','Lindholm','Calgary Flames','Center','red-700','yellow-300');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (7,'Juuse','Saros','Nashville Predators','Goalie','yellow-300','blue-700');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (8,'Sam','Reinhart','Florida Panthers', 'Forward','red-700','blue-700');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (9,'Elias','Pettersson','Vancouver Canucks', 'Center','blue-950','green-600');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (10,'Rasmus','Dahlin','Buffalo Sabres','Defensemen','blue-700','yellow-300');


select * from players;