const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.pegarTodasAsPessoas);
router.get("/pessoas/:id", PessoaController.pegarUmaPessoa);
router.post("/pessoas", PessoaController.criarPessoa);
router.put("/pessoas/:id", PessoaController.atualizarPessoa);
router.delete("/pessoas/:id", PessoaController.apagarPessoa);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.pegarUmaMatricula
);
router.post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.atualizarMatricula
);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.apagarMatricula
);
module.exports = router;
