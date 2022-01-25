/////////////////////////////////////////////////
//  PRODUCT CONTROLLER
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const Product = require("../models/product.model");

// //// CREATE //////////////////////////////////

/**
 * Create Product
 * @param {*} req 
 * @param {*} res 
 */
module.exports.create = (req, res) => {
    Product.createProduct(req.body)
        .then(
            newlyCreatedProduct => res.json({ 
                product: newlyCreatedProduct,
                message: "🍻🍻🍻 Success: Created a Product 🍻🍻🍻"
            })
        )
        .catch(
            err => res.json({ 
                message: "🤦🤦🏼🤦 Create was not successful 🤦🤦🏼🤦🏼", 
                error: err 
            })
        );
    };

// //// RETRIEVE ////////////////////////////////

/***
 * Find All Products
 * @param (*) req
 * @param (*) res
 * @returns JSON with a List of Products
 */
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then( allProducts => 
            res.json({
                products: allProducts,
                message: "🌮🌮🌮 Success: Found All Products 🌮🌮🌮"
            })
        )
        .catch( err =>
            res.json({
                message: "🤚🏼🤚🏼🤚🏼 Failure: UnAble to Find All Jokes ✋🏼✋🏼✋🏼",
                error: err
            })
        )
};

/**
 * Find One Product by ID (on Request Params)
 * @param {*} req 
 * @param {*} res
 * @returns JSON with a Product that matches id given in req.params
 */
module.exports.fineOneProduct = (req, res) => {
    Joke.findById(req.params.id)
        .then(
            oneProduct => res.json ({
                product: oneProduct,
                message: "🦄🦄🦄 Success: Found a Product 🦄🦄🦄"
            })
        )
        .catch( err =>
            res.json({
                message: "🛑🛑🛑 Failure: UnAble to Find a Product 🛑🛑🛑",
                error: err
            })
        )
};

// //// UPDATE //////////////////////////////////

/**
 * Update a Product by ID (on Request Params)
 * @param {*} res 
 * @param {*} res 
 */
module.exports.updateProduct = (req,res) => {
    Joke.findByIdAndUpdate( req.params.id, req.body, 
        { new: true, runValidators: true })
        .then(
            updatedProduct => res.json({
                product: updatedProduct,
                message: "🍔🍔🍔 Success: Update a Product 🍔🍔🍔"
            })
        )
        .catch( err =>
            res.json({
                message: "🛑🛑🛑 Failure: UnAble to Update a Product 🛑🛑🛑",
                error: err
            })
        )
};

// //// DELETE //////////////////////////////////

/**
 * Delete a Product by ID (on Request Params)
 * @param {*} res 
 * @param {*} res 
 */
module.exports.deleteProduct = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(
            result => res.json ({
                result: result,
                message: "🍕🍕🍕 Success: Deleted a Product  🍕🍕🍕"
            })
        )
        .catch( err =>
            res.json({
                message: "🛑🛑🛑 Failure: UnAble to Delete a Product 🛑🛑🛑",
                error: err
            })
        )
};