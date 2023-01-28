const laCresta = require("../models/lacresta.model")


module.exports = {
    createLaCresta:(req,res) => {
        laCresta.create(req.body)
        .then((create)=>{res.status(201).json(create)})
        .catch((err)=>{console.log(err)
        res.status(400).json(err)
        })
    }
}
