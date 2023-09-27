const Products= require("./model");

const get = async (req,res) => {
    try {
        const product = await Products.findAll({
            attributes:
            [
                'id',
                'name',
                'description',
                'stock_quantity',
                'categoryId',
                'rating',
                'price',
                'image'
            ],
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
            description,
            stock_quantity,
            categoryId,
            price,
            image,
            rating
        } =  req.body

        const newProduct = new Products({
            name,
            description,
            stock_quantity,
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