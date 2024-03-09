import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestFileUploadComponent} from './test-file-upload.component';

const routes: Routes = [{
    path: '',
    component: TestFileUploadComponent,
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TestFileUploadRoutingModule {}