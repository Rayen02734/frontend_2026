import { ArrowUpRight, BookOpen, Users, Video, Zap } from 'lucide-react';
import { progressData } from '../../data/progress';

const stats = [
    { label: 'Étudiants', value: progressData.instructor.studentsCount, icon: Users, tone: 'bg-blue-100 text-blue-700' },
    { label: 'Completion moyenne', value: `${progressData.instructor.averageCompletion}%`, icon: Zap, tone: 'bg-emerald-100 text-emerald-700' },
    { label: 'Inscriptions', value: progressData.instructor.newEnrollments, icon: ArrowUpRight, tone: 'bg-violet-100 text-violet-700' },
    { label: 'Cours publiés', value: progressData.instructor.coursesPublished, icon: BookOpen, tone: 'bg-amber-100 text-amber-700' },
];

export default function InstructorDashboardPage() {
    return (
        <div className="space-y-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map(({ label, value, icon: Icon, tone }) => (
                    <div key={label} className="card-surface p-5">
                        <div className={`inline-flex rounded-xl p-2 ${tone}`}>
                            <Icon className="h-5 w-5" />
                        </div>
                        <p className="mt-5 text-3xl font-bold text-slate-900">{value}</p>
                        <p className="mt-2 text-sm text-slate-500">{label}</p>
                    </div>
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
                <div className="card-surface p-6">
                    <h2 className="text-2xl font-bold text-slate-900">Dernières activités</h2>
                    <div className="mt-5 space-y-4">
                        {['Module JavaScript Moderne', 'Exercice de design UX', 'Session de mentorat planifiée'].map((item, index) => (
                            <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <div>
                                    <p className="font-semibold text-slate-900">{item}</p>
                                    <p className="text-sm text-slate-500">Action {index + 1}</p>
                                </div>
                                <span className="badge">À suivre</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-surface p-6">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
                            <Video className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Prochaine session</p>
                            <p className="text-sm text-slate-500">Live coding React</p>
                        </div>
                    </div>
                    <p className="mt-5 text-3xl font-bold text-slate-900">18:30</p>
                    <p className="mt-2 text-sm text-slate-500">Jeudi 5 septembre</p>
                </div>
            </section>
        </div>
    );
}
