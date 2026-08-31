import { CalendarDays, Clock3, Users } from 'lucide-react';
import { sessions } from '../../data/sessions';

export default function InstructorSessionsPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Planning</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Sessions à venir</h2>
            </div>

            <div className="grid gap-5">
                {sessions.map((session) => (
                    <article key={session.id} className="card-surface p-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <p className="text-sm font-medium text-violet-600">{session.type}</p>
                                <h3 className="mt-2 text-xl font-bold text-slate-900">{session.title}</h3>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
                                    <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {session.date}</div>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
                                    <div className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> {session.time}</div>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
                                    <div className="flex items-center gap-2"><Users className="h-4 w-4" /> {session.participants}</div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
