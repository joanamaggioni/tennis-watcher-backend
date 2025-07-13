const jwt = require('jsonwebtoken');
const SECRET = 'segredo-tenis';

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ erro: 'Token não fornecido' });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ erro: 'Token inválido' });
  }
}

function adminOnly(req, res, next) {
  if (req.user.perfil !== 'admin') {
    return res.status(403).json({ erro: 'Acesso negado' });
  }
  next();
}

module.exports = { authMiddleware, adminOnly };
