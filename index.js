const Sequelize = require('sequelize');
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const pagamento = require('./models/Pagamento')

const app = express();

app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Parse application/json
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json())

//Rotas
app.get('/pagamento', (req, res) => {
    res.render("pagamento");
});

app.get('/cad-pagamento', (req, res) => {
    res.render("cad-pagamento");
});

app.post('/add-pagamento', (req, res) => {
    //res.send("Nome: " + req.body.nome + "<br> Valor: " + req.body.valor + "<br>")
    pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(() => {
        res.redirect('/pagamento');
        //res.send("Pagamento cadastrado com sucesso.")
    }).catch((erro) => {
        res.send("Erro: Pagamento não foi cadastado com sucesso." + erro)
    });
});

app.listen(8080);

