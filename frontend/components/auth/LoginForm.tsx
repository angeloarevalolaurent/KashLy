'use client'

export default function LoginForm() {

    return (
        <>
            <form
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
                        placeholder="Email de Inicio de Sesión"
                        className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#47A329] focus:bg-white focus:ring-4 focus:ring-[#47A329]/15 outline-none transition-all p-3.5 rounded-xl text-[#141B2D] placeholder:text-slate-400"
                        name="email"
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
                        placeholder="Password de Inicio de Sesión"
                        className="w-full bg-[#F8FAFC] border border-slate-200 focus:border-[#47A329] focus:bg-white focus:ring-4 focus:ring-[#47A329]/15 outline-none transition-all p-3.5 rounded-xl text-[#141B2D] placeholder:text-slate-400"
                        name="password"
                    />
                </div>

                <input
                    type="submit"
                    value='Iniciar Sesión'
                    className="bg-gradient-to-r from-[#47A329] to-[#38881e] hover:from-[#3d8f22] hover:to-[#2e7217] active:scale-[0.99] shadow-lg shadow-[#47A329]/25 w-full p-3.5 rounded-xl text-white font-black text-lg tracking-wide cursor-pointer transition-all block"
                />
            </form>
        </>
    )
}