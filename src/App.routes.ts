import { RouteConfig } from 'react-router-config';
import Login from './app/auth/login/Login';

export const routes: RouteConfig[] = [
    {
        path: ['/login'],
        component: Login,
    }
];
