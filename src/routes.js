const express = require("express");
const routes = express.Router();
const analises = require("./controllers/teste");

routes.get('/api/teste',analises.getReviewById)

module.exports = routes;