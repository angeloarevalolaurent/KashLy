import {z} from 'zod'

export const RegisterSchema = z.object({
    email: z.string()
        .trim()
        .min(1, { message: "El correo electrónico es obligatorio" })
        .email({ message: "Ingresa un correo electrónico válido" }),

    name: z.string()
        .trim()
        .min(1, { message: "El nombre es obligatorio" })
        .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),

    password: z.string()
        .min(1, { message: "La contraseña es obligatoria" })
        .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),

    password_confirmation: z.string()
        .min(1, { message: "Debes confirmar tu contraseña" }),

}).refine((data) => data.password === data.password_confirmation, {
    message: "Las contraseñas no coinciden",
    path: ["password_confirmation"]
})


export const ErrorResponseSchema = z.object({
        error: z.string()
})
export const SuccessSchema = z.string().min(1, {message: 'Válor no válido'})