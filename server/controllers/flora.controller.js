const flora = require("../models/flora.model")


module.exports = {
    createFloraForm:(req,res) => {
        flora.create(req.body)
        .then((create)=>{res.status(201).json(create)})
        .catch((err)=>{console.log(err)
        res.status(400).json(err)
        })
    }
}

