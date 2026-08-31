import { Activity, MessageSquareText, Clock3, Sparkles } from 'lucide-react';
import { aiAgentStats } from '../../data/aiAgent';

export default function AdminAiAnalysisPanel() {
    return (
        <div className="card-surface p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">AI Agent</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">Performance de l'IA</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-sm font-medium text-violet-700">
                    <Activity className="h-4 w-4" />
                    Live
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-violet-50 p-4">
                    <div className="flex items-center gap-2">
                        <MessageSquareText className="h-5 w-5 text-violet-600" />
                        <span className="text-sm text-slate-600">Conversations</span>
                    </div>
                    <p className="mt-3 text-2xl font-bold text-slate-900">{aiAgentStats.conversations.toLocaleString()}</p>
                </div>

                <div className="rounded-2xl bg-blue-50 p-4">
                    <div className="flex items-center gap-2">
                        <Clock3 className="h-5 w-5 text-blue-600" />
                        <span className="text-sm text-slate-600">Temps moyen</span>
                    </div>
                    <p className="mt-3 text-2xl font-bold text-slate-900">{aiAgentStats.avgResponseTime}s</p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-4">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-emerald-600" />
                        <span className="text-sm text-slate-600">Satisfaction</span>
                    </div>
                    <p className="mt-3 text-2xl font-bold text-slate-900">{aiAgentStats.satisfactionRate}%</p>
                </div>

                <div className="rounded-2xl bg-amber-50 p-4">
                    <div className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-amber-600" />
                        <span className="text-sm text-slate-600">Utilisateurs actifs</span>
                    </div>
                    <p className="mt-3 text-2xl font-bold text-slate-900">3.4K</p>
                </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-semibold text-slate-700">Sujets les plus demandés</p>
                <div className="mt-4 space-y-3">
                    {aiAgentStats.mostAskedTopics.map((topic, index) => (
                        <div key={topic.topic}>
                            <div className="flex items-center justify-between text-sm text-slate-600">
                                <span>{index + 1}. {topic.topic}</span>
                                <span className="font-medium text-slate-800">{topic.count}</span>
                            </div>
                            <div className="mt-1.5 h-2 rounded-full bg-slate-200">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-500"
                                    style={{ width: `${(topic.count / 325) * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
