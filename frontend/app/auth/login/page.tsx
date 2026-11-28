import Link from "next/link";
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

      <nav className="mt-8 flex flex-col items-center space-y-3 border-t border-slate-200/80 pt-6 text-sm sm:flex-row sm:justify-between sm:space-y-0">
        <Link
          href="/auth/register"
          className="font-medium text-slate-600 transition-colors hover:text-[#141B2D]"
        >
          ¿No tienes cuenta?{" "}
          <span className="font-bold text-[#47A329] hover:text-[#38881e] hover:underline">
            Crea una
          </span>
        </Link>

        <Link
          href="/auth/forgot-password"
          className="font-medium text-slate-600 transition-colors hover:text-[#141B2D]"
        >
          ¿Olvidaste tu contraseña?{" "}
          <span className="font-bold text-[#F29D18] hover:text-[#d9880c] hover:underline">
            Reestablecer
          </span>
        </Link>
      </nav>
    </>
  );
}