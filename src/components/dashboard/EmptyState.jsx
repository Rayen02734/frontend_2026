// Empty State dengan icon + message + CTA
import { Package } from 'lucide-react';

export default function EmptyState({ icon: Icon = Package, title, description, actionLabel, onAction }) {
    return (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-12 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-slate-100 p-4 text-slate-400">
                <Icon className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
            {actionLabel && (
                <button
                    onClick={onAction}
                    className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
}
