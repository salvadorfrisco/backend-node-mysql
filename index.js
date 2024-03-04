require("dotenv").config();

const express = require('express');
const db = require('./db');
const app = express();
const port = process.env.PORT;

app.use(express.json());
 
app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.get('/users', async (req, res) => {
  const results = await db.selectCustomers();
  res.json(results);
})

app.get('/users/:id', async (req, res) => {
  const results = await db.selectCustomer(req.params.id);
  res.json(results);
}) 

app.get('/users/:id', async (req, res) => {
  const results = await db.selectCustomer(req.params.id);
  res.json(results);
})

app.post('/users', async (req, res) => {
  await db.insertCustomer(req.body);
  res.sendStatus(201);
});

app.patch('/users/:id', async (req, res) => {
  await db.updateCustomer(req.params.id, req.body);
  res.sendStatus(200);
})

app.delete('/users/:id', async (req, res) => {
    await db.deleteCustomer(req.params.id);
    res.sendStatus(204);
})

//inicia o servidor
app.listen(port);
console.log('API funcionando!');