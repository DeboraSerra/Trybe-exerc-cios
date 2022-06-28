const connection = require('./connection');

const createUser = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  await connection.execute(query, [firstName, lastName, email, password]);
}

const getCreatedUser = async () => {
  const query = 'SELECT * FROM user ORDER BY id DESC LIMIT 1';
  const [user] = await connection.execute(query);
  return user;
}

const getAll = async () => {
  const query = 'SELECT * FROM user';
  const [users] = await connection.execute(query);
  return users;
}

const findById = async (id) => {
  const query = 'SELECT * FROM user WHERE id = ?';
  const [user] = await connection.execute(query, [id]);
  if (user.length === 0) return null;
  return user;
}

const getUpdatedUser = async (id) => {
  const query = 'SELECT * FROM user WHERE id = ?';
  const [user] = await connection.execute(query, [id]);
  return user;
}

const updateUser = async (id, { firstName, lastName, email, password }) => {
  const getUser = await findById(id);
  if (!getUser) return null;
  const query = 'UPDATE user SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?'
  await connection.execute(query, [firstName, lastName, email, password, id]);
  const user = await getUpdatedUser(id);
  return user;
}

module.exports = {
  createUser,
  getCreatedUser,
  getAll,
  findById,
  updateUser,
}
