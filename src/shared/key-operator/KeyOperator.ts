import bcrypt from 'bcrypt';
export class KeyOperator {
    constructor() {}
    async encrypt(key: string): Promise<string> {
        const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS|| '10') || 10);
        const hash = bcrypt.hashSync(key, salt);
        return hash;
    }    
    async compare(keyBody: string, keyBD: string): Promise<boolean> {
        
        return await bcrypt.compare(keyBody, keyBD);
    }    
}