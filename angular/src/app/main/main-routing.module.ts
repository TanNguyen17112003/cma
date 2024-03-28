import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: 'dashboard',
                        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                        // data: { permission: 'Pages.Tenant.Dashboard' },
                    },
                    {
                        path: 'create-questions',
                        loadChildren: () => import('./create-questions/create-questions.module').then(m => m.CreateQuestionsModule)
                        // data: {permission: 'Page.Tenant.CreateQuestions'}
                    },                    
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class MainRoutingModule {}