const authModel = require("../models/AuthModel");
const jwt = require("jsonwebtoken");
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
      // JWT Implementation
      const config = {
        jwt: {
          secret: "LPU@summer-training-2025", //Secret Key
          expiresIn: "24h",
        },
      };
      const token = jwt.sign(
        { userId: userData.id, email: userData.email },
        config.jwt.secret,
        { expiresIn: config.jwt.expiresIn }
      );

      return resp.status(200).json({
        success: true,
        message: "Login Successful", 
        userData: userData,
        token
      });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  doLogin,
};
