// Section Header avec titre et action button
export default function SectionHeader({ title, subtitle, actionLabel, onAction, icon: Icon }) {
    return (
        <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                {Icon && <Icon className="h-6 w-6 text-slate-400" />}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{subtitle}</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">{title}</h2>
                </div>
            </div>
            {actionLabel && (
                <button
                    onClick={onAction}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
}
