const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const port = 3333;

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-zb36i.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE
// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)


app.listen(port);