import { SendHorizonal, Sparkles, UserRound } from 'lucide-react';

const messages = [
    { id: 1, sender: 'assistant', text: 'Bienvenue Amina ! Votre progression sur le parcours React est de 76%.', meta: 'IA Coach' },
    { id: 2, sender: 'user', text: 'Quel est le prochain sujet à revoir pour maximiser ma progression ?', meta: 'Vous' },
    { id: 3, sender: 'assistant', text: 'Je te recommande de revoir les hooks avancés et la gestion d’état avant de passer à la phase projet.', meta: 'IA Coach' },
];

export default function StudentChatPage() {
    return (
        <div className="space-y-6">
            <div className="card-surface p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Assistant</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">Agent IA Grow Up</h2>
            </div>

            <div className="card-surface p-5">
                <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-xl bg-violet-100 p-2 text-violet-700">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                        <p className="font-semibold text-slate-900">Coach IA</p>
                        <p className="text-sm text-slate-500">Disponible pour répondre à vos questions</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xl rounded-2xl px-4 py-3 ${message.sender === 'user' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'}`}>
                                <p className="text-sm font-medium opacity-80">{message.meta}</p>
                                <p className="mt-1 text-sm">{message.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className="rounded-full bg-white p-2 text-slate-500">
                        <UserRound className="h-4 w-4" />
                    </div>
                    <input
                        type="text"
                        placeholder="Écrire votre message..."
                        className="flex-1 border-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                    />
                    <button className="rounded-full bg-violet-600 p-2.5 text-white hover:bg-violet-500">
                        <SendHorizonal className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
