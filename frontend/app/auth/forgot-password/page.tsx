import Link from "next/link";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kashly - Olvidé mi Contraseña",
  description:
    "Recupera el acceso a tu cuenta de Kashly y reestablece tu contraseña de forma segura.",
};

export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="font-black text-5xl md:text-6xl text-[#141B2D] tracking-tight">
        ¿Olvidaste tu Contraseña?
      </h1>

      <p className="text-2xl md:text-3xl font-bold text-slate-600 mt-2">
        aquí puedes <span className="text-[#F29D18]">reestablecerla</span>
      </p>

      <ForgotPasswordForm />

      <nav className="mt-8 flex flex-col items-center space-y-3 border-t border-slate-200/80 pt-6 text-sm sm:flex-row sm:justify-between sm:space-y-0">
        <Link
          href="/auth/login"
          className="font-medium text-slate-600 transition-colors hover:text-[#141B2D]"
        >
          ¿Ya tienes cuenta?{" "}
          <span className="font-bold text-[#47A329] hover:text-[#38881e] hover:underline">
            Iniciar Sesión
          </span>
        </Link>

        <Link
          href="/auth/register"
          className="font-medium text-slate-600 transition-colors hover:text-[#141B2D]"
        >
          ¿No tienes cuenta?{" "}
          <span className="font-bold text-[#F29D18] hover:text-[#d9880c] hover:underline">
            Crea una
          </span>
        </Link>
      </nav>
    </>
  );
}