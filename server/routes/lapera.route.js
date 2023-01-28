const laPera = require("../controllers/lapera.controller")

module.exports = (app) =>{
    app.post("/api/laPera", laPera.createLaPera)
}