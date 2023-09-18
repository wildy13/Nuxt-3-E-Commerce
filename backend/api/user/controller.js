const User = require('./model')

const createUser = async (req, res) => {
    const {
        username
    } = req.body

    try {
        const newUser = new User({
            username
        })

        const user = await newUser.save();
        res.status(200).send(user)
    } catch (error) {
        console.log(error)
    }
}

const getUsers = async (req, res) => {
    try {
        const user = await User.findAll({
            attributes: ['username']
        })
        res.status(200).send(user);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { createUser, getUsers}