import { UserCog, Users } from 'lucide-react';
import { users } from '../../data/users';

export default function AdminUsersPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Gestion</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Utilisateurs</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {users.map((user) => (
                    <article key={user.id} className="card-surface p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                                    {user.avatar}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">{user.name}</h3>
                                    <p className="text-sm text-slate-500">{user.role}</p>
                                </div>
                            </div>
                            <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                                {user.status}
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                {user.email}
                            </div>
                            <UserCog className="h-4 w-4" />
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
