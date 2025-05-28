import { Request, Response, NextFunction } from 'express';
import { TokenOperator } from '../json-web-token/TokenOperator';

const tokenOperator = new TokenOperator();
export const AuthTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1] ;
        if (!token) {
            res.status(401).json({ message: 'No token provided' })
            return; 
        }
        const valid =  await tokenOperator.verifyToken(token) as any;
       
        if (!valid.status) {
            res.status(401).json({ message: 'Token expired' })
            return;
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}