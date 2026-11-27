"use server"
import { RegisterSchema } from "@/src/schemas";



export async function registerAccount (formData: FormData){
    
    const registerData = {
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    }
    const register = RegisterSchema.safeParse(registerData)
    const errors = register.error?.issues.map(error => error.message)
    console.log(register);
    console.log(errors);
    
    
    //TODO: Registrar Usuario
   const url= `${process.env.FRONTEND_URL}/auth/create-account`

    console.log(url);
    


}