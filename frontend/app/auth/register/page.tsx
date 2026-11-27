import RegisterForm from "@/components/auth/RegisterForm";
import { Metadata } from "next";

export const metadata : Metadata = {
    title : 'Kashly -  Crear Cuenta',
    description: "Crea tu cuenta en Kashly y comienza a administrar tus presupuestos y gastos personales."
}

export default function RegisterPage() {
  return (
    <>

      <h1 className="font-black text-5xl md:text-6xl text-[#141B2D] tracking-tight">
        Crea una cuenta
      </h1>

      <p className="text-2xl md:text-3xl font-bold text-slate-600 mt-2">
        y controla tus <span className="text-[#F29D18]">finanzas</span>
      </p>

      <RegisterForm />
    </>
  );
}