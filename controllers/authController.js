const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const { readUsers, writeUsers } = require('../models/usersModel');

const SECRET = 'segredo-tenis';

function register(req, res) {
  const { nome, email, senha, perfil = 'usuario' } = req.body;
  const users = readUsers();
  if (users.find(u => u.email === email)) return res.status(400).json({ erro: 'Email já existe' });

  const hashed = bcrypt.hashSync(senha, 8);
  const newUser = { id: Date.now(), nome, email, senha: hashed, perfil };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json({ msg: 'Usuário registrado com sucesso' });
}

function login(req, res) {
  const { email, senha } = req.body;
  const users = readUsers();
  const user = users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(senha, user.senha)) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ id: user.id, perfil: user.perfil }, SECRET, { expiresIn: '1h' });
  res.json({ token, perfil: user.perfil });
}

module.exports = { register, login };
