import { LockKeyhole, ShieldCheck, TriangleAlert } from 'lucide-react';

export default function AdminSecurityPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Sécurité</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Protection de la plateforme</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
                <div className="card-surface p-5">
                    <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700 w-fit">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">Sécurité active</h3>
                    <p className="mt-2 text-sm text-slate-600">Vérification régulière des intégrations et des accès.</p>
                </div>

                <div className="card-surface p-5">
                    <div className="rounded-xl bg-blue-100 p-2 text-blue-700 w-fit">
                        <LockKeyhole className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">Authentification</h3>
                    <p className="mt-2 text-sm text-slate-600">Protection des zones sensibles et des API internes.</p>
                </div>

                <div className="card-surface p-5">
                    <div className="rounded-xl bg-amber-100 p-2 text-amber-700 w-fit">
                        <TriangleAlert className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">Alertes</h3>
                    <p className="mt-2 text-sm text-slate-600">Surveillance proactive des anomalies de paiement et d’usage.</p>
                </div>
            </div>
        </div>
    );
}
