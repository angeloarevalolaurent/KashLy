import { transport } from "../config/nodemailer";

type EmailType = {
    name: string,
    email: string,
    token: string
}


export class AuthEmail {
    static sendConfirmationEmail = async (user: EmailType) =>{
       const email = await transport.sendMail({
            from: 'CashTackr <admin@cashtrackr.com>',
            to: user.email,
            subject: 'CashTackr - Confirmar tu cuenta',
            text: 'CashTackr- Confirma tu cuenta',
            html: `<p>Hola  ${user.name}, has creado tu cuenta en CashTackr  </p>
                    <p>Visita el siguiente enlace: </p>
                    <p>ingresa el codigo: <b>${user.token}</b> </p>
            `
        })
        console.log(email);
    }
}