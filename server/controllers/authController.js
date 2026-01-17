const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

//Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
}

//POST /api/auth/register
exports.register = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err);
    }
}

//POST /api/auth/login
exports.login = async (req, res, next) => {
    try {

    }
    catch (err) {
        next(err);
    }
}

//GET /api/auth/profile
exports.getProfile = async (req, res, next) => {

}

//PUT /api/auth/profile
exports.updateProfile = async (req, res, next) => {

}

//POST /api/auth/change-password
exports.changePassword = async (req, res, next) => {

}