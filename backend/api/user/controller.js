const User = require("./model");

const createUser = async (req, res) => {
  console.log(req.body);
  const { username, password, roleId } = req.body;

  try {
    const newUser = new User({
      username,
      password,
      roleId,
    });

    const user = await newUser.save();
    res.status(200).send(user);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).send(error.errors[0].message);
    } else {
      res.status(500).send(error);
    }
  }
};

const getMe = async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "username"],
      where: { username: req.user.username },
    });
    res.status(200).send({ user });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: ["username"],
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(401).send(new Error(error.message));
  }
};

const editUsers = async (req, res) => {
  const user = await User.findOne({
    attributes: ["id", "username"],
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
      await User.destroy({
        where: { id: payload.id },
      });
    })
  );
  res.status(200).send(req.body);
};

module.exports = { createUser, getUsers, getMe, editUsers, deleteUsers };
