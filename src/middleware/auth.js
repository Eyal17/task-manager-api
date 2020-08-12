const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async(req, res, next) => {
    try {
        // Looking for the token in the header the client provide
        const token = req.header('Authorization').replace('Bearer ', '')
        // Validate the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // Find the user with the given token
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({error: 'Please authenticate.'})
    } 
}

module.exports = auth