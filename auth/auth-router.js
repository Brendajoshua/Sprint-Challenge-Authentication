const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../auth/auth-model');
const generateToken = require('./generateToken');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
  .then(saved => {
    res.status(201).json(saved);
  })
  .catch(err => {
    res.status(500).json({ message: 'failed to create user', err });
  });
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
