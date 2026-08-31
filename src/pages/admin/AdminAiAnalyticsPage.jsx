import {
    Activity,
    ArrowUpRight,
    BrainCircuit,
    Clock3,
    MessageSquareText,
    Search,
    Sparkles,
} from 'lucide-react';
import { aiAgentStats } from '../../data/aiAgent';

const trendBars = [
    { label: 'Jan', value: 48 },
    { label: 'Fév', value: 58 },
    { label: 'Mar', value: 67 },
    { label: 'Avr', value: 72 },
    { label: 'Mai', value: 81 },
    { label: 'Jui', value: 88 },
    { label: 'Juil', value: 94 },
];

const recentConversations = [
    { user: 'Amina R.', topic: 'Parcours IA', messages: 14, time: '1.4s', satisfaction: 'Très positif', status: 'Résolu' },
    { user: 'Salim K.', topic: 'Paiement', messages: 9, time: '2.1s', satisfaction: 'Positif', status: 'En cours' },
    { user: 'Leila M.', topic: 'Quiz React', messages: 18, time: '1.9s', satisfaction: 'Très positif', status: 'Résolu' },
];

export default function AdminAiAnalyticsPage() {
    return (
        <div className="space-y-8">
            <section className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">AI Agent Analytics</p>
                    <h1 className="mt-2 text-3xl font-black text-slate-900">Performance de l’assistant IA</h1>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                    <Search className="h-4 w-4" />
                    Dernière période : 30 jours
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                    { label: 'Conversations', value: aiAgentStats.conversations.toLocaleString(), icon: MessageSquareText, tone: 'bg-violet-100 text-violet-700' },
                    { label: 'Utilisateurs actifs', value: '3 480', icon: BrainCircuit, tone: 'bg-blue-100 text-blue-700' },
                    { label: 'Temps moyen', value: `${aiAgentStats.avgResponseTime}s`, icon: Clock3, tone: 'bg-emerald-100 text-emerald-700' },
                    { label: 'Satisfaction', value: `${aiAgentStats.satisfactionRate}%`, icon: Sparkles, tone: 'bg-amber-100 text-amber-700' },
                ].map(({ label, value, icon: Icon, tone }) => (
                    <div key={label} className="card-surface p-5">
                        <div className={`inline-flex rounded-xl p-2 ${tone}`}>
                            <Icon className="h-5 w-5" />
                        </div>
                        <p className="mt-5 text-3xl font-bold text-slate-900">{value}</p>
                        <p className="mt-2 text-sm text-slate-500">{label}</p>
                    </div>
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="card-surface p-6">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">AI Usage Chart</p>
                            <h2 className="mt-2 text-2xl font-bold text-slate-900">Utilisation mensuelle</h2>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-sm font-medium text-violet-700">
                            <Activity className="h-4 w-4" />
                            Live
                        </div>
                    </div>

                    <div className="flex h-56 items-end gap-3">
                        {trendBars.map((bar) => (
                            <div key={bar.label} className="flex flex-1 flex-col items-center gap-3">
                                <div className="w-full rounded-t-2xl bg-gradient-to-t from-blue-600 to-violet-500" style={{ height: `${bar.value}%` }} />
                                <span className="text-xs font-medium text-slate-500">{bar.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-surface p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Top AI Topics</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">Sujets les plus demandés</h2>

                    <div className="mt-6 space-y-4">
                        {aiAgentStats.mostAskedTopics.map((topic, index) => (
                            <div key={topic.topic}>
                                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                                    <span>{index + 1}. {topic.topic}</span>
                                    <span>{topic.count}</span>
                                </div>
                                <div className="h-2.5 rounded-full bg-slate-200">
                                    <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-500" style={{ width: `${(topic.count / 325) * 100}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-3">
                <div className="card-surface p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">AI Performance</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">Résolution</h2>
                    <div className="mt-6 space-y-5">
                        {[
                            { label: 'Taux de résolution', value: '92%', tone: 'bg-emerald-100 text-emerald-700' },
                            { label: 'Réponses réussies', value: '4 820', tone: 'bg-blue-100 text-blue-700' },
                            { label: 'Éscalades', value: '76', tone: 'bg-amber-100 text-amber-700' },
                        ].map(({ label, value, tone }) => (
                            <div key={label} className="rounded-2xl bg-slate-50 p-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-500">{label}</span>
                                    <span className={`rounded-full px-2 py-1 text-xs font-semibold ${tone}`}>{value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-surface p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">AI Satisfaction</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">Feedback</h2>
                    <div className="mt-6 space-y-4">
                        {[
                            { label: 'Positif', value: '74%', tone: 'bg-emerald-100 text-emerald-700' },
                            { label: 'Neutre', value: '18%', tone: 'bg-amber-100 text-amber-700' },
                            { label: 'Négatif', value: '8%', tone: 'bg-rose-100 text-rose-700' },
                        ].map(({ label, value, tone }) => (
                            <div key={label} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                                <span className="font-medium text-slate-700">{label}</span>
                                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${tone}`}>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-surface p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Recent AI Conversations</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">Historique</h2>
                    <div className="mt-6 space-y-4">
                        {recentConversations.map((entry) => (
                            <div key={entry.user} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <div className="flex items-center justify-between gap-3">
                                    <div>
                                        <p className="font-semibold text-slate-900">{entry.user}</p>
                                        <p className="text-xs text-slate-500">{entry.topic}</p>
                                    </div>
                                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-700">{entry.status}</span>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                                    <span>{entry.messages} messages</span>
                                    <span>{entry.time}</span>
                                    <span>{entry.satisfaction}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="card-surface overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                    <h2 className="text-xl font-bold text-slate-900">Conversations récentes</h2>
                    <button type="button" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white">
                        Export
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                            <tr>
                                <th className="px-6 py-3 font-semibold">Utilisateur</th>
                                <th className="px-6 py-3 font-semibold">Sujet</th>
                                <th className="px-6 py-3 font-semibold">Date</th>
                                <th className="px-6 py-3 font-semibold">Messages</th>
                                <th className="px-6 py-3 font-semibold">Temps</th>
                                <th className="px-6 py-3 font-semibold">Satisfaction</th>
                                <th className="px-6 py-3 font-semibold">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentConversations.map((row) => (
                                <tr key={row.user} className="border-t border-slate-200">
                                    <td className="px-6 py-4 font-medium text-slate-800">{row.user}</td>
                                    <td className="px-6 py-4 text-slate-600">{row.topic}</td>
                                    <td className="px-6 py-4 text-slate-600">2026-08-30</td>
                                    <td className="px-6 py-4 text-slate-600">{row.messages}</td>
                                    <td className="px-6 py-4 text-slate-600">{row.time}</td>
                                    <td className="px-6 py-4 text-slate-600">{row.satisfaction}</td>
                                    <td className="px-6 py-4">
                                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">{row.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
