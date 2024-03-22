import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { appModuleAnimation } from '@shared/animations/routerTransition';

@Component({
    templateUrl: './test-file-upload.component.html',
    animations: [appModuleAnimation()]
})

export class TestFileUploadComponent extends AppComponentBase {
    url = '/FileUpload/UploadFile';


    constructor(
        injector: Injector
    ) {
        super(injector);
    }
}