const customAPIError = require('../errors/custom-error.js')
const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new customAPIError('No token provided', 401)
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }

    } catch (error) {
        throw new customAPIError('Not authorized to access this route', 401)

    }
    next()
}

module.exports = authenticate