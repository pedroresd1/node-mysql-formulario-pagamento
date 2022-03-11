const db = require('./db.js');

const Pagamento = db.conn.define('pagamentos', {
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
});

//Cria uma tabela toda vez que é executada
//Pagamento.sync({force: true})

module.exports = Pagamento;