// Generic Data Table avec pagination et actions
export default function DataTable({ columns, data, actions }) {
    if (!data || data.length === 0) {
        return (
            <div className="text-center py-8">
                <p className="text-slate-500">Aucune donnée disponible</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key} className="px-6 py-3 font-semibold">
                                {col.label}
                            </th>
                        ))}
                        {actions && <th className="px-6 py-3 font-semibold">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} className="border-t border-slate-200 hover:bg-slate-50 transition">
                            {columns.map((col) => (
                                <td key={col.key} className="px-6 py-4 text-slate-800">
                                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                                </td>
                            ))}
                            {actions && (
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        {actions.map((action) => (
                                            <button
                                                key={action.label}
                                                onClick={() => action.onClick(row)}
                                                className="text-xs font-medium text-blue-600 hover:text-blue-800"
                                            >
                                                {action.label}
                                            </button>
                                        ))}
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
