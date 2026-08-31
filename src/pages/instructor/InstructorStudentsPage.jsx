import { Mail, TrendingUp } from 'lucide-react';
import { users } from '../../data/users';

const students = users.filter((user) => user.role === 'student');

export default function InstructorStudentsPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Suivi</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Étudiants</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {students.map((student) => (
                    <article key={student.id} className="card-surface p-5">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                                {student.avatar}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">{student.name}</h3>
                                <p className="text-sm text-slate-500">{student.email}</p>
                            </div>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-xl bg-slate-50 p-3">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <TrendingUp className="h-4 w-4" />
                                    <span className="text-sm">Progression 76%</span>
                                </div>
                            </div>
                            <div className="rounded-xl bg-slate-50 p-3">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <Mail className="h-4 w-4" />
                                    <span className="text-sm">Message</span>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
