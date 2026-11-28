import {SparklesIcon,ArrowTrendingUpIcon,TagIcon,ShieldCheckIcon,} from "@heroicons/react/24/solid";
import { WalletIcon } from "@heroicons/react/24/outline";

export default function AuthShowcasePanel() {
  return (
    <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#141B2D] via-[#1C2842] to-[#113124] px-8 py-10 text-white lg:flex lg:min-h-screen lg:px-12 lg:py-16">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#47A329]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -left-20 h-72 w-72 rounded-full bg-[#F29D18]/20 blur-3xl" />

      {/* Encabezado del panel visual */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-emerald-200 backdrop-blur-sm">
          <SparklesIcon className="h-4 w-4 text-[#86EF67]" />
          Control financiero inteligente
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300">
          <WalletIcon className="h-4 w-4 text-[#F29D18]" />
          Presupuestos &amp; Gastos
        </span>
      </div>

      <div className="relative z-10 my-10 space-y-6 lg:my-auto">
        <span className="inline-flex items-center rounded-full border border-[#47A329]/40 bg-[#47A329]/15 px-3.5 py-1 text-xs font-bold tracking-wider text-[#8CE06A] uppercase">
          Finanzas personales sin fricción
        </span>

        <h2 className="text-3xl leading-tight font-black tracking-tight sm:text-4xl">
          Haz crecer tu dinero con{" "}
          <span className="text-[#F29D18]">claridad</span> y{" "}
          <span className="text-[#68CC45]">control</span>
        </h2>

        <p className="max-w-md text-base leading-relaxed text-slate-300">
          Organiza tus presupuestos mensuales, registra cada gasto al instante y
          mantén tus metas financieras siempre a la vista.
        </p>

        {/* Tarjeta flotante de resumen financiero */}
        <div className="max-w-2xl space-y-4 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3.5">
            <div>
              <p className="text-xs font-medium text-emerald-200/90">
                Presupuesto mensual activo
              </p>
              <p className="text-2xl font-extrabold tracking-tight text-white">
                S/ 3,200.00
              </p>
            </div>
            <div className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-[#47A329]/40 bg-[#47A329]/25 px-3 py-1.5 text-xs font-bold text-[#86EF67]">
              <ArrowTrendingUpIcon className="h-4 w-4 text-[#86EF67]" />
              +18.4% ahorro
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between gap-2 text-xs">
              <span className="font-medium text-slate-200">
                Gastos registrados este mes
              </span>
              <span className="font-semibold text-[#FBBF24]">
                S/ 1,480.00 / S/ 3,200.00
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-[46%] rounded-full bg-gradient-to-r from-[#47A329] to-[#F29D18]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="rounded-xl border border-white/10 bg-[#141B2D]/60 p-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <TagIcon className="h-4 w-4 shrink-0 text-[#68CC45]" />
                Categorías claras
              </div>
              <p className="mt-1 text-[11px] leading-snug text-slate-300">
                Visualiza en qué se va cada sol con rapidez.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#141B2D]/60 p-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                <ShieldCheckIcon className="h-4 w-4 shrink-0 text-[#F29D18]" />
                Metas protegidas
              </div>
              <p className="mt-1 text-[11px] leading-snug text-slate-300">
                Evita sobregiros antes de que ocurran.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pie del panel visual */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-300">
        <span>Simple, visual y hecho para tu día a día</span>
        <span className="font-semibold text-[#F29D18]">KashLy App</span>
      </div>
    </aside>
  );
}