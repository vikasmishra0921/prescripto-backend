//doctor authentication middleware

import jwt from "jsonwebtoken";

const authDoctor = async (req, res, next) => {
  try {
    const { dtoken } = req.headers;

    // Check if the token exists
    if (!dtoken) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Please log in again.",
      });
    }

    // Verify the token
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);

    // Attach doctor ID to the request body for further use
    req.body.docId = token_decode.id;

    next(); // Proceed to the next middleware/controller
  } catch (error) {
    // Handle invalid token errors
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token. Please log in again.",
      error: error.message,
    });
  }
};

export default authDoctor;
