import { ArrowRight, Search, ShoppingCart, Trash2, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { getTranslations } from '../i18n';
import useAppStore from '../store/appStore';
import { courses } from '../data/courses';

export default function CoursesPage() {
    const cart = useAppStore((state) => state.cart);
    const addToCart = useAppStore((state) => state.addToCart);
    const removeFromCart = useAppStore((state) => state.removeFromCart);
    const clearCart = useAppStore((state) => state.clearCart);
    const language = useAppStore((state) => state.language);
    const t = getTranslations(language);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const cartCount = useMemo(
        () => cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    const cartTotal = useMemo(
        () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
        [cart]
    );

    const filteredCourses = useMemo(() => {
        if (!searchTerm.trim()) return courses;

        const query = searchTerm.toLowerCase();

        return courses.filter((course) => {
            const searchableText = [
                course.title,
                course.category,
                course.description,
                course.level,
                ...course.tags,
            ]
                .join(' ')
                .toLowerCase();

            return searchableText.includes(query);
        });
    }, [searchTerm]);

    const handleBuy = (course) => {
        addToCart(course);
        setIsCartOpen(true);
    };

    return (
        <div className="container-shell py-16">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{t.coursesPage.catalog}</p>
                    <h1 className="mt-3 text-4xl font-black text-slate-900">{t.coursesPage.title}</h1>
                </div>

                <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
                        <Search className="h-4 w-4 text-slate-500" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                            placeholder={t.common.search}
                            className="w-40 border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            aria-label={t.common.search}
                        />
                    </label>

                    <button
                        type="button"
                        onClick={() => setIsCartOpen(true)}
                        className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-100"
                    >
                        <ShoppingCart className="h-4 w-4 text-blue-600" />
                        {t.common.cart} ({cartCount})
                    </button>
                </div>
            </div>

            {filteredCourses.length === 0 ? (
                <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
                    <h2 className="text-2xl font-bold text-slate-900">Aucun cours trouvé</h2>
                    <p className="mt-2 text-sm text-slate-500">Essayez un autre mot-clé pour retrouver le bon parcours.</p>
                </div>
            ) : (
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {filteredCourses.map((course) => (
                        <article key={course.id} className="card-surface overflow-hidden p-0">
                            <div className="relative h-52 overflow-hidden">
                                <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                                <div className="absolute left-4 top-4 flex items-center gap-2">
                                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-800">{course.category}</span>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                                    <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
                                        {course.level}
                                    </span>
                                    <span className="text-sm font-medium">{course.students} apprenants</span>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center justify-between text-sm text-slate-500">
                                    <span>{course.duration}</span>
                                    <span>{course.lessons} leçons</span>
                                </div>

                                <h2 className="mt-4 text-xl font-bold text-slate-900">{course.title}</h2>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {course.tags.map((tag) => (
                                        <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-between">
                                    <span className="text-2xl font-black text-slate-900">{course.price} TND</span>
                                    <span className="text-sm text-slate-500">{course.rating}/5</span>
                                </div>

                                <div className="mt-6 flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => handleBuy(course)}
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
                                    >
                                        <ShoppingCart className="h-4 w-4" />
                                        Acheter
                                    </button>
                                    <button
                                        type="button"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                                    >
                                        Découvrir
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}

            {isCartOpen && (
                <div className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
            )}

            <aside
                className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{t.common.cart}</p>
                        <h2 className="mt-1 text-2xl font-black text-slate-900">{t.coursesPage.cartTitle}</h2>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsCartOpen(false)}
                        className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                        aria-label={t.coursesPage.close}
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-5">
                    {cart.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white">
                                <ShoppingCart className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{t.coursesPage.emptyTitle}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                {t.coursesPage.emptyText}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                                    <div className="flex gap-3">
                                        <img src={item.image} alt={item.title} className="h-20 w-20 rounded-xl object-cover" />

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                                                    <p className="mt-1 text-xs text-slate-500">{item.category}</p>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="rounded-full p-1.5 text-slate-400 transition hover:bg-white hover:text-red-500"
                                                    aria-label={`Retirer ${item.title}`}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>

                                            <div className="mt-3 flex items-center justify-between">
                                                <span className="text-xs text-slate-500">{t.coursesPage.quantity} : {item.quantity}</span>
                                                <span className="text-sm font-black text-slate-900">
                                                    {item.price * item.quantity} TND
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="border-t border-slate-200 bg-slate-50 p-5">
                    <div className="mb-4 flex items-center justify-between text-sm text-slate-600">
                        <span>{t.coursesPage.subtotal}</span>
                        <span className="font-semibold text-slate-900">{cartTotal} TND</span>
                    </div>

                    <div className="mb-4 flex items-center justify-between text-sm text-slate-600">
                        <span>{t.coursesPage.serviceFees}</span>
                        <span className="font-semibold text-slate-900">0 TND</span>
                    </div>

                    <div className="mb-5 flex items-center justify-between border-t border-slate-200 pt-4 text-base font-black text-slate-900">
                        <span>{t.coursesPage.total}</span>
                        <span>{cartTotal} TND</span>
                    </div>

                    <div className="space-y-3">
                        <button
                            type="button"
                            className="w-full rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
                        >
                            {t.coursesPage.checkout}
                        </button>

                        <button
                            type="button"
                            onClick={clearCart}
                            className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                        >
                            {t.coursesPage.clearCart}
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
}
