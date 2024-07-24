const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    const usernameUser = await User.findOne({
      username: req.body.username,
    }).exec();
    if (usernameUser) {
      return res.status(400).send({ message: "Tên đăng nhập đã tồn tại!" });
    }

    const emailUser = await User.findOne({ email: req.body.email }).exec();
    if (emailUser) {
      return res.status(400).send({ message: "Email đã tồn tại!" });
    }

    next();
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Role ${req.body.roles[i]} không tồn tại!`,
        });
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};

module.exports = verifySignUp;
