-- Cria o banco de dados (se ainda não existir)
CREATE DATABASE IF NOT EXISTS banco_de_dados_frases;

-- Seleciona o banco de dados
USE banco_de_dados_frases;

-- Cria uma tabela para armazenar as frases
CREATE TABLE IF NOT EXISTS frases
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    frase VARCHAR(250) NOT NULL
);
