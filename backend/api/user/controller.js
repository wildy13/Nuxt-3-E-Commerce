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

const editUsers = async (req, res) => {
    const user = await User.findOne({
      attributes: [
        'id',
        'username',
      ],
      where: {
        id: req.params.id,
      },
    });
    user.username = req.body.username;
    const save = await user.save();
    res.status(200).send(save);
  };

  const deleteUsers = async (req, res) => {
    await Promise.all(
      req.body.map(async (payload) => {
        console.log(payload.id)
        await User.destroy({
          where: { id: payload.id },
        });
      }),
    );
    res.status(200).send(req.body);
  };

module.exports = { createUser, getUsers, editUsers,  deleteUsers}