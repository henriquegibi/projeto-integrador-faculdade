CREATE DATABASE IF NOT EXISTS banco_de_dados_frases;

USE banco_de_dados_frases;

CREATE TABLE IF NOT EXISTS frases
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    frase VARCHAR(250) NOT NULL
);
