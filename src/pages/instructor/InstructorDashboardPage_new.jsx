import { ArrowUpRight, BookOpen, TrendingUp, Users, BarChart3, Calendar, Zap } from 'lucide-react';
import KPICard from '../../components/dashboard/KPICard';
import DashboardCard from '../../components/dashboard/DashboardCard';
import DataTable from '../../components/dashboard/DataTable';
import FilterBar from '../../components/dashboard/FilterBar';
import ProgressBar from '../../components/dashboard/ProgressBar';
import { progressData } from '../../data/progress';
import { courses } from '../../data/courses';

const stats = [
    { label: 'Étudiants totaux', value: progressData.instructor.studentsCount, icon: Users, tone: 'bg-blue-100 text-blue-700' },
    { label: 'Taux de complétion', value: `${progressData.instructor.averageCompletion}%`, icon: TrendingUp, tone: 'bg-emerald-100 text-emerald-700' },
    { label: 'Nouvelles inscriptions', value: progressData.instructor.newEnrollments, icon: ArrowUpRight, tone: 'bg-violet-100 text-violet-700' },
    { label: 'Cours publiés', value: progressData.instructor.coursesPublished, icon: BookOpen, tone: 'bg-amber-100 text-amber-700' },
];

const myCoursesData = [
    { id: 1, name: 'React Moderne', students: 245, completion: 82, status: 'Actif', lastUpdate: '2 jours' },
    { id: 2, name: 'JavaScript Avancé', students: 178, completion: 76, status: 'Actif', lastUpdate: '5 jours' },
    { id: 3, name: 'TypeScript pour tous', students: 89, completion: 65, status: 'Actif', lastUpdate: '1 semaine' },
    { id: 4, name: 'CSS Grid & Flexbox', students: 156, completion: 91, status: 'Actif', lastUpdate: '3 jours' },
];

const studentProgressData = [
    { name: 'Amina R.', course: 'React Moderne', progress: 85, score: 92, status: 'Engagée' },
    { name: 'Salim K.', course: 'JavaScript Avancé', progress: 62, score: 78, status: 'En cours' },
    { name: 'Leila M.', course: 'TypeScript pour tous', progress: 45, score: 65, status: 'À risque' },
    { name: 'Omar B.', course: 'CSS Grid & Flexbox', progress: 98, score: 95, status: 'Complété' },
];

const upcomingSessions = [
    { id: 1, title: 'Live coding: React Hooks', date: '2026-09-05', time: '18:30', participants: 84 },
    { id: 2, title: 'Atelier: UX Research', date: '2026-09-08', time: '10:00', participants: 42 },
];

export default function InstructorDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Dashboard Formateur</p>
                <h1 className="mt-2 text-3xl font-black text-slate-900">Vue d'ensemble pédagogique</h1>
                <p className="mt-2 text-slate-600">Gérez vos cours, suivez vos étudiants et analysez la performance pédagogique</p>
            </section>

            {/* KPI Cards */}
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map(({ label, value, icon, tone }) => (
                    <KPICard key={label} icon={icon} label={label} value={value} tone={tone} />
                ))}
            </section>

            {/* My Courses Table */}
            <DashboardCard title="Mes formations" subtitle="Gestion">
                <FilterBar
                    searchPlaceholder="Rechercher une formation..."
                    filters={[
                        { key: 'status', label: 'Statut', options: [{ value: 'active', label: 'Actif' }, { value: 'draft', label: 'Brouillon' }] },
                    ]}
                />
                <DataTable
                    columns={[
                        { key: 'name', label: 'Nom du cours' },
                        { key: 'students', label: 'Étudiants' },
                        { key: 'completion', label: 'Complétion', render: (val) => <ProgressBar value={val} label="" showLabel={false} /> },
                        { key: 'status', label: 'Statut', render: (val) => <span className="inline-block px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-medium">{val}</span> },
                    ]}
                    data={myCoursesData}
                    actions={[
                        { label: 'Modifier', onClick: (row) => alert(`Modifier: ${row.name}`) },
                        { label: 'Analytics', onClick: (row) => alert(`Analytics: ${row.name}`) },
                    ]}
                />
            </DashboardCard>

            {/* Upcoming Sessions + Performance */}
            <section className="grid gap-6 xl:grid-cols-2">
                <DashboardCard title="Prochaines sessions" subtitle="Calendrier">
                    <div className="space-y-4">
                        {upcomingSessions.map((session) => (
                            <div key={session.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 transition">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-slate-900">{session.title}</h4>
                                        <div className="mt-2 flex gap-4 text-sm text-slate-600">
                                            <span>{session.date}</span>
                                            <span>•</span>
                                            <span>{session.time}</span>
                                        </div>
                                        <p className="mt-2 text-xs text-slate-500">{session.participants} participants confirmés</p>
                                    </div>
                                    <button className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700 whitespace-nowrap">
                                        Modifier
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </DashboardCard>

                <DashboardCard title="Performance pédagogique" subtitle="Métriques">
                    <div className="space-y-4">
                        {[
                            { label: 'Taux d\'engagement moyen', value: 84 },
                            { label: 'Score moyen des quiz', value: 81 },
                            { label: 'Taux de rétention', value: 76 },
                        ].map((metric) => (
                            <div key={metric.label}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-slate-700">{metric.label}</span>
                                    <span className="text-sm font-bold text-slate-900">{metric.value}%</span>
                                </div>
                                <ProgressBar value={metric.value} label="" showLabel={false} />
                            </div>
                        ))}
                    </div>
                </DashboardCard>
            </section>

            {/* Student Progress Monitoring */}
            <DashboardCard title="Suivi des étudiants" subtitle="Progression individualisée">
                <FilterBar
                    searchPlaceholder="Rechercher un étudiant..."
                    filters={[
                        {
                            key: 'status', label: 'Statut', options: [
                                { value: 'engagee', label: 'Engagé' },
                                { value: 'en-cours', label: 'En cours' },
                                { value: 'a-risque', label: 'À risque' },
                            ]
                        },
                    ]}
                />
                <DataTable
                    columns={[
                        { key: 'name', label: 'Étudiant' },
                        { key: 'course', label: 'Formation' },
                        { key: 'progress', label: 'Progression', render: (val) => `${val}%` },
                        { key: 'score', label: 'Score moyen' },
                        {
                            key: 'status', label: 'Statut', render: (val) => {
                                const colors = { 'Engagée': 'emerald', 'En cours': 'blue', 'À risque': 'rose' };
                                const color = colors[val] || 'slate';
                                return <span className={`inline-block px-2 py-1 rounded bg-${color}-100 text-${color}-700 text-xs font-medium`}>{val}</span>;
                            }
                        },
                    ]}
                    data={studentProgressData}
                    actions={[
                        { label: 'Contacter', onClick: (row) => alert(`Message à ${row.name}`) },
                        { label: 'Détails', onClick: (row) => alert(`Voir détails: ${row.name}`) },
                    ]}
                />
            </DashboardCard>
        </div>
    );
}
