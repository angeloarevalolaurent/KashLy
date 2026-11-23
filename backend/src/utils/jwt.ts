import jwt from 'jsonwebtoken'

export const generateJWT = (id: string ) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '360d'
    })
    return token
}