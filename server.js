import express from "express";
import rotas from "./routes/veiculoRotas.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(rotas);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
