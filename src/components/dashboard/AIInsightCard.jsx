// AI Insight Card pour recommandations
import { Sparkles } from 'lucide-react';

export default function AIInsightCard({ title, insights = [], actionLabel, onAction }) {
    return (
        <div className="card-surface bg-gradient-to-br from-violet-50 to-blue-50 p-6 border border-violet-200">
            <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-violet-200 p-2 text-violet-700">
                    <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            </div>

            <div className="space-y-3">
                {insights.map((insight, idx) => (
                    <div key={idx} className="rounded-lg bg-white/80 border border-violet-100 p-3">
                        <p className="text-sm font-medium text-slate-800">{insight.title}</p>
                        <p className="mt-1 text-xs text-slate-600">{insight.description}</p>
                    </div>
                ))}
            </div>

            {actionLabel && (
                <button
                    onClick={onAction}
                    className="mt-5 w-full rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 transition"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
}
