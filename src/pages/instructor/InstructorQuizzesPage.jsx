import { BrainCircuit, ListChecks } from 'lucide-react';
import { quizzes } from '../../data/quizzes';

export default function InstructorQuizzesPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Evaluation</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Quiz et exercices</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {quizzes.map((quiz) => (
                    <article key={quiz.id} className="card-surface p-5">
                        <div className="flex items-center justify-between">
                            <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
                                <BrainCircuit className="h-5 w-5" />
                            </div>
                            <span className="badge">{quiz.difficulty}</span>
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-slate-900">{quiz.title}</h3>
                        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                            <ListChecks className="h-4 w-4" />
                            {quiz.questions} questions · {quiz.duration}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
