import {NgModule} from '@angular/core';
import {AppSharedModule} from '@app/shared/app-shared.module';
import {TestFileUploadRoutingModule} from './test-file-upload-routing.module';
import {TestFileUploadComponent} from './test-file-upload.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
    declarations: [TestFileUploadComponent, FileUploadComponent],
    imports: [AppSharedModule, TestFileUploadRoutingModule]
})
export class TestFileUploadModule {}