import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, UserRound } from 'lucide-react';
import useAppStore from '../store/appStore';

export default function SignInPage() {
    const setCurrentUser = useAppStore((state) => state.setCurrentUser);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        const userName = formData.name.trim() || 'Nouvel apprenant';

        setCurrentUser({
            id: `${formData.role}-${Date.now()}`,
            name: userName,
            role: formData.role,
            email: formData.email,
        });

        navigate(`/${formData.role}/dashboard`);
    };

    return (
        <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <div className="grid lg:grid-cols-2">
                    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 p-8 text-white lg:p-12">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
                            <CheckCircle2 className="h-4 w-4" />
                            Grow Up
                        </div>

                        <h1 className="mt-8 text-4xl font-black leading-tight">Créez votre compte et accélérez votre progression.</h1>
                        <p className="mt-5 max-w-md text-base text-slate-300">
                            Rejoignez une plateforme d’apprentissage moderne pensée pour les étudiants, formateurs et équipes qui veulent aller plus vite.
                        </p>

                        <div className="mt-10 space-y-5">
                            {[
                                'Parcours personnalisés et accompagnés',
                                'Accès à des formations premium',
                                'Outils IA et suivi de progression',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                    <ShieldCheck className="h-5 w-5 text-blue-300" />
                                    <span className="text-sm text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 lg:p-12">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">Inscription</p>
                                <h2 className="mt-3 text-3xl font-black text-slate-900">Créer un compte</h2>
                            </div>
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                <UserRound className="h-7 w-7" />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Nom complet</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                                    placeholder="Entrez votre nom complet"
                                    required
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                                <div className="relative">
                                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                                        placeholder="vous@exemple.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">Mot de passe</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-slate-700">Confirmer</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                            >
                                S’inscrire
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-slate-500">
                            Vous avez déjà un compte ?{' '}
                            <a href="/login" className="font-semibold text-blue-600 hover:text-blue-700">Se connecter</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
