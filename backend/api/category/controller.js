const Category = require("./model");

const get = async (req,res) => {
    try {
        const category = await Category.findAll({
            attributes:
            [
                'id',
                'name',
            ],
        });
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
}


const create = async (req,res) => {
    console.log(req.body)
    try {
        const {
            name,
        } =  req.body

        const newCategory = new Category({
            name,
        })

        const category = await newCategory.save()
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = { get, create }