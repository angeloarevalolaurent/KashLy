"use server"
import { ErrorResponseSchema, RegisterSchema, SuccessSchema } from "@/src/schemas";

type prevStateProps = {
    errors: {
            email?: string[]
            name?: string[]
            password?: string[]
            password_confirmation?: string[]
            general?:string
        }
    success: string
}

export async function registerAccount (prevState:prevStateProps, formData: FormData): Promise<prevStateProps>{
    
    const registerData = {
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    }

    // Validar los datos con Zod
    const register = RegisterSchema.safeParse(registerData)
   
    if (!register.success) {
         
        return{
            errors: register.error.flatten().fieldErrors,
            success: prevState.success
        }
    }


    //TODO: Registrar Usuario
   const url= `${process.env.API_URL}/auth/create-account`

    const req  = await fetch(url, ({
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: register.data?.name,
            email: register.data?.email,
            password: register.data?.password
        })
    }))
    
    const json = await req.json()
    console.log(json);
    
    if (!req.ok) {
      const parsedError = ErrorResponseSchema.safeParse(json);
      return {
        errors: {
          general: parsedError.success
            ? parsedError.data.error
            : "No se pudo completar el registro. Intenta nuevamente.",
        },
        success: "",
      };
    }

    const success = SuccessSchema.parse(json)
    return{
        errors:{},
        success
    }
}