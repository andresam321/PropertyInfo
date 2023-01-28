const flora = require("../controllers/flora.controller")

module.exports = (app) =>{
    app.post("/api/flora", flora.createFloraForm)
}