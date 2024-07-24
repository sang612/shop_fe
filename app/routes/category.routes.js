const controller = require("../controllers/category.controller");
const { authJwt, verifyCategory } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/categories",
    [
      authJwt.verifyToken,
      authJwt.isAdmin,
      verifyCategory.checkDuplicateCategoryName,
    ],
    controller.addCategory
  );

  app.get("/api/categories", controller.getCategories);

  app.get("/api/categories/:id", controller.getCategoryById);

  app.put(
    "/api/categories/:id",
    [authJwt.verifyToken],
    controller.updateCategory
  );

  app.delete(
    "/api/categories/:id",
    [authJwt.verifyToken],
    controller.deleteCategory
  );
};
