const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.listen(3000);


app.get('/categories', (req, res) => {
    res.sendFile(`./emercado-api-main/cats/cat.json`, {root: __dirname})
});

app.get('/cats_products/:id', (req, res) => {
    let prodId = req.params.id;
    res.sendFile(`./emercado-api-main/cats_products/${prodId}.json`, {root: __dirname})
});

app.get('/products/:id', (req, res) => {
    let prodId = req.params.id;
    res.sendFile(`./emercado-api-main/products/${prodId}.json`, {root: __dirname})
});

app.get("/user_cart", (peticion, respuesta) =>{
    respuesta.sendFile(`./emercado-api-main/user_cart/25801.json`, {root: __dirname});
});

app.get('/comments/:id', (req, res) => {
    let commentId = req.params.id;
    res.sendFile(`./emercado-api-main/products_comments/${commentId}.json`, {root: __dirname})
});
