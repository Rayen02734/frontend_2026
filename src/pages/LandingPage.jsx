import { ArrowRight, BookOpen, Sparkles, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { getTranslations } from '../i18n';
import useAppStore from '../store/appStore';

const stats = [
    { labelKey: 'statStudents', value: '24k+' },
    { labelKey: 'statCourses', value: '320' },
    { labelKey: 'statSatisfaction', value: '96%' },
    { labelKey: 'statTime', value: '3.4h/sem' },
];

export default function LandingPage() {
    const language = useAppStore((state) => state.language);
    const t = getTranslations(language);

    return (
        <div className="bg-slate-50 text-slate-900">
            <section className="container-shell py-16 md:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <span className="badge mb-6 border-blue-200 bg-blue-50 text-blue-700">
                            <Sparkles className="mr-2 h-3.5 w-3.5" />
                            {t.home.badge}
                        </span>
                        <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                            {t.home.headline}
                        </h1>
                        <p className="mt-6 max-w-xl text-lg text-slate-600">
                            {t.home.subtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                to="/student/dashboard"
                                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-700"
                            >
                                {t.home.ctaPrimary}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/instructor/dashboard"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                            >
                                {t.home.ctaSecondary}
                            </Link>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.labelKey} className="card-surface p-4">
                                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                    <p className="mt-1 text-sm text-slate-500">{t.home[stat.labelKey]}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="card-surface overflow-hidden p-6">
                            <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">{t.home.featured}</span>
                                    <TrendingUp className="h-5 w-5 text-blue-100" />
                                </div>
                                <h2 className="mt-6 text-3xl font-bold">React avancé</h2>
                                <p className="mt-2 text-blue-100">Apprendre l’architecture UI, les hooks et les patterns de production.</p>
                                <div className="mt-6 flex items-end justify-between gap-4">
                                    <div>
                                        <p className="text-sm text-blue-100">{t.home.progress}</p>
                                        <p className="text-4xl font-black">76%</p>
                                    </div>
                                    <div className="rounded-2xl bg-white/10 px-3 py-2 text-sm">+12% {t.home.weekly}</div>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600">
                                            <Users className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">{t.home.mentorship}</p>
                                            <p className="font-semibold text-slate-900">1:1 guidé</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-xl bg-violet-100 p-2 text-violet-600">
                                            <BookOpen className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">{t.home.goal}</p>
                                            <p className="font-semibold text-slate-900">9 projets</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-shell pb-16">
                <div className="mb-8 flex items-center justify-between gap-3">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{t.home.popular}</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">{t.home.popularTitle}</h2>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {courses.map((course) => (
                        <article key={course.id} className="card-surface overflow-hidden p-5">
                            <div className="flex items-center justify-between">
                                <span className="badge">{course.category}</span>
                                <span className="text-sm font-semibold text-blue-600">{course.level}</span>
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-slate-900">{course.title}</h3>
                            <p className="mt-3 text-sm text-slate-600">{course.description}</p>
                            <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                                <span>{course.duration}</span>
                                <span>{course.students} apprenants</span>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-lg font-bold text-slate-900">{course.price}€</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
