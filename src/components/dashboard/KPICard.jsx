// KPI Card avec valeur, label, trend
export default function KPICard({ icon: Icon, label, value, tone, trend }) {
    return (
        <div className="card-surface p-5">
            <div className={`inline-flex rounded-xl p-2 ${tone}`}>
                <Icon className="h-5 w-5" />
            </div>
            <p className="mt-5 text-3xl font-bold text-slate-900">{value}</p>
            <div className="mt-2 flex items-center justify-between">
                <p className="text-sm text-slate-500">{label}</p>
                {trend && <span className="text-xs font-semibold text-emerald-600">↑ {trend}</span>}
            </div>
        </div>
    );
}
