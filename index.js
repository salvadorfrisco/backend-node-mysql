const express = require('express');
const mysql = require('mysql');

// Configurando servidor Express
const app = express();
app.use(express.json()); // para usar JSON nas requisições

// Configurando conexão com o MySQL
const connection = mysql.createConnection({
  host: 'srv725.hstgr.io', // altere para o host da Hostinger
  user: 'u601978901_salvador', // altere para o usuário do MySQL
  password: 'Bidu1932', // altere para a senha do MySQL
  database: 'u601978901_psr', // altere para o nome do banco de dados
});

// Rota para GET /users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Rota para POST /users
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
    if (err) throw err;
    res.send({ message: 'Usuário criado com sucesso!' });
  });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});