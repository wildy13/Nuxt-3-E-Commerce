const Cart_items = require("./model");

const get = async (req,res) => {
    try {
        const cart_items = await Cart_items.findAll({
            attributes:
            [
                'id',
                'cartId',
                'productId',
                'quantity',
                'price'
            ],
        });
        res.status(200).send(cart_items);
    } catch (error) {
        res.status(500).send(error);
    }
}


const create = async (req,res) => {
    try {
        const {
            cartId,
            productId,
            quantity,
            price
        } =  req.body

        const newCart = new Cart_items({
            cartId,
            productId,
            quantity,
            price
        })

        const cart_items = await newCart.save()
        res.status(200).send(cart_items);
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = { get, create }