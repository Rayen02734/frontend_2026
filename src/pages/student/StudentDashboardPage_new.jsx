import { ArrowUpRight, Calendar, CheckCircle2, MessageSquareText, Target, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import KPICard from '../../components/dashboard/KPICard';
import DashboardCard from '../../components/dashboard/DashboardCard';
import ProgressBar from '../../components/dashboard/ProgressBar';
import AIInsightCard from '../../components/dashboard/AIInsightCard';
import { courses } from '../../data/courses';
import { sessions } from '../../data/sessions';
import { progressData } from '../../data/progress';

const stats = [
    { label: 'Progression globale', value: `${progressData.student.completionRate}%`, icon: Target, tone: 'bg-blue-100 text-blue-700', trend: '12%' },
    { label: 'XP cette semaine', value: `${progressData.student.weeklyXp} XP`, icon: Trophy, tone: 'bg-violet-100 text-violet-700', trend: '24%' },
    { label: 'Cours terminés', value: progressData.student.completedCourses, icon: CheckCircle2, tone: 'bg-emerald-100 text-emerald-700' },
    { label: 'Série d\'apprentissage', value: `${progressData.student.streakDays}j`, icon: Zap, tone: 'bg-amber-100 text-amber-700' },
];

const aiInsights = [
    { title: '💪 Points forts', description: 'React et JavaScript - vous excellez dans ces domaines' },
    { title: '📚 À revoir', description: 'TypeScript et les tests unitaires - recommandé de renforcer' },
    { title: '🎯 Recommandation', description: 'Complétez le module 3 avant le prochain quiz' },
];

const upcomingQuizzes = [
    { id: 1, name: 'JavaScript Moderne', difficulty: 'Moyen', deadline: '2026-09-05', questions: 8 },
    { id: 2, name: 'React Hooks', difficulty: 'Avancé', deadline: '2026-09-08', questions: 10 },
    { id: 3, name: 'CSS Grid', difficulty: 'Facile', deadline: '2026-09-10', questions: 6 },
];

export default function StudentDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-violet-50 p-6 shadow-sm lg:flex lg:items-center lg:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Bienvenue!</p>
                    <h1 className="mt-2 text-3xl font-black text-slate-900">Continuez votre apprentissage</h1>
                    <p className="mt-2 text-slate-600">Vous êtes à 76% de progression. Encore {Math.round(progressData.student.completionRate / 10)} modules à compléter.</p>
                </div>
                <Link to="/student/courses" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition lg:mt-0">
                    Continuer le cours
                    <ArrowUpRight className="h-4 w-4" />
                </Link>
            </section>

            {/* KPI Cards */}
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map(({ label, value, icon, tone, trend }) => (
                    <KPICard key={label} icon={icon} label={label} value={value} tone={tone} trend={trend} />
                ))}
            </section>

            {/* AI Insights + Upcoming Sessions */}
            <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
                <AIInsightCard
                    title="AI Coach"
                    insights={aiInsights}
                    actionLabel="Consulter le coach"
                    onAction={() => alert('Coach AI ouvert')}
                />

                <DashboardCard title="Prochaines sessions" subtitle="Calendrier">
                    <div className="space-y-4">
                        {sessions.slice(0, 3).map((session) => (
                            <div key={session.id} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition">
                                <div className="rounded-lg bg-violet-100 p-3 text-violet-700">
                                    <Calendar className="h-5 w-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-slate-900 truncate">{session.title}</p>
                                    <p className="text-sm text-slate-600">{session.date} à {session.time}</p>
                                    <p className="text-xs text-slate-500 mt-1">{session.participants} participants</p>
                                </div>
                                <button className="rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white hover:bg-violet-700 whitespace-nowrap">
                                    Rejoindre
                                </button>
                            </div>
                        ))}
                    </div>
                </DashboardCard>
            </section>

            {/* My Courses */}
            <DashboardCard title="Mes parcours en cours" subtitle="Progression">
                <div className="grid gap-4 md:grid-cols-2">
                    {courses.slice(0, 6).map((course) => (
                        <div key={course.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:border-slate-300 transition">
                            {course.image && (
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="mb-4 h-32 w-full rounded-lg object-cover"
                                />
                            )}
                            <p className="text-xs font-semibold uppercase text-blue-600">{course.category}</p>
                            <h3 className="mt-2 text-sm font-bold text-slate-900">{course.title}</h3>
                            <p className="mt-2 text-xs text-slate-600">Par {course.instructor}</p>
                            <div className="mt-4">
                                <ProgressBar value={course.lessons > 20 ? 76 : 52} label="complété" showLabel={true} />
                            </div>
                            <button className="mt-4 w-full rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition">
                                Continuer
                            </button>
                        </div>
                    ))}
                </div>
            </DashboardCard>

            {/* Quizzes & Exercises */}
            <DashboardCard title="Quiz & Exercices" subtitle="À terminer">
                <div className="space-y-3">
                    {upcomingQuizzes.map((quiz) => (
                        <div key={quiz.id} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition">
                            <div className="flex-1">
                                <h4 className="font-semibold text-slate-900">{quiz.name}</h4>
                                <div className="mt-1 flex gap-3 text-xs text-slate-600">
                                    <span>{quiz.questions} questions</span>
                                    <span>•</span>
                                    <span className={`${quiz.difficulty === 'Facile' ? 'text-emerald-600' : quiz.difficulty === 'Moyen' ? 'text-amber-600' : 'text-rose-600'} font-medium`}>{quiz.difficulty}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-medium text-slate-600">Avant le</p>
                                <p className="text-sm font-bold text-slate-900">{new Date(quiz.deadline).toLocaleDateString('fr-FR')}</p>
                            </div>
                            <button className="ml-4 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700 whitespace-nowrap">
                                Commencer
                            </button>
                        </div>
                    ))}
                </div>
            </DashboardCard>

            {/* AI Chat Floating Button */}
            <div className="fixed bottom-6 right-6 flex items-center gap-3">
                <button className="rounded-full bg-blue-600 p-4 text-white shadow-lg hover:bg-blue-700 transition">
                    <MessageSquareText className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}
