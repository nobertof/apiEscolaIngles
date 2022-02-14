const database = require("../models");
class NivelController {
  static async pegarTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll();
      return res.status(200).json(todosOsNiveis);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async pegarUmNivel(req, res) {
    try {
      const { id } = req.params;
      const umNivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umNivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async criarNivel(req, res, next) {
    const novoNivel = req.body;
    try {
      const novoNivelCriado = await database.Niveis.create(novoNivel);
      return res.status(201).json(novoNivelCriado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async atualizarNivel(req, res, next) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await database.Niveis.update(novasInfos, { where: { id: Number(id) } });
      const nivelAtualizado = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(nivelAtualizado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  static async apagarNivel(req, res, next) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ mensagem: `id ${id} deletado com sucesso!` });
    } catch (error) {
      return res.status(200).json(error.message);
    }
  }
}

module.exports = NivelController;
