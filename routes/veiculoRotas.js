import express from "express";
import {
  listarVeiculos,
  buscarVeiculo,
  cadastrarVeiculo,
  atualizarVeiculo,
  removerVeiculo,
} from "../controllers/controllersFerrari.js";

const rotas = express.Router();

rotas.get("/veiculos", listarVeiculos);
rotas.get("/veiculos/:id", buscarVeiculo);
rotas.post("/veiculos", cadastrarVeiculo);
rotas.put("/veiculos/:id", atualizarVeiculo);
rotas.delete("/veiculos/:id", removerVeiculo);

export default rotas;
