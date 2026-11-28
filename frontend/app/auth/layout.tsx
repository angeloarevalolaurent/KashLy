import AuthShowcasePanel from "@/components/auth/AuthShowcasePanel";
import Logo from "@/components/ui/Logo";
import ToastNotification from "@/components/ui/ToastNotification";

export default function AuthLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <>
    
      <div className="min-h-screen bg-[#F8FAFC] lg:grid lg:grid-cols-2">
        <AuthShowcasePanel />

        <div className="p-10 lg:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 flex justify-center">
              <Logo />
            </div>
            {children}
          </div>
        </div>
      </div>
  
      <ToastNotification/>
  </>
  );
}