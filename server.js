const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());

// Rotas agrupadas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(5000, () => console.log('Servidor rodando em http://localhost:5000'));
