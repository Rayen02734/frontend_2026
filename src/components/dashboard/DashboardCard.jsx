// Card Container réutilisable avec header et contenu
export default function DashboardCard({ title, subtitle, children, action }) {
    return (
        <div className="card-surface p-6">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    {subtitle && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{subtitle}</p>}
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">{title}</h3>
                </div>
                {action && <div>{action}</div>}
            </div>
            {children}
        </div>
    );
}
