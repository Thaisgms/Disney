CREATE DATABASE FilmeDisney;
USE FilmeDisney;

CREATE TABLE genero (
    id INT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE filme (
    id INT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL
);

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(100),
    senha VARCHAR(45)
);

CREATE TABLE resultado (
    id INT AUTO_INCREMENT,
    usuario_id INT,
    genero_id INT,
    CONSTRAINT pkcomposta PRIMARY KEY (id , usuario_id , genero_id),
    FOREIGN KEY (usuario_id)
        REFERENCES usuario (id),
    FOREIGN KEY (genero_id)
        REFERENCES genero (id)
);


CREATE TABLE indicacao (
    dt_curtida DATETIME DEFAULT CURRENT_TIMESTAMP,
    status_curtida BOOLEAN,
    filme_id INT,
    usuario_id INT,
    PRIMARY KEY (filme_id , usuario_id),
    FOREIGN KEY (filme_id)
        REFERENCES filme (id),
    FOREIGN KEY (usuario_id)
        REFERENCES usuario (id)
);

INSERT INTO genero (id, nome) VALUES 
(1, 'Romance'),
(2, 'Aventura'),
(3, 'Fantasia'),
(4, 'Ação'),
(5, 'Animação'),
(6, 'Comédia');

INSERT INTO filme (id, nome) VALUES 
(1, 'tiana'),
(2, 'moana'),
(3, 'alice'),
(4, 'piratas'),
(5, 'carros'),
(6, 'rio');


INSERT INTO usuario VALUES 
(default, 'Thais', 'thais@email.com', '1234');

SELECT * FROM usuario;
SELECT * FROM indicacao;
SELECT * FROM resultado;

-- Total de usuários cadastrados
SELECT COUNT(*) AS total_usuarios
FROM usuario;

-- Número de indicações por filme
SELECT 
    f.nome AS nome_filme, COUNT(*) AS total_indicacoes
FROM indicacao i
	RIGHT JOIN filme f
ON i.filme_id = f.id
GROUP BY f.nome
ORDER BY f.nome DESC;

-- Usuarios que gostaram da indicacao
SELECT 
    ROUND(
        (SELECT COUNT(usuario_id) FROM indicacao) / 
        (SELECT COUNT(*) FROM usuario) * 100, 2) AS porcentagem_usuarios_que_indicaram;
        
        
-- Total de usuários por gênero
SELECT 
    g.nome AS genero,
    COUNT(DISTINCT r.usuario_id) AS total_usuarios
FROM resultado r
RIGHT JOIN genero g ON r.genero_id = g.id
GROUP BY g.nome
ORDER BY g.nome DESC;

-- filme mais indicado
SELECT 
    f.nome AS nome_filme,
    COUNT(*) AS total_indicacoes
FROM indicacao i
JOIN filme f ON i.filme_id = f.id
GROUP BY f.nome
ORDER BY total_indicacoes DESC
LIMIT 1;

