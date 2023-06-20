const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Aplicação em execução');
});
app.use(cors());

app.post('/random', (req, res) => {
  const { fields } = req.body;
  const randomResult = Math.floor(Math.random() * 100);

  // Aqui, você pode fazer qualquer processamento necessário com os campos enviados

  res.json({ result: randomResult });
});

app.listen(5000, () => {
  console.log('Servidor rodando em http://localhost:5000');
});
