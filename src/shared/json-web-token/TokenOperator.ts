import jwt from "jsonwebtoken"
export class TokenOperator {
    private secretKey: string = process.env.JWT_SECRET_KEY || 'secret';
    private expiresIn:  number = parseInt(process.env.JWT_EXPIRES_IN || '3600');
    constructor() {
      
    }
    async generateToken(payload: Object): Promise<string> {
        return  jwt.sign(payload, this.secretKey, { expiresIn: this.expiresIn, algorithm: 'HS256' });
    }    
    async verifyToken(token: string): Promise<any> {
        try {
            return {
                status: true,
                data:jwt.verify(token, this.secretKey)
            };
        } catch (error) {
            return {
                status: false,
                data: error
            };   
        }
        
    }    
}