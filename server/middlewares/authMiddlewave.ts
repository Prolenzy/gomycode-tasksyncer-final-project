import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUser } from "../models/user.js";

interface DecodedToken {
  userId: string;
}

interface UserRequest extends Request {
  user?: {
    email: string;
    isAdmin: boolean;
    userId: string;
  };
}

const protectRoute = async (req: UserRequest, res: Response, next: NextFunction) => {
  try {
    let token = req.cookies?.token;

    if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as DecodedToken | void;

      if (!decodedToken) {
        return res.status(401).json({ status: false, message: "Token verification failed" });
      }

      const resp = await User.findById(decodedToken.userId).select("isAdmin email");

      if (!resp) {
        return res.status(401).json({ status: false, message: "User not found" });
      }

      req.user = {
        email: resp.email,
        isAdmin: resp.isAdmin,
        userId: decodedToken.userId,
      };

      next();
    } else {
      return res
        .status(401)
        .json({ status: false, message: "Not authorized. Try login again." });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ status: false, message: "Not authorized. Try login again." });
  }
};

const isAdminRoute = (req: UserRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      status: false,
      message: "Not authorized as admin. Try login as admin.",
    });
  }
};

export { isAdminRoute, protectRoute };
