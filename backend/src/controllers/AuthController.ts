import type { Response, Request } from "express";
import User from "../models/User";

export class AuthController {

    static createAccount = async (req:Request, res: Response) => {
        
        const {email} = req.body
        const userExists = await User.findOne({where:{email}})
        if (userExists) {
            const error = new Error('Un usario con ese email ya esta registrado')
            return res.status(401).json({error: error.message})
        }
        
        try {
           const create = new User(req.body)
            await create.save()

            res.status(201).json('Cuenta Creada Correctamente')
        } catch (error) {
            
        }
    
    }

}