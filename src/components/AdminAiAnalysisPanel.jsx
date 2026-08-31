import { Activity, ArrowUpRight, BrainCircuit, Clock3, MessageSquareText, Sparkles } from 'lucide-react';
import { aiAgentStats } from '../data/aiAgent';

const chartBars = [
    { label: 'Mon', value: 42 },
    { label: 'Tue', value: 58 },
    { label: 'Wed', value: 64 },
    { label: 'Thu', value: 72 },
    { label: 'Fri', value: 81 },
    { label: 'Sat', value: 89 },
    { label: 'Sun', value: 94 },
];

export default function AdminAiAnalysisPanel() {
    return (
        <section className="space-y-6">
            <div className="card-surface p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Analyse Agent IA</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Performance de l’assistant</h2>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-sm font-medium text-violet-700">
                        <BrainCircuit className="h-4 w-4" />
                        Live AI
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-2xl bg-violet-50 p-4">
                        <div className="flex items-center justify-between">
                            <MessageSquareText className="h-5 w-5 text-violet-700" />
                            <ArrowUpRight className="h-4 w-4 text-violet-600" />
                        </div>
                        <p className="mt-4 text-3xl font-bold text-slate-900">{aiAgentStats.conversations.toLocaleString()}</p>
                        <p className="mt-1 text-sm text-slate-500">Conversations</p>
                    </div>

                    <div className="rounded-2xl bg-blue-50 p-4">
                        <div className="flex items-center justify-between">
                            <Clock3 className="h-5 w-5 text-blue-700" />
                            <ArrowUpRight className="h-4 w-4 text-blue-600" />
                        </div>
                        <p className="mt-4 text-3xl font-bold text-slate-900">{aiAgentStats.avgResponseTime}s</p>
                        <p className="mt-1 text-sm text-slate-500">Temps moyen</p>
                    </div>

                    <div className="rounded-2xl bg-emerald-50 p-4">
                        <div className="flex items-center justify-between">
                            <Sparkles className="h-5 w-5 text-emerald-700" />
                            <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                        </div>
                        <p className="mt-4 text-3xl font-bold text-slate-900">{aiAgentStats.satisfactionRate}%</p>
                        <p className="mt-1 text-sm text-slate-500">Satisfaction</p>
                    </div>

                    <div className="rounded-2xl bg-amber-50 p-4">
                        <div className="flex items-center justify-between">
                            <Activity className="h-5 w-5 text-amber-700" />
                            <ArrowUpRight className="h-4 w-4 text-amber-600" />
                        </div>
                        <p className="mt-4 text-3xl font-bold text-slate-900">92%</p>
                        <p className="mt-1 text-sm text-slate-500">Disponibilité</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="card-surface p-6">
                    <h3 className="text-xl font-bold text-slate-900">Utilisation quotidienne</h3>
                    <div className="mt-6 flex h-48 items-end gap-3">
                        {chartBars.map((bar) => (
                            <div key={bar.label} className="flex flex-1 flex-col items-center gap-3">
                                <div className="w-full rounded-t-2xl bg-gradient-to-t from-blue-600 to-violet-500" style={{ height: `${bar.value}%` }} />
                                <span className="text-xs font-medium text-slate-500">{bar.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-surface p-6">
                    <h3 className="text-xl font-bold text-slate-900">Sujets les plus demandés</h3>
                    <div className="mt-6 space-y-4">
                        {aiAgentStats.mostAskedTopics.map((item, index) => (
                            <div key={item.topic}>
                                <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                                    <span>{index + 1}. {item.topic}</span>
                                    <span>{item.count}</span>
                                </div>
                                <div className="h-2.5 rounded-full bg-slate-200">
                                    <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-500" style={{ width: `${(item.count / 325) * 100}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
