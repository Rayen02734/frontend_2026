import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, LockKeyhole, Mail } from 'lucide-react';
import { getTranslations } from '../i18n';
import useAppStore from '../store/appStore';

export default function LoginPage() {
    const setCurrentUser = useAppStore((state) => state.setCurrentUser);
    const language = useAppStore((state) => state.language);
    const navigate = useNavigate();
    const t = getTranslations(language);

    const [email, setEmail] = useState('amina@growup.io');
    const [password, setPassword] = useState('demo123');

    const resolveRoleFromEmail = (value) => {
        if (!value) return 'student';
        const lower = value.toLowerCase();
        if (lower.includes('admin')) return 'admin';
        if (lower.includes('formateur') || lower.includes('teacher') || lower.includes('instructor')) return 'instructor';
        return 'student';
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const selectedRole = resolveRoleFromEmail(email);
        const displayName = email.includes('@') ? email.split('@')[0].replace(/[._-]/g, ' ') : 'Grow Up User';
        const formattedName = displayName
            .split(' ')
            .filter(Boolean)
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ') || 'Grow Up User';

        setCurrentUser({
            id: `${selectedRole}-${Date.now()}`,
            name: formattedName,
            role: selectedRole,
            email,
        });

        navigate(`/${selectedRole}/dashboard`);
    };

    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-200">
                    <CheckCircle2 className="h-8 w-8" />
                </div>

                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Grow Up</p>
                    <h1 className="mt-3 text-3xl font-black text-slate-900">{t.login.title}</h1>
                    <p className="mt-2 text-sm text-slate-500">{t.login.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                            <Mail className="h-4 w-4 text-slate-500" />
                            {t.login.email}
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                            placeholder="vous@exemple.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                            <LockKeyhole className="h-4 w-4 text-slate-500" />
                            {t.login.password}
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                        {t.login.submit}
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </form>
            </div>
        </div>
    );
}
