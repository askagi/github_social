import { lazy } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const DefaultLayout = lazy(async () => import('../layout/DefaultLayout').then((m) => ({ default: m.DefaultLayout })));
const SignUp = lazy(async () => import('../pages/SingUp').then((m) => ({ default: m.SignUp })));
const SignIn = lazy(async () => import('../pages/SignIn').then((m) => ({ default: m.SignIn })));
const Main = lazy(async () => import('../pages/Main').then((m) => ({ default: m.Main })));
const Page404 = lazy(async () => import('../pages/Page404').then((m) => ({ default: m.Page404 })));

function ProtectedRoutes({ redirectTo }) {
    const token = true;

    return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

export function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<SignIn />} >
                    <Route path='/sign-in' element={<SignIn />} />
                </Route>

                <Route path='/sign-up' element={<SignUp />} />

                <Route element={<ProtectedRoutes redirectTo='/' />} >
                    <Route path='/main' element={<Main />} />
                </Route>

                <Route path='*' element={<Page404 />} />
            </Route>
        </Routes>
    )
}