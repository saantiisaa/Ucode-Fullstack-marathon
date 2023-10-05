CREATE DATABASE ucode_web;

CREATE USER 'akulak'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web.* TO 'akulak'@'localhost';
