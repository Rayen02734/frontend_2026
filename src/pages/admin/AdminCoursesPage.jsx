import { BookOpen } from 'lucide-react';
import { courses } from '../../data/courses';

export default function AdminCoursesPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Catalogue</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Formations</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {courses.map((course) => (
                    <article key={course.id} className="card-surface p-5">
                        <div className="flex items-center justify-between">
                            <div className="rounded-xl bg-blue-100 p-2 text-blue-700">
                                <BookOpen className="h-5 w-5" />
                            </div>
                            <span className="badge">{course.level}</span>
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-slate-900">{course.title}</h3>
                        <p className="mt-3 text-sm text-slate-600">{course.description}</p>
                        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                            <span>{course.students} apprenants</span>
                            <span>{course.rating} ★</span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
