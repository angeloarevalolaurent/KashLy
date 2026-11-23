import type { Request, Response, NextFunction } from "express";
import User from "../models/User";
import jwt from 'jsonwebtoken'

// Extensión global de Express para soportar req.user con el modelo User
declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
     const bearer = req.headers.authorization

        // 1. Validar que exista la cabecera de autorización
        if (!bearer) {
            const error = new Error('No Autorizado')
            return res.status(401).json({error: error.message})
        }

        // 2. Extraer el token separando el esquema "Bearer"
        const [ , token] = bearer.split(' ')

        if(!token){
            const error = new Error('Token no válido')
            return res.status(401).json({error: error.message})
        }

        try {
            // 3. Verificar y decodificar el JWT usando la clave secreta
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            if (typeof decoded === 'object' && decoded.id) {
                // 4. Buscar al usuario en la base de datos omitiendo datos sensibles (password)
                req.user = await User.findByPk(decoded.id, {
                    attributes: ['id', 'name', 'email']
                })

                // 5. Continuar con la ejecución de la ruta
                next()
            }

        } catch (error) {
            res.status(500).json({error: 'Token no válido'})
        }
}