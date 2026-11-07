import type { Response, Request } from "express";
import User from "../models/User";

export class AuthController {

    static createAccount = async (req:Request, res: Response) => {
        try {
           const create = new User(req.body)
            await create.save()

            res.status(201).json('Cuenta Creada Correctamente')
        } catch (error) {
            
        }
    
    }

}