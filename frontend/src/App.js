import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import '../src/index.css';

const Login = lazy(() => import('./pages/login'));
const Login1 = lazy(() => import('./pages/login1'));
const SignUp = lazy(() => import('./pages/sign-up'));
const SignUp1 = lazy(() => import('./pages/sign-up1'));
const Homepage = lazy(() => import('./pages/homepage'));
const NotFound = lazy(() => import('./pages/not-found'));
const UserDashboard = lazy(() => import('./pages/user-dashboard'));
const UserDashboard1 = lazy(() => import('./pages/user-dashboard1'));
const Inbox = lazy(() => import('./pages/inbox'));
const RegisterSteps = lazy(() => import('./pages/register-steps'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading... </p>}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} exact />
          <Route path={ROUTES.LOGIN1} element={<Login1 />} exact />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} exact />
          <Route path={ROUTES.SIGN_UP1} element={<SignUp1 />} exact />
          <Route path={ROUTES.HOMEPAGE} element={<Homepage />} exact />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          <Route path={ROUTES.USER_DASHBOARD} element={<UserDashboard />} />
          <Route path={ROUTES.USER_DASHBOARD1} element={<UserDashboard1 />} />
          <Route path={ROUTES.INBOX} element={<Inbox />} />
          <Route path={ROUTES.REGISTER_STEPS} element={<RegisterSteps />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
