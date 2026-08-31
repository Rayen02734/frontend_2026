import { BookOpen, Search } from 'lucide-react';
import { courses } from '../../data/courses';

export default function StudentCoursesPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Catalogue</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Mes formations</h2>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
                        <Search className="h-4 w-4" />
                        Rechercher un cours
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {courses.map((course) => (
                    <article key={course.id} className="card-surface overflow-hidden p-5">
                        <div className="flex items-center justify-between">
                            <span className="badge">{course.category}</span>
                            <span className="text-sm font-semibold text-blue-600">{course.level}</span>
                        </div>

                        <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                            <BookOpen className="h-5 w-5" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-slate-900">{course.title}</h3>
                        <p className="mt-3 text-sm text-slate-600">{course.description}</p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {course.tags.map((tag) => (
                                <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{tag}</span>
                            ))}
                        </div>

                        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                            <span>{course.duration}</span>
                            <span>{course.rating} ★</span>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="text-xl font-bold text-slate-900">{course.price}€</span>
                            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
                                Continuer
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
