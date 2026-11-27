import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function ErrorMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      role="alert"
      aria-live="polite"
      className="flex items-start gap-2.5 rounded-xl border border-rose-500/30 bg-rose-50 px-3.5 py-3 text-xs font-semibold tracking-wide text-rose-700 shadow-sm transition-all"
    >
      <ExclamationCircleIcon
        className="mt-0.5 h-5 w-5 shrink-0 text-rose-600"
        aria-hidden="true"
      />
      <span className="leading-relaxed">{children}</span>
    </div>
  );
}