'use client'

import { registerAccount } from "@/action/create-account-action"
import { useFormState } from "react-dom"

export default function RegisterForm() {

   
  return (
    <>
        <form
            action={registerAccount}
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