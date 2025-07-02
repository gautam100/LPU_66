const authModel = require("../models/AuthModel");

const doLogin = async (req, resp) => {
  try {
    let body = req.body;
    let userData = await authModel.login(body.email, body.password);
    if (!userData) {
      return resp.status(401).json({
        success: false,
        message: "User doesn't exist in database",
      });
    } else {
      return resp.status(200).json({
        success: true,
        message: userData,
      });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  doLogin,
};
