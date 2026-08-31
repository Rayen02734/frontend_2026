// Status Badge pour afficher les statuts
const statusStyles = {
    active: 'bg-emerald-100 text-emerald-700',
    pending: 'bg-amber-100 text-amber-700',
    verified: 'bg-blue-100 text-blue-700',
    rejected: 'bg-rose-100 text-rose-700',
    completed: 'bg-emerald-100 text-emerald-700',
    'in-progress': 'bg-blue-100 text-blue-700',
    'en-cours': 'bg-blue-100 text-blue-700',
    'à-suivre': 'bg-amber-100 text-amber-700',
};

export default function StatusBadge({ status, label }) {
    const style = statusStyles[status] || 'bg-slate-100 text-slate-700';
    return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${style}`}>{label || status}</span>;
}
