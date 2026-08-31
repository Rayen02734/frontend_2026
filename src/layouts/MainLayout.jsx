import { Outlet } from 'react-router-dom';
import { BookOpen, Mail, MapPin, Sparkles, Twitter, Linkedin, Instagram } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
                <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:px-8">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                <BookOpen className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-white">Grow Up</p>
                                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Learning platform</p>
                            </div>
                        </div>
                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
                            Des parcours de formation concrets, orientés résultats et guidés par l’intelligence artificielle pour accélérer la progression des équipes et des apprenants.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-blue-500 hover:text-white">
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-blue-500 hover:text-white">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-blue-500 hover:text-white">
                                <Twitter className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Entreprise</p>
                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            <li><a href="/about" className="transition hover:text-white">À propos</a></li>
                            <li><a href="/courses" className="transition hover:text-white">Catalogue</a></li>
                            <li><a href="/login" className="transition hover:text-white">Connexion</a></li>
                            <li><a href="/student/dashboard" className="transition hover:text-white">Mon espace</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Support</p>
                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            <li><a href="/about" className="transition hover:text-white">Formations</a></li>
                            <li><a href="/about" className="transition hover:text-white">Mentorat</a></li>
                            <li><a href="/about" className="transition hover:text-white">FAQ</a></li>
                            <li><a href="/about" className="transition hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
                        <div className="mt-5 space-y-4 text-sm text-slate-300">
                            <div className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 text-blue-400" />
                                <span>hello@growup.io</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 text-blue-400" />
                                <span>12 avenue de la Technologie, Tunis</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-300">
                                <Sparkles className="h-4 w-4" />
                                <span>AI coach + parcours guidés</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800">
                    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                        <p>© 2026 Grow Up. Tous droits réservés.</p>
                        <p>Made for learning, growth and performance.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
