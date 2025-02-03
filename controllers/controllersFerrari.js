import veiculos from "../veiculos/veiculos.js";

const listarVeiculos = (req, res) => {
  res.json({ error: false, data: veiculos });
};

const buscarVeiculo = (req, res) => {
  const veiculo = veiculos.find((v) => v.id == req.params.id);
  if (veiculo) {
    res.json({ error: false, data: veiculo });
  } else {
    res.status(404).json({ error: true, message: "Veículo não encontrado." });
  }
};

const cadastrarVeiculo = (req, res) => {
  const { id, modelo, fabricante, ano, avaliacao, categoria } = req.body;

  if (!id || !modelo || !fabricante || !ano || !categoria) {
    return res.status(400).json({ error: true, message: "Preencha todos os campos obrigatórios." });
  }

  if (veiculos.some((v) => v.id === id)) {
    return res.status(400).json({ error: true, message: "ID já cadastrado." });
  }

  veiculos.push({ id, modelo, fabricante, ano, avaliacao: avaliacao || 0, categoria });

  res.json({ error: false, message: "Veículo cadastrado com sucesso." });
};

const atualizarVeiculo = (req, res) => {
  const { id } = req.params;
  const index = veiculos.findIndex((v) => v.id == id);

  if (index === -1) {
    return res.status(404).json({ error: true, message: "Veículo não encontrado." });
  }

  veiculos[index] = { ...veiculos[index], ...req.body };

  res.json({ error: false, message: "Veículo atualizado." });
};

const removerVeiculo = (req, res) => {
  const id = Number(req.params.id);
  const tamanhoAntes = veiculos.length;

  veiculos = veiculos.filter((v) => v.id !== id);

  if (veiculos.length === tamanhoAntes) {
    return res.status(404).json({ error: true, message: "Veículo não encontrado." });
  }

  res.json({ error: false, message: "Veículo removido." });
};

export { listarVeiculos, buscarVeiculo, cadastrarVeiculo, atualizarVeiculo, removerVeiculo };
