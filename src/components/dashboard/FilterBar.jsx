// Filter Bar avec search et dropdowns
import { Search } from 'lucide-react';

export default function FilterBar({ searchPlaceholder, filters = [], onSearch, onFilterChange }) {
    return (
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-1 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                    type="text"
                    placeholder={searchPlaceholder || 'Rechercher...'}
                    onChange={(e) => onSearch?.(e.target.value)}
                    className="flex-1 border-0 bg-transparent text-sm outline-none"
                />
            </div>

            <div className="flex gap-3">
                {filters.map((filter) => (
                    <select
                        key={filter.key}
                        onChange={(e) => onFilterChange?.(filter.key, e.target.value)}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-slate-300"
                    >
                        <option value="">{filter.label}</option>
                        {filter.options?.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                ))}
            </div>
        </div>
    );
}
