const Role= require("./model");

const get = async (req,res) => {
    try {
        const role = await Role.findAll({
            attributes:
            [
                'id',
                'name',
            ],
        });
        res.status(200).send(role);
    } catch (error) {
        res.status(500).send(error);
    }
}


const create = async (req,res) => {
    try {
        const {
            name,
        } =  req.body

        const newRole = new Role({
            name,
        })

        const role = await newRole.save()
        res.status(200).send(role);
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = { get, create }