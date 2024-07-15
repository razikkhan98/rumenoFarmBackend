import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET ||
        "e1569743aa91c36993cd6a679115e601b3e7423515c29bee6eec33ad5aa0138d5"
    );
    if (decoded) return next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default verifyToken;
