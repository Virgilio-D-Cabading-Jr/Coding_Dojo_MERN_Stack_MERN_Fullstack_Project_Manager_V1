/////////////////////////////////////////////////
//  JOKE CONTROLLER
/////////////////////////////////////////////////

// //// FIELDS //////////////////////////////////
const Joke = require("../models/joke.model");

// //// CREATE //////////////////////////////////

/**
 * Create a New Joke
 * @param {*} req 
 * @param {*} res 
 */
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(
            newlyCreatedJoke => res.json({ 
                joke: newlyCreatedJoke,
                message: "π»π»π» Success: Created a Joke π»π»π»"
            })
        )
        .catch(
            err => res.json({ 
                message: "π€¦π€¦πΌπ€¦ Create was not successful π€¦π€¦πΌπ€¦πΌ", 
                error: err 
            })
        );
    };

// //// RETRIEVE ////////////////////////////////

/***
 * Find All Jokes
 * @param (*) req
 * @param (*) res
 * @returns JSON with a List of Jokes
 */
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( allJokes => 
            res.json({
                jokes: allJokes,
                message: "πππ Success: Found All Jokes πππ"
            })
        )
        .catch( err =>
            res.json({
                message: "π€πΌπ€πΌπ€πΌ Failure: UnAble to Find All Jokes βπΌβπΌβπΌ",
                error: err
            })
        )
};

/**
 * Find One Joke by ID (on Request Params)
 * @param {*} req 
 * @param {*} res
 * @returns JSON with a Joke that matches id given in req.params
 */
module.exports.fineOneJoke = (req, res) => {
    Joke.findById(req.params.id)
        .then(
            aJoke => res.json ({
                joke: aJoke,
                message: "π¦π¦π¦ Success: Found a Joke π¦π¦π¦"
            })
        )
        .catch( err =>
            res.json({
                message: "πππ Failure: UnAble to Find a Joke πππ",
                error: err
            })
        )
};

// //// UPDATE //////////////////////////////////

/**
 * Update a Joke by ID (on Request Params)
 * @param {*} res 
 * @param {*} res 
 */
module.exports.updateJoke = (req,res) => {
    Joke.findByIdAndUpdate( req.params.id, req.body, 
        { new: true, runValidators: true })
        .then(
            updatedJoke => res.json({
                joke: updatedJoke,
                message: "πππ Success: Update a Joke πππ"
            })
        )
        .catch( err =>
            res.json({
                message: "πππ Failure: UnAble to Update a Joke πππ",
                error: err
            })
        )
};

// //// DELETE //////////////////////////////////

/**
 * Delete a Joke by ID (on Request Params)
 * @param {*} res 
 * @param {*} res 
 */
module.exports.deleteOneJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(
            result => res.json ({
                result: result,
                message: "πππ Success: Deleted a Joke  πππ"
            })
        )
        .catch( err =>
            res.json({
                message: "πππ Failure: UnAble to Delete a Joke πππ",
                error: err
            })
        )
};