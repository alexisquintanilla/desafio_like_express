DROP TABLE IF EXISTS POSTS;

CREATE TABLE posts (
	id SERIAL, 
	usuario VARCHAR(25),
	url_ VARCHAR(1000),
	descripcion VARCHAR(255),
	likes INT
);