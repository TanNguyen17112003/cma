import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateQuestionsComponent} from './create-questions.component';

const routes: Routes = [{
    path: '',
    component: CreateQuestionsComponent,
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreateQuestionsRoutingModule {}