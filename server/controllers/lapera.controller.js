const laPera = require("../models/lapera.model")


module.exports = {
    createLaPera:(req,res) => {
        laPera.create(req.body)
        .then((create)=>{res.status(201).json(create)})
        .catch((err)=>{console.log(err)
        res.status(400).json(err)
        })
    }
}
