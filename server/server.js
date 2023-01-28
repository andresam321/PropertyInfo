const express = require("express");

const app = express()
const PORT = 8000
const cors = require("cors")
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());

// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         cb(null, 'public')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now() + `-` + file.originalnane)
//     }
// })

// const upload = multer({storage}).array('file')

// app.post("/api/upload", (req,res)=>{
//     upload(req,res,(err)=>{
//         if(err){
//             return res.status(500).json(err)
//         }
//         return res.status(200).send(req.file)
//     })
// })

require("./config/mongoose.config");
require("./routes/lacresta.route")(app);
require("./routes/lapera.route")(app);
require("./routes/flora.route")(app);
require('dotenv').config();

app.listen(PORT,()=> console.log(`Server is up and running on ${PORT}`))