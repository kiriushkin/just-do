const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "JustDo API",
      description: "JustDo API documentation",
      servers: [`http://${process.env.HOST}:${process.env.PORT}`],
    },
    basepath: "/api",
  },
  apis: ["./swagger/*jsdoc.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = router;
