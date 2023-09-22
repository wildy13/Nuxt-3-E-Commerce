const category = require("../category/model");
const Products= require("./model");

const get = async (req,res) => {
    try {
        const product = await Products.findAll({
            attributes:
            [
                'id',
                'name',
                'imageDescription',
                'categoryId',
                'rating',
                'price',
                'image'
            ],
            includes: [{
                model:category,
                attributes: ['name'],
            }]
        });
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
}


const create = async (req,res) => {
    try {
        const {
            name,
            imageDescription,
            categoryId,
            price,
            image,
            rating
        } =  req.body

        const newProduct = new Products({
            name,
            imageDescription,
            categoryId,
            price,
            image,
            rating
        })

        const product = await newProduct.save()
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = { get, create }