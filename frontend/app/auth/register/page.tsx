import RegisterForm from "@/components/auth/RegisterForm";
import Logo from "@/components/ui/Logo";



export default function RegisterPage() {
  return (
    <>
      <div className="mb-6">
        <Logo/>
      </div>

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