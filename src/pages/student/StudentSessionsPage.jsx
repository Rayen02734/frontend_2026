import { CalendarDays, Clock3, Users } from 'lucide-react';
import { sessions } from '../../data/sessions';

export default function StudentSessionsPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Sessions</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Ateliers et live sessions</h2>
            </div>

            <div className="grid gap-5">
                {sessions.map((session) => (
                    <article key={session.id} className="card-surface p-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <span className="badge">{session.type}</span>
                                <h3 className="mt-4 text-xl font-bold text-slate-900">{session.title}</h3>
                                <p className="mt-2 text-sm text-slate-600">Formateur : {session.instructor}</p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <CalendarDays className="h-4 w-4" />
                                        <span className="text-sm">{session.date}</span>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Clock3 className="h-4 w-4" />
                                        <span className="text-sm">{session.time}</span>
                                    </div>
                                </div>
                                <div className="rounded-xl bg-slate-50 p-3">
                                    <div className="flex items-center gap-2 text-slate-600">
                                        <Users className="h-4 w-4" />
                                        <span className="text-sm">{session.participants}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
