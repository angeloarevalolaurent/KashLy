'use client'

import ErrorMessage from "../ui/ErrorMessage"
import { registerAccount } from "@/action/create-account-action"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"

export default function RegisterForm() {
    const [state, dispatch] = useFormState(registerAccount,{
        errors:{},
        success:''
    })
   
    console.log(state);
    useEffect(()=>{
        if (state.errors.general) {
        toast.error(state.errors.general);
        }
        if (state.success) {
            toast.success(state.success)
        }
    },[state])

  return (
    <>
        <form
            action={dispatch}
            className="mt-10 space-y-5 text-[#141B2D]"
            noValidate
        >
    
            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-lg text-[#141B2D]"
                    htmlFor="email"
                >Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#47A329] focus:bg-white focus:ring-4 focus:ring-[#47A329]/15 outline-none transition-all p-3.5 rounded-xl text-[#141B2D] placeholder:text-slate-400"
                    name="email"
                />
                 {state.errors.email?.[0] && (
                    <ErrorMessage>
                        {state.errors.email[0]}
                    </ErrorMessage>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-lg text-[#141B2D]"
                    htmlFor="name"
                >Nombre</label>
                <input
                    id="name"
                    type="name"
                    placeholder="Nombre de Registro"
                    className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#47A329] focus:bg-white focus:ring-4 focus:ring-[#47A329]/15 outline-none transition-all p-3.5 rounded-xl text-[#141B2D] placeholder:text-slate-400"
                    name="name"
                />
                 {state.errors.name?.[0] && (
                    <ErrorMessage>
                        {state.errors.name[0]}
                    </ErrorMessage>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-lg text-[#141B2D]"
                    htmlFor="password"
                >Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password de Registro"
                    className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#47A329] focus:bg-white focus:ring-4 focus:ring-[#47A329]/15 outline-none transition-all p-3.5 rounded-xl text-[#141B2D] placeholder:text-slate-400"
                    name="password"
                />
                {state.errors.password?.[0] && (
                    <ErrorMessage>
                        {state.errors.password[0]}
                    </ErrorMessage>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label
                    className="font-bold text-lg text-[#141B2D]"
                    htmlFor="password_confirmation"
                >Repetir Password</label>
                <input
                    id="password_confirmation"
                    type="password"
                    placeholder="Repite Password de Registro"
                    className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#47A329] focus:bg-white focus:ring-4 focus:ring-[#47A329]/15 outline-none transition-all p-3.5 rounded-xl text-[#141B2D] placeholder:text-slate-400"
                    name="password_confirmation"
                />
                {state.errors.password_confirmation?.[0] && (
                    <ErrorMessage>
                        {state.errors.password_confirmation[0]}
                    </ErrorMessage>
                )}
            </div>

            <input
                type="submit"
                value='Registrarme'
                className="bg-gradient-to-r from-[#47A329] to-[#38881e] hover:from-[#3d8f22] hover:to-[#2e7217] active:scale-[0.99] shadow-lg shadow-[#47A329]/25 w-full p-3.5 rounded-xl text-white font-black text-lg tracking-wide cursor-pointer transition-all block"
            />
        </form>
    </>
  )
}