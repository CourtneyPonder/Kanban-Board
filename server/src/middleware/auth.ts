import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // If no token is provided, return an unauthorized response
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  // Verify the token using the JWT secret key
  jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, decoded) => {
    if (err) {
      // If the token is invalid or expired, return a forbidden response
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }

    // If the token is valid, add the user data to the request object
    req.user = decoded as JwtPayload;

    // Continue to the next middleware or route handler
    next();
  });
};
