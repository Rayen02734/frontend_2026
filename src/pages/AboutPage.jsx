import { ArrowRight, BookOpen, BriefcaseBusiness, Rocket, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { getTranslations } from '../i18n';
import useAppStore from '../store/appStore';

const features = [
    {
        icon: BookOpen,
        titleKey: 'structured',
        descriptionKey: 'structuredText',
    },
    {
        icon: Users,
        titleKey: 'mentoring',
        descriptionKey: 'mentoringText',
    },
    {
        icon: Rocket,
        titleKey: 'results',
        descriptionKey: 'resultsText',
    },
];

const stats = [
    { value: '12k+', label: 'apprenants actifs' },
    { value: '92%', label: 'satisfaction client' },
    { value: '320', label: 'sessions animées' },
    { value: '24/7', label: 'suivi & assistance' },
];

export default function AboutPage() {
    const language = useAppStore((state) => state.language);
    const t = getTranslations(language);

    return (
        <div className="container-shell py-16 md:py-20">
            <section className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">{t.about.eyebrow}</p>
                    <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
                        {t.about.title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        {t.about.description}
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="card-surface p-5 text-center">
                            <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                            <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-20">
                <div className="mb-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{t.about.whyChoose}</p>
                    <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">{t.about.modelTitle}</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {features.map(({ icon: Icon, titleKey, descriptionKey }) => (
                        <div key={titleKey} className="card-surface p-6">
                            <div className="inline-flex rounded-2xl bg-blue-100 p-3 text-blue-700">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="mt-5 text-xl font-bold text-slate-900">{t.about[titleKey]}</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{t.about[descriptionKey]}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="card-surface p-8 md:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">{t.about.mission}</p>
                    <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">{t.about.missionTitle}</h2>
                    <p className="mt-5 text-base leading-7 text-slate-600">
                        {t.about.missionText}
                    </p>
                    <div className="mt-8 space-y-4">
                        <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                            <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
                            <div>
                                <p className="font-semibold text-slate-900">{t.about.trustTitle}</p>
                                <p className="text-sm text-slate-600">{t.about.trustText}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                            <BriefcaseBusiness className="mt-0.5 h-5 w-5 text-blue-600" />
                            <div>
                                <p className="font-semibold text-slate-900">{t.about.impactTitle}</p>
                                <p className="text-sm text-slate-600">{t.about.impactText}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-surface bg-slate-900 p-8 text-white md:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{t.about.difference}</p>
                    <h3 className="mt-4 text-2xl font-black">{t.about.differenceTitle}</h3>
                    <ul className="mt-6 space-y-4 text-sm text-slate-200">
                        <li className="flex items-center gap-3">
                            <Sparkles className="h-4 w-4 text-blue-300" />
                            {t.about.differenceList.split(',')[0].trim()}
                        </li>
                        <li className="flex items-center gap-3">
                            <Sparkles className="h-4 w-4 text-blue-300" />
                            {t.about.differenceList.split(',')[1].trim()}
                        </li>
                        <li className="flex items-center gap-3">
                            <Sparkles className="h-4 w-4 text-blue-300" />
                            {t.about.differenceList.split(',')[2].trim()}
                        </li>
                    </ul>

                    <button type="button" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                        {t.about.cta}
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>
            </section>
        </div>
    );
}
