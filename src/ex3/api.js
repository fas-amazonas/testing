const express = require('express');
const { Projeto } = require('./app/models');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Todos os projetos
app.get('/projetos', async (req, res) => {
  try {
    const results = await Projeto.findAll();

    res.json(results);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Criar projeto
app.post('/projetos', async (req, res) => {
  try {
    await Projeto.create({
      titulo: req.body.titulo,
      objetivo: req.body.objetivo,
      localidade_id: req.body.localidade_id,
      doador_id: req.body.doador_id,
      colaborador_id: req.body.colaborador_id,
      status: req.body.status,
    });

    res.json({ message: 'Cadastro de projeto realizado com sucesso.' });
  } catch (error) {
    res.json({ error: `Houve o seguinte erro: ${error.message}` });
  }
});

// Remover projeto
app.delete('/projetos/:id', async (req, res) => {
  try {
    await Projeto.destroy({
      where: {
        id: req.params['id'],
      },
    });
    res.json({ message: 'Remoção de projeto realizada com sucesso.' });
  } catch (error) {
    res.json({ error: `Houve o seguinte erro: ${error.message}` });
  }
});

app.listen(3000, () => console.log('API em execução.'));
