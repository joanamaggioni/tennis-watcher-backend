const fs = require('fs');
const USERS_FILE = './db.json';

function readUsers() {
  const data = JSON.parse(fs.readFileSync(USERS_FILE, 'utf-8'));
  return data.users || [];
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify({ users }, null, 2));
}

function getAll() {
  return readUsers();
}

function create(user) {
  const users = readUsers();
  const newUser = {
    id: Date.now(),
    ...user,
    senha: '', 
  };
  users.push(newUser);
  writeUsers(users);
  return newUser;
}

module.exports = {
  readUsers,
  writeUsers,
  getAll,
  create,
};
