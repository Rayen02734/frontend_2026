import { createBrowserRouter, Link, useRouteError } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import LandingPage from '../pages/LandingPage';
import CoursesPage from '../pages/CoursesPage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import StudentDashboardPage from '../pages/student/StudentDashboardPage';
import StudentCoursesPage from '../pages/student/StudentCoursesPage';
import StudentSessionsPage from '../pages/student/StudentSessionsPage';
import StudentQuizzesPage from '../pages/student/StudentQuizzesPage';
import StudentPaymentsPage from '../pages/student/StudentPaymentsPage';
import StudentChatPage from '../pages/student/StudentChatPage';
import InstructorDashboardPage from '../pages/instructor/InstructorDashboardPage';
import InstructorCoursesPage from '../pages/instructor/InstructorCoursesPage';
import InstructorSessionsPage from '../pages/instructor/InstructorSessionsPage';
import InstructorQuizzesPage from '../pages/instructor/InstructorQuizzesPage';
import InstructorStudentsPage from '../pages/instructor/InstructorStudentsPage';
import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import AdminUsersPage from '../pages/admin/AdminUsersPage';
import AdminCoursesPage from '../pages/admin/AdminCoursesPage';
import AdminPaymentsPage from '../pages/admin/AdminPaymentsPage';
import AdminSecurityPage from '../pages/admin/AdminSecurityPage';

function RouteErrorBoundary() {
    const error = useRouteError();

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
            <div className="card-surface max-w-lg p-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Grow Up</p>
                <h1 className="mt-4 text-3xl font-black text-slate-900">Une erreur inattendue s'est produite</h1>
                <p className="mt-3 text-slate-600">
                    Une défaillance est survenue dans l'application. Vous pouvez revenir à l'accueil pour reprendre votre navigation.
                </p>
                <p className="mt-4 text-sm text-slate-500">
                    {error instanceof Error ? error.message : 'Erreur inconnue'}
                </p>
                <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <RouteErrorBoundary />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: 'courses', element: <CoursesPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'login', element: <LoginPage /> },
            {
                path: 'student',
                element: <DashboardLayout />,
                children: [
                    { path: 'dashboard', element: <StudentDashboardPage /> },
                    { path: 'courses', element: <StudentCoursesPage /> },
                    { path: 'sessions', element: <StudentSessionsPage /> },
                    { path: 'quizzes', element: <StudentQuizzesPage /> },
                    { path: 'payments', element: <StudentPaymentsPage /> },
                    { path: 'chat', element: <StudentChatPage /> },
                ],
            },
            {
                path: 'instructor',
                element: <DashboardLayout />,
                children: [
                    { path: 'dashboard', element: <InstructorDashboardPage /> },
                    { path: 'courses', element: <InstructorCoursesPage /> },
                    { path: 'sessions', element: <InstructorSessionsPage /> },
                    { path: 'quizzes', element: <InstructorQuizzesPage /> },
                    { path: 'students', element: <InstructorStudentsPage /> },
                ],
            },
            {
                path: 'admin',
                element: <DashboardLayout />,
                children: [
                    { path: 'dashboard', element: <AdminDashboardPage /> },
                    { path: 'users', element: <AdminUsersPage /> },
                    { path: 'courses', element: <AdminCoursesPage /> },
                    { path: 'payments', element: <AdminPaymentsPage /> },
                    { path: 'security', element: <AdminSecurityPage /> },
                ],
            },
        ],
    },
]);

export default router;
