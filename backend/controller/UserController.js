const express = require('express')
const {User} = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserRegistration = async (req, res) => {

    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
        })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save()
        res.status(200).json({ message: "user added sucesfully", user })
    } catch (err) {
        res.status(400).json({ message: "Something went wrong", err });
        console.log("err",err)
    }
}

const login = async (req, res) => {
    try {
        const secret = process.env.secert
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(400).json({ message: "user not found" })
        }
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword) {
            res.status(400).json({ message: "password wrong" })
        }
        if (validPassword) {
            const token = jwt.sign({
                userId: user.id,
            },
                secret,
                { expiresIn: '1w' }
            )
            res.status(200).json({ message: "user Authenicated", user: user.email, token: token })
        }
    }
    catch (err) {
        res.status(400).json({ message: "Something went wrong", err });
        console.log(err)
    }
}

module.exports = {
    UserRegistration: UserRegistration,
    login:login
}