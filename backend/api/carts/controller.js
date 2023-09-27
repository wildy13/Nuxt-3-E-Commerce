const Cart = require("./model");

const get = async (req,res) => {
    try {
        const cart = await Cart.findAll({
            attributes:
            [
                'id',
                'userId',
            ],
        });
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error);
    }
}


const create = async (req,res) => {
    try {
        const {
            userId,
        } =  req.body

        const newCart = new Cart({
            userId,
        })

        const cart = await newCart.save()
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = { get, create }