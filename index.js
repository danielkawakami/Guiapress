const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database')
const categoriesController = require('./categories/CategoriesController')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('public'))

connection
    .authenticate()
    .then(()=>{
        console.log("Conexao com o banco de dados feita")
    }).catch((error)=>{
        console.log(error)
    })

app.get("/", (req, res)=>{
    res.render("index");
})

app.listen(8080, ()=> {
    console.log("Aplicação funcionando");
})