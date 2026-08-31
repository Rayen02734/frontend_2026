import { CreditCard, Download, ShieldCheck } from 'lucide-react';
import { payments } from '../../data/payments';

export default function StudentPaymentsPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Facturation</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Paiements et abonnements</h2>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
                <div className="card-surface p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Carte principale</p>
                            <h3 className="mt-2 text-2xl font-bold text-slate-900">•••• 7421</h3>
                        </div>
                        <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
                            <CreditCard className="h-5 w-5" />
                        </div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
                        <p className="text-sm text-slate-300">Solde disponible</p>
                        <p className="mt-3 text-3xl font-bold">€ 234,50</p>
                    </div>
                </div>

                <div className="card-surface p-6">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                            <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Transactions sécurisées</p>
                            <p className="text-sm text-slate-500">Paiements vérifiés et protégés.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-surface p-6">
                <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900">Historique</h3>
                    <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                        <Download className="h-4 w-4" />
                        Exporter
                    </button>
                </div>

                <div className="space-y-4">
                    {payments.map((payment) => (
                        <div key={payment.id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="font-semibold text-slate-900">{payment.method}</p>
                                <p className="text-sm text-slate-500">{payment.date}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-lg font-bold text-slate-900">€{payment.amount}</span>
                                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${payment.status === 'paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                    {payment.status === 'paid' ? 'Payé' : 'En attente'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
