const express = require("express");
const pessoas = require("./pessoaRoute");
const niveis = require("./niveisRoute");
const turmas = require("./turmasRoute");
module.exports = (app) => {
  app.use(express.json());
  app.use(pessoas, niveis, turmas);
};
