import AuthShowcasePanel from "@/components/auth/AuthShowcasePanel";


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] lg:grid lg:grid-cols-2">
      <AuthShowcasePanel/>

      <div className="p-10 lg:py-15">
        <div className="max-w-3xl mx-auto">
            {children}   
        </div>
      </div>
    </div>
  );
}