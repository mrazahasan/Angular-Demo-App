import { SignUpComponent } from './sign-up/sign-up.component';
import { RoutesPageComponent } from './main-app/routesPage/routesPage.component';
import { UsersComponent } from './main-app/users/users.component';
import { MainAppComponent } from './main-app/main-app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ADMIN
import { AppComponent } from './app.component';


export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignUpComponent },
    {
        path: 'app', component: MainAppComponent,
        	  children: [
        		  { path: '', redirectTo: 'routes', pathMatch: 'full'},
        		  { path: 'users', component: UsersComponent},
        		  { path: 'routes', component: RoutesPageComponent}
        	  ]
    },
    //  { path: 'blank', component: BlankComponent },
    // 	{ path: 'Hierarchies', component: HierarchyComponent },
    //  { path: 'settings', component: SettingsComponent },
    // 	{ path: 'outlet', component: OutletComponent,
    // 		children: [
    // 			{ path: '', redirectTo: 'view', pathMatch: 'full' },
    // 			{ path: 'view', component: OutletViewComponent},
    // 			{ path: 'approval', component: OutletApprovalComponent},
    // 			{ path: 'create', component: OutletCreateComponent},
    // 		]
    // 	},
    // 	{ path: 'distributor', component: DistributorComponent },

    // 	{ path: '404', component: PageNotFoundComponent },
    // 	{path: '**', redirectTo: '/404'}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);