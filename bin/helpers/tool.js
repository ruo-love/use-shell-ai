const jwt = require("jsonwebtoken");
// jwt
function generateToken(apikey) {
  try {
    const [id, secret] = apikey.split(".");
    const payload = {
      api_key: id,
    };
    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "16m",
      header: { alg: "HS256", sign_type: "SIGN" },
    });
    return token;
  } catch (error) {
    throw new Error("Invalid API key", error);
  }
}

module.exports = {
  generateToken,
};
