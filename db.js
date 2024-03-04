const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectCustomers() {
  const res = await client.query('SELECT * FROM users');
  return res[0];
}

async function selectCustomer(id) {
    const res = await client.query('SELECT * FROM users WHERE ID=?', [id]);
    return res[0];
}

async function insertCustomer(customer) {
  const sql = 'INSERT INTO users(name,email) VALUES (?,?);';
  const values = [customer.name, customer.email];
  await client.query(sql, values);
} 

async function updateCustomer(id, customer) {
    const sql = 'UPDATE users SET name=?, email=? WHERE id=?';
    const values = [customer.name, customer.email, id];
    await client.query(sql, values);
}

async function deleteCustomer(id) {
    return await client.query('DELETE FROM users where id=?;', [id]);
}

module.exports = { selectCustomers, 
                   selectCustomer, 
                   insertCustomer, 
                   updateCustomer, 
                   deleteCustomer }
