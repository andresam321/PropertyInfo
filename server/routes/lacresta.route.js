const laCresta = require("../controllers/lacresta.controller")

module.exports = (app) =>{
    app.post("/api/laCresta", laCresta.createLaCresta)
}