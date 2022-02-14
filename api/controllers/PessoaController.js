const database = require("../models");

class PessoaController {
  static async pegarTodasAsPessoas(req, res, next) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async pegarUmaPessoa(req, res) {
    try {
      const { id } = req.params;
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criarPessoa(req, res, next) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(201).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizarPessoa(req, res, next) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async apagarPessoa(req, res, next) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ mensagem: `id ${id} deletado com sucesso!` });
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }
  static async pegarUmaMatricula(req, res) {
    try {
      const { estudanteId, matriculaId } = req.params;
      const umaMatricula = await database.Matriculas.findOne({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res.status(200).json(umaMatricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criarMatricula(req, res, next) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const novaMatriculaCriada = await database.Matriculas.create(
        novaMatricula
      );
      return res.status(201).json(novaMatriculaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizarMatricula(req, res, next) {
    const { estudanteId, matriculaId } = req.params;
    const novasInfos = req.body;
    try {
      await database.Matriculas.update(novasInfos, {
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      const matriculaAtualizada = await database.Matriculas.findOne({
        where: { id: Number(id) },
      });
      return res.status(201).json(matriculaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async apagarMatricula(req, res, next) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await database.Matriculas.destroy({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      return res
        .status(200)
        .json({ mensagem: `id ${matriculaId} deletado com sucesso!` });
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }
}

module.exports = PessoaController;
