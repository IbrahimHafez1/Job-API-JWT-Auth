const express = require('express')
const router = express.Router();
const authenticate = require('../middleware/auth.js')

const { login, dashboard } = require('../controllers/main.js')

router.route('/dashboard').get(authenticate, dashboard)
router.route('/login').post(login)

module.exports = router