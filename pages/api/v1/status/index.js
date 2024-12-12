function status(request, response) {
  response.status(200).json({
    chave: "a carolina é acima da média",
    chave2: "e está aprendendo programação",
  });
}

export default status;
