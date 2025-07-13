const { readUsers, writeUsers } = require('../models/usersModel');
const bcrypt = require('bcryptjs');

function listUsers(req, res) {
  res.json(readUsers());
}

function deleteUser(req, res) {
  const { id } = req.params;
  const users = readUsers();
  const newUsers = users.filter(u => u.id !== parseInt(id));
  writeUsers(newUsers);
  res.json({ msg: 'Usuário deletado' });
}

function updateUser(req, res) {
  const { id } = req.params;
  const { nome, senha, perfil } = req.body;
  const users = readUsers();
  const idx = users.findIndex(u => u.id === parseInt(id));
  if (idx === -1) return res.status(404).json({ erro: 'Usuário não encontrado' });

  if (nome) users[idx].nome = nome;
  if (senha) users[idx].senha = bcrypt.hashSync(senha, 8);
  if (perfil) users[idx].perfil = perfil;

  writeUsers(users);
  res.json({ msg: 'Usuário atualizado' });
}

module.exports = { listUsers, deleteUser, updateUser };
