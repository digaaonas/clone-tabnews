function status(req, res) {
  res.status(200).json({ chave: "Aqui vem uma mensagem" });
}

export default status;
