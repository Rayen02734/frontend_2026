import { ArrowUpRight, BookOpen, CheckCircle2, Clock3, Target, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../../data/courses';
import { sessions } from '../../data/sessions';
import { progressData } from '../../data/progress';

const stats = [
    { label: 'Cours terminés', value: progressData.student.completedCourses, icon: CheckCircle2, tone: 'bg-emerald-100 text-emerald-700' },
    { label: 'XP cette semaine', value: `${progressData.student.weeklyXp} XP`, icon: Trophy, tone: 'bg-violet-100 text-violet-700' },
    { label: 'Progression', value: `${progressData.student.completionRate}%`, icon: Target, tone: 'bg-blue-100 text-blue-700' },
    { label: 'Série', value: `${progressData.student.streakDays} jours`, icon: Clock3, tone: 'bg-amber-100 text-amber-700' },
];

export default function StudentDashboardPage() {
    return (
        <div className="space-y-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map(({ label, value, icon: Icon, tone }) => (
                    <div key={label} className="card-surface p-5">
                        <div className="flex items-center justify-between">
                            <div className={`rounded-xl p-2 ${tone}`}>
                                <Icon className="h-5 w-5" />
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-slate-400" />
                        </div>
                        <p className="mt-5 text-3xl font-bold text-slate-900">{value}</p>
                        <p className="mt-2 text-sm text-slate-500">{label}</p>
                    </div>
                ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
                <div className="card-surface p-6">
                    <div className="mb-5 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Continuez</p>
                            <h2 className="mt-2 text-2xl font-bold text-slate-900">Parcours en cours</h2>
                        </div>
                        <Link to="/student/courses" className="text-sm font-semibold text-blue-600">Voir tout</Link>
                    </div>

                    <div className="space-y-4">
                        {courses.map((course) => (
                            <div key={course.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-blue-600">{course.category}</p>
                                        <h3 className="mt-1 text-lg font-semibold text-slate-900">{course.title}</h3>
                                    </div>
                                    <span className="badge">{course.level}</span>
                                </div>

                                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-200">
                                    <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-500" style={{ width: `${course.lessons > 20 ? 76 : 52}%` }} />
                                </div>
                                <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                                    <span>{course.lessons} leçons</span>
                                    <span>76% complété</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-surface p-6">
                    <h3 className="text-xl font-bold text-slate-900">Aujourd’hui</h3>
                    <div className="mt-5 space-y-4">
                        {sessions.slice(0, 2).map((session) => (
                            <div key={session.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm font-medium text-violet-600">{session.type}</p>
                                <h4 className="mt-2 font-semibold text-slate-900">{session.title}</h4>
                                <p className="mt-2 text-sm text-slate-500">{session.date} · {session.time}</p>
                                <p className="mt-2 text-sm text-slate-500">{session.participants} participants</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="card-surface p-6">
                <div className="mb-5 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Focus</p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-900">Vos prochaines actions</h2>
                    </div>
                    <BookOpen className="h-5 w-5 text-blue-600" />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl bg-blue-50 p-4">
                        <p className="text-sm font-medium text-blue-700">Quiz</p>
                        <h3 className="mt-2 text-lg font-bold text-slate-900">JavaScript moderne</h3>
                        <p className="mt-2 text-sm text-slate-600">8 questions · 15 minutes</p>
                    </div>
                    <div className="rounded-2xl bg-violet-50 p-4">
                        <p className="text-sm font-medium text-violet-700">Pratique</p>
                        <h3 className="mt-2 text-lg font-bold text-slate-900">Créer un dashboard</h3>
                        <p className="mt-2 text-sm text-slate-600">Projet à terminer avant vendredi</p>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 p-4">
                        <p className="text-sm font-medium text-emerald-700">IA Coach</p>
                        <h3 className="mt-2 text-lg font-bold text-slate-900">Demander une synthèse</h3>
                        <p className="mt-2 text-sm text-slate-600">Révision rapide de votre progression</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
