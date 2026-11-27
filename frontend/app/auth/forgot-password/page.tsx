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
    </>
  );
}