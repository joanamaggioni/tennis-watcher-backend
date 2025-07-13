const express = require('express');
const router = express.Router();
const { listUsers, deleteUser, updateUser } = require('../controllers/userController');
const { authMiddleware, adminOnly } = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, adminOnly, listUsers);
router.delete('/:id', authMiddleware, adminOnly, deleteUser);
router.put('/:id', authMiddleware, adminOnly, updateUser);

module.exports = router;
