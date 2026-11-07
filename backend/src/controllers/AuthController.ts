import type { Response, Request } from "express";
import User from "../models/User";
import { hashPassword } from "../utils/auth";
import { generateToken } from "../utils/token";

export class AuthController {

    static createAccount = async (req:Request, res: Response) => {
        
        const {email, password} = req.body
        const userExists = await User.findOne({where:{email}})
        if (userExists) {
            const error = new Error('Un usario con ese email ya esta registrado')
            return res.status(401).json({error: error.message})
        }
        
        try {
           const user = new User(req.body)
            user.password = await hashPassword(password)
            user.token = generateToken()
            await user.save()
            res.status(201).json('Cuenta Creada Correctamente')
        } catch (error) {
            
        }
    
    }

}