import { Routes } from '@angular/router';
import { Home } from './components/home/home';

// Comando utilizado para mapear rotas
export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "home",
        component: Home
    }
];
