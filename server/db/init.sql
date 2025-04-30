-- SETUP DATABASE
CREATE DATABASE tatacoa;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE TABLES
CREATE TABLE users (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
   name VARCHAR(100) NOT NULL,
   email VARCHAR(255) NOT NULL
);

CREATE TABLE roles (
   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
   role VARCHAR(50) UNIQUE NOT NULL 
);

-- INSERT DATA
INSERT INTO users (name, email) VALUES
('Darian Toledo', 'example@gmail.com'),
('Maria Toledo', 'example2@gmail.com');

INSERT INTO roles (role) VALUES ('admin'), ('user');

