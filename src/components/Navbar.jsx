import { ChevronDown, GraduationCap, Menu, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAppStore from '../store/appStore';
import { getTranslations } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const currentUser = useAppStore((state) => state.currentUser);
    const logout = useAppStore((state) => state.logout);
    const language = useAppStore((state) => state.language);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const t = getTranslations(language);

    const navItems = [
        { to: '/', label: t.nav.home },
        { to: '/courses', label: t.nav.courses },
        { to: '/about', label: t.nav.about },
    ];

    const handleLogout = () => {
        logout();
        setMenuOpen(false);
        navigate('/');
    };

    const dashboardLink = currentUser ? `/${currentUser.role}/dashboard` : '/login';

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-200">
                        <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-slate-900">Grow Up</p>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Learning platform</p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-7 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <LanguageSwitcher />
                    {currentUser ? (
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setMenuOpen((value) => !value)}
                                className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                            >
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                                    {currentUser.name.charAt(0).toUpperCase()}
                                </span>
                                {currentUser.name}
                                <ChevronDown className="h-4 w-4" />
                            </button>

                            {menuOpen && (
                                <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-slate-100">
                                    <Link to={dashboardLink} className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
                                        {t.nav.dashboard}
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={handleLogout}
                                        className="mt-1 block w-full rounded-xl px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                                    >
                                        {t.nav.logout}
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link
                                to="/signin"
                                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
                            >
                                Sign in
                            </Link>
                            <Link
                                to="/login"
                                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
                            >
                                <Sparkles className="h-4 w-4" />
                                {t.nav.login}
                            </Link>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <LanguageSwitcher />
                    <button type="button" onClick={() => setMobileOpen((value) => !value)} className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700">
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <div className="border-t border-slate-200 bg-white md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}

                        {currentUser ? (
                            <>
                                <Link to={dashboardLink} className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700" onClick={() => setMobileOpen(false)}>
                                    {t.nav.dashboard}
                                </Link>
                                <button type="button" onClick={handleLogout} className="rounded-xl border border-slate-200 px-3 py-2 text-left text-sm font-medium text-slate-700">
                                    {t.nav.logout}
                                </button>
                            </>
                        ) : (
                            <div className="grid gap-2">
                                <Link to="/signin" className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center text-sm font-semibold text-slate-800" onClick={() => setMobileOpen(false)}>
                                    Sign in
                                </Link>
                                <Link to="/login" className="rounded-xl bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white" onClick={() => setMobileOpen(false)}>
                                    {t.nav.login}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
