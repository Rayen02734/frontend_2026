import { NavLink, Outlet } from 'react-router-dom';
import { BarChart3, BookOpen, CreditCard, LayoutDashboard, MessageSquareText, ShieldCheck, Users, Video, GraduationCap } from 'lucide-react';
import { getTranslations } from '../i18n';
import useAppStore from '../store/appStore';

const studentNav = [
    { to: '/student/dashboard', labelKey: 'overview', icon: LayoutDashboard },
    { to: '/student/courses', labelKey: 'courses', icon: BookOpen },
    { to: '/student/sessions', labelKey: 'sessions', icon: Video },
    { to: '/student/quizzes', labelKey: 'quizzes', icon: BarChart3 },
    { to: '/student/payments', labelKey: 'payments', icon: CreditCard },
    { to: '/student/chat', labelKey: 'aiAgent', icon: MessageSquareText },
];

const instructorNav = [
    { to: '/instructor/dashboard', labelKey: 'overview', icon: LayoutDashboard },
    { to: '/instructor/courses', labelKey: 'myCourses', icon: BookOpen },
    { to: '/instructor/sessions', labelKey: 'sessions', icon: Video },
    { to: '/instructor/quizzes', labelKey: 'quizzes', icon: BarChart3 },
    { to: '/instructor/students', labelKey: 'students', icon: Users },
];

const adminNav = [
    { to: '/admin/dashboard', labelKey: 'tableTitle', icon: LayoutDashboard },
    { to: '/admin/ai-analytics', labelKey: 'aiAgent', icon: MessageSquareText },
    { to: '/admin/users', labelKey: 'users', icon: Users },
    { to: '/admin/courses', labelKey: 'courses', icon: BookOpen },
    { to: '/admin/payments', labelKey: 'payments', icon: CreditCard },
    { to: '/admin/security', labelKey: 'security', icon: ShieldCheck },
];

export default function DashboardLayout() {
    const activeRole = useAppStore((state) => state.activeRole);
    const currentUser = useAppStore((state) => state.currentUser);
    const language = useAppStore((state) => state.language);
    const t = getTranslations(language);

    const navItems = activeRole === 'student' ? studentNav : activeRole === 'instructor' ? instructorNav : adminNav;
    const initials = currentUser?.name ? currentUser.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase() : 'GU';

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <div className="flex min-h-screen">
                <aside className="hidden w-72 border-r border-slate-200 bg-slate-900 text-slate-200 lg:block">
                    <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-500">
                            <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-white">Grow Up</p>
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{t.dashboard[activeRole] || activeRole}</p>
                        </div>
                    </div>

                    <nav className="space-y-2 p-4">
                        {navItems.map(({ to, labelKey, icon: Icon }) => (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                                    }`
                                }
                            >
                                <Icon className="h-4 w-4" />
                                {t.dashboard[labelKey] || labelKey}
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                <div className="flex-1">
                    <header className="border-b border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-500">{t.dashboard.welcome}</p>
                                <h2 className="text-xl font-bold text-slate-900">{currentUser?.name || 'Grow Up User'}</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{t.dashboard[activeRole] || activeRole}</div>
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{initials}</div>
                            </div>
                        </div>
                    </header>

                    <main className="p-4 sm:p-6 lg:p-8">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}
