import { BarChart3, DollarSign, ShieldCheck, TrendingUp, Users, BookOpen, CreditCard, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import KPICard from '../../components/dashboard/KPICard';
import DashboardCard from '../../components/dashboard/DashboardCard';
import DataTable from '../../components/dashboard/DataTable';
import FilterBar from '../../components/dashboard/FilterBar';
import AdminAiAnalysisPanel from '../../components/AdminAiAnalysisPanel';
import { progressData } from '../../data/progress';

const stats = [
    { label: 'Revenu mensuel', value: `${progressData.admin.monthlyRevenue.toLocaleString()}€`, icon: DollarSign, tone: 'bg-emerald-100 text-emerald-700' },
    { label: 'Utilisateurs actifs', value: progressData.admin.activeUsers.toLocaleString(), icon: Users, tone: 'bg-blue-100 text-blue-700' },
    { label: 'Paiements traités', value: progressData.admin.paymentsProcessed, icon: CreditCard, tone: 'bg-violet-100 text-violet-700' },
    { label: 'Tickets support', value: progressData.admin.supportTickets, icon: ShieldCheck, tone: 'bg-amber-100 text-amber-700' },
];

const usersData = [
    { id: 1, name: 'Amina Ramadan', email: 'amina@grow-up.com', role: 'Student', status: 'Actif', joinDate: '2026-01-15' },
    { id: 2, name: 'Yassine Belkadi', email: 'yassine@grow-up.com', role: 'Instructor', status: 'Actif', joinDate: '2025-11-20' },
    { id: 3, name: 'Lina Houssaini', email: 'lina@grow-up.com', role: 'Admin', status: 'Actif', joinDate: '2025-10-01' },
    { id: 4, name: 'Salim Khaled', email: 'salim@grow-up.com', role: 'Student', status: 'Inactif', joinDate: '2026-02-10' },
];

const coursesData = [
    { id: 1, name: 'React Moderne', instructor: 'Yassine B.', students: 245, status: 'Publié', revenue: 2450 },
    { id: 2, name: 'JavaScript Avancé', instructor: 'Lina H.', students: 178, status: 'Publié', revenue: 1780 },
    { id: 3, name: 'TypeScript pour tous', instructor: 'Nadia E.', students: 89, status: 'Brouillon', revenue: 890 },
    { id: 4, name: 'CSS Grid & Flexbox', instructor: 'Yassine B.', students: 156, status: 'Publié', revenue: 1560 },
];

const paymentsData = [
    { id: 'TRX001', student: 'Amina R.', course: 'React Moderne', amount: 99, date: '2026-08-30', method: 'Carte Bancaire', status: 'Vérifiée' },
    { id: 'TRX002', student: 'Omar B.', course: 'JavaScript Avancé', amount: 99, date: '2026-08-29', method: 'PayPal', status: 'Vérifiée' },
    { id: 'TRX003', student: 'Leila M.', course: 'CSS Grid', amount: 49, date: '2026-08-28', method: 'Carte Bancaire', status: 'En vérification' },
    { id: 'TRX004', student: 'Karim Z.', course: 'TypeScript', amount: 79, date: '2026-08-27', method: 'Virement', status: 'Rejetée' },
];

const recentActivity = [
    { type: 'Nouvel utilisateur', description: 'Fatima S. s\'est inscrite', time: 'Il y a 2 heures' },
    { type: 'Paiement', description: 'Reçu: 99€ pour React Moderne', time: 'Il y a 5 heures' },
    { type: 'Alerte', description: 'Ticket support critique en attente', time: 'Il y a 30 minutes' },
];

export default function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Supervision Globale</p>
                <h1 className="mt-2 text-3xl font-black text-slate-900">Tableau de bord administrateur</h1>
                <p className="mt-2 text-slate-600">Gérez les utilisateurs, les formations, les paiements et analysez les performances de la plateforme</p>
            </section>

            {/* KPI Cards */}
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map(({ label, value, icon, tone }) => (
                    <KPICard key={label} icon={icon} label={label} value={value} tone={tone} />
                ))}
            </section>

            {/* Recent Activity + Alerts */}
            <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
                <DashboardCard title="Activité récente" subtitle="Dashboard">
                    <div className="space-y-3">
                        {recentActivity.map((activity, idx) => (
                            <div key={idx} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <div className={`rounded-lg p-2 ${activity.type === 'Alerte' ? 'bg-rose-100 text-rose-700' :
                                        activity.type === 'Paiement' ? 'bg-emerald-100 text-emerald-700' :
                                            'bg-blue-100 text-blue-700'
                                    }`}>
                                    {activity.type === 'Alerte' ? <AlertCircle className="h-5 w-5" /> :
                                        activity.type === 'Paiement' ? <DollarSign className="h-5 w-5" /> :
                                            <Users className="h-5 w-5" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-semibold text-slate-900">{activity.type}</p>
                                    <p className="text-sm text-slate-600">{activity.description}</p>
                                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </DashboardCard>

                <DashboardCard title="Indicateurs clés" subtitle="Santé">
                    <div className="space-y-4">
                        <div className="rounded-2xl bg-emerald-50 p-4">
                            <p className="text-sm font-medium text-emerald-700">Disponibilité du système</p>
                            <p className="mt-2 text-2xl font-bold text-slate-900">99.8%</p>
                        </div>
                        <div className="rounded-2xl bg-blue-50 p-4">
                            <p className="text-sm font-medium text-blue-700">Taux de conversion</p>
                            <p className="mt-2 text-2xl font-bold text-slate-900">8.4%</p>
                        </div>
                        <div className="rounded-2xl bg-violet-50 p-4">
                            <p className="text-sm font-medium text-violet-700">NPS (Satisfaction)</p>
                            <p className="mt-2 text-2xl font-bold text-slate-900">72</p>
                        </div>
                    </div>
                </DashboardCard>
            </section>

            {/* User Management */}
            <DashboardCard title="Gestion des utilisateurs" subtitle="Administration">
                <FilterBar
                    searchPlaceholder="Rechercher un utilisateur..."
                    filters={[
                        {
                            key: 'role', label: 'Rôle', options: [
                                { value: 'student', label: 'Étudiant' },
                                { value: 'instructor', label: 'Formateur' },
                                { value: 'admin', label: 'Administrateur' },
                            ]
                        },
                        {
                            key: 'status', label: 'Statut', options: [
                                { value: 'actif', label: 'Actif' },
                                { value: 'inactif', label: 'Inactif' },
                            ]
                        },
                    ]}
                />
                <DataTable
                    columns={[
                        { key: 'name', label: 'Utilisateur' },
                        { key: 'email', label: 'Email' },
                        { key: 'role', label: 'Rôle' },
                        {
                            key: 'status', label: 'Statut', render: (val) =>
                                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${val === 'Actif' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
                                    }`}>{val}</span>
                        },
                    ]}
                    data={usersData}
                    actions={[
                        { label: 'Voir', onClick: (row) => alert(`Profil: ${row.name}`) },
                        { label: 'Suspendre', onClick: (row) => alert(`Suspendre: ${row.name}`) },
                    ]}
                />
            </DashboardCard>

            {/* Course Management */}
            <DashboardCard title="Gestion des formations" subtitle="Catalogue">
                <FilterBar
                    searchPlaceholder="Rechercher une formation..."
                    filters={[
                        {
                            key: 'status', label: 'Statut', options: [
                                { value: 'published', label: 'Publié' },
                                { value: 'draft', label: 'Brouillon' },
                            ]
                        },
                    ]}
                />
                <DataTable
                    columns={[
                        { key: 'name', label: 'Formation' },
                        { key: 'instructor', label: 'Formateur' },
                        { key: 'students', label: 'Étudiants' },
                        { key: 'revenue', label: 'Revenu (€)' },
                        {
                            key: 'status', label: 'Statut', render: (val) =>
                                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${val === 'Publié' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                    }`}>{val}</span>
                        },
                    ]}
                    data={coursesData}
                    actions={[
                        { label: 'Modifier', onClick: (row) => alert(`Modifier: ${row.name}`) },
                        { label: 'Analytics', onClick: (row) => alert(`Analytics: ${row.name}`) },
                    ]}
                />
            </DashboardCard>

            {/* Payment Management */}
            <DashboardCard title="Gestion des paiements" subtitle="Transactions">
                <FilterBar
                    searchPlaceholder="Rechercher une transaction..."
                    filters={[
                        {
                            key: 'status', label: 'Vérification', options: [
                                { value: 'verified', label: 'Vérifiée' },
                                { value: 'pending', label: 'En attente' },
                                { value: 'rejected', label: 'Rejetée' },
                            ]
                        },
                    ]}
                />
                <DataTable
                    columns={[
                        { key: 'id', label: 'ID' },
                        { key: 'student', label: 'Étudiant' },
                        { key: 'course', label: 'Formation' },
                        { key: 'amount', label: 'Montant (€)' },
                        { key: 'date', label: 'Date' },
                        {
                            key: 'status', label: 'Vérification', render: (val) =>
                                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${val === 'Vérifiée' ? 'bg-emerald-100 text-emerald-700' :
                                        val === 'En vérification' ? 'bg-amber-100 text-amber-700' :
                                            'bg-rose-100 text-rose-700'
                                    }`}>{val}</span>
                        },
                    ]}
                    data={paymentsData}
                    actions={[
                        { label: 'Détails', onClick: (row) => alert(`Transaction: ${row.id}`) },
                        { label: 'Vérifier', onClick: (row) => alert(`Vérifier: ${row.id}`) },
                    ]}
                />
            </DashboardCard>

            {/* AI Agent Analytics Panel */}
            <AdminAiAnalysisPanel />

            {/* Link to AI Analytics Page */}
            <div className="text-center">
                <Link
                    to="/admin/ai-analytics"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white hover:opacity-90 transition"
                >
                    <BarChart3 className="h-5 w-5" />
                    Voir l'analyse IA complète
                </Link>
            </div>
        </div>
    );
}
