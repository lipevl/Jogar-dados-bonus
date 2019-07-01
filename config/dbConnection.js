var mysql = require('mysql');

var mysqlConnection = function(){
    return mysql.createConnection({
        host: 'acad01.lages.ifsc.edu.br',
        port: '3306',
        user: 'aluno7',
        password: 'aluno',
        database: 'aluno7'
    });
}

module.exports.connection = mysqlConnection();

/*

create database jornal;

use jornal

CREATE TABLE noticia(
  noticia_id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(100) NOT NULL,
  data DATE NOT NULL,
  conteudo TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
  PRIMARY KEY(noticia_id)
) CHARACTER SET utf8 COLLATE utf8_general_ci;

*/
