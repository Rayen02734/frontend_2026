// Progress Bar dengan % display
export default function ProgressBar({ value = 0, label, showLabel = true }) {
    return (
        <div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-500 transition-all"
                    style={{ width: `${Math.min(value, 100)}%` }}
                />
            </div>
            {showLabel && <p className="mt-2 text-sm font-medium text-slate-600">{value}% {label}</p>}
        </div>
    );
}
