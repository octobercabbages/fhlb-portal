const config = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = {
    generateToken
}
function generateToken(userId) {
    const payload = JSON.stringify(userId);
    return jwt.sign(payload, config.jwtSecret);
}
