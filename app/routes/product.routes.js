const controller = require("../controllers/product.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/products",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.addProduct
  );

  app.get("/api/products", controller.getProducts);

  app.get("/api/products/:id", controller.getProductById);

  app.put("/api/products/:id", [authJwt.verifyToken], controller.updateProduct);

  app.delete(
    "/api/products/:id",
    [authJwt.verifyToken],
    controller.deleteProduct
  );

  app.post(
    "/api/products/import",
    [authJwt.verifyToken],
    controller.importProducts
  );

  app.get("/api/products/category/:category", controller.getProductsByCategory);
};
