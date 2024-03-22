import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET ?? "secret";

const requiredAuth = (req, res, next) => {
  const token = req.cookies.access_token;
console.log(req.headers)
  if (!token) {
    return res.status(401).json({ status: "error", message: "token unavailable" });
  }

  try {
    // Verify the token with the secret key
    const decoded = jwt.verify(token, secretKey);

    // Attach the decoded payload to the request object
    req.decoded = decoded;

    // Proceed to the next middleware
    next();
  } catch (error) {
    // Handle token verification errors
    return res.status(401).json({ status: "fail", message: "token is invalid" });
  }
};

export { requiredAuth };
