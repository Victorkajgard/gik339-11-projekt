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
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (1,'William','Nylander','Toronto Maple Leafs','Forward','blue','white');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (2,'Leo','Carlsson','Anaheim Ducks','Center','orange','black');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (3,'Moritz','Seider','Detroit Red Wings','Defensemen','red','white');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (4,'Jake','Oettinger','Dallas Stars','Goalie','green','white');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (5,'Connor','McDavid','Edmonton Oilers','Center','orange','blue');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (6,'Elias','Lindholm','Calgary Flames','Center','red','yellow');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (7,'Juuse','Saros','Nashville Predators','Goalie','yellow','blue');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (8,'Sam','Reinhart','Florida Panthers', 'Forward','red','blue');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (9,'Elias','Pettersson','Vancouver Canucks', 'Center','blue','green');
INSERT INTO players(id,firstName,lastName,team, position ,teamcolor1, teamcolor2) VALUES (10,'Rasmus','Dahlin','Buffalo Sabres','Defensemen','blue','yellow');


select * from players;