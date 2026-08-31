import { DollarSign, ShieldCheck, UserRoundCheck, Users } from 'lucide-react';
import AdminAiAnalysisPanel from '../../components/AdminAiAnalysisPanel';
import { progressData } from '../../data/progress';

const stats = [
    { label: 'Revenue mensuelle', value: `${progressData.admin.monthlyRevenue.toLocaleString()} €`, icon: DollarSign, tone: 'bg-emerald-100 text-emerald-700' },
    { label: 'Utilisateurs actifs', value: progressData.admin.activeUsers, icon: Users, tone: 'bg-blue-100 text-blue-700' },
    { label: 'Paiements', value: progressData.admin.paymentsProcessed, icon: UserRoundCheck, tone: 'bg-violet-100 text-violet-700' },
    { label: 'Tickets', value: progressData.admin.supportTickets, icon: ShieldCheck, tone: 'bg-amber-100 text-amber-700' },
];

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map(({ label, value, icon: Icon, tone }) => (
                    <div key={label} className="card-surface p-5">
                        <div className={`inline-flex rounded-xl p-2 ${tone}`}>
                            <Icon className="h-5 w-5" />
                        </div>
                        <p className="mt-5 text-3xl font-bold text-slate-900">{value}</p>
                        <p className="mt-2 text-sm text-slate-500">{label}</p>
                    </div>
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
                <div className="card-surface p-6">
                    <h2 className="text-2xl font-bold text-slate-900">Activité récente</h2>
                    <div className="mt-5 space-y-4">
                        {['Nouveau compte étudiant', 'Paiement validé', 'Session coach lancée'].map((item) => (
                            <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <span className="font-medium text-slate-800">{item}</span>
                                <span className="badge">OK</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-surface p-6">
                    <h2 className="text-2xl font-bold text-slate-900">Zone de supervision</h2>
                    <div className="mt-5 space-y-4">
                        <div className="rounded-2xl bg-emerald-50 p-4">
                            <p className="text-sm font-medium text-emerald-700">Disponibilité</p>
                            <p className="mt-2 text-xl font-bold text-slate-900">99.2%</p>
                        </div>
                        <div className="rounded-2xl bg-blue-50 p-4">
                            <p className="text-sm font-medium text-blue-700">Taux de conversion</p>
                            <p className="mt-2 text-xl font-bold text-slate-900">8.4%</p>
                        </div>
                    </div>
                </div>
            </section>

            <AdminAiAnalysisPanel />
        </div>
    );
}
