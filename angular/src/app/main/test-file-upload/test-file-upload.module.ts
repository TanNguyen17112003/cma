import {NgModule} from '@angular/core';
import {AppSharedModule} from '@app/shared/app-shared.module';
import {TestFileUploadRoutingModule} from './test-file-upload-routing.module';
import {TestFileUploadComponent} from './test-file-upload.component';


@NgModule({
    declarations: [TestFileUploadComponent],
    imports: [AppSharedModule, TestFileUploadRoutingModule]
})
export class TestFileUploadModule {}