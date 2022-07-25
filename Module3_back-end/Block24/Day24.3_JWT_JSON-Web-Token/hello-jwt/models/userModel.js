const conn = require('./connection');

const user = {
  createUser: async ({ username, password, admin }) => {
    let query = 'INSERT INTO users (username, password, admin) VALUES (?, ?, ?);';
    const [{ insertId }] = await conn.execute(query, [username, password, admin]);
    return { id: insertId, username, password };
  },
  getUser: async ({ username }) => {
    const query = 'SELECT * FROM users WHERE username = ?;';
    const [user] = await conn.execute(query, [username]);
    return user;
  }
}

module.exports = user;
