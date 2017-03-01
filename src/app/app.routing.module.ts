import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '',          redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'about',     loadChildren: './about#AboutModule' },
    { path: 'dashboard', loadChildren: './dashboard#DashboardModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

