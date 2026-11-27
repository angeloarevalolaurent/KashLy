import LoginForm from "@/components/auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kashly - Iniciar Sesión",
  description:
    "Inicia sesión en Kashly para administrar tus presupuestos, controlar tus gastos y cuidar tus finanzas personales.",
};

export default function LoginPage() {
  return (
    <>
      <h1 className="font-black text-5xl md:text-6xl text-[#141B2D] tracking-tight">
        Iniciar Sesión
      </h1>

      <p className="text-2xl md:text-3xl font-bold text-slate-600 mt-2">
        y controla tus <span className="text-[#F29D18]">finanzas</span>
      </p>

      <LoginForm />
    </>
  );
}