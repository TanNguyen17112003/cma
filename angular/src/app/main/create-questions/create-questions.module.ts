import { NgModule } from '@angular/core';
import { CreateQuestionsRoutingModule } from './create-questions-routing.module';
import { CreateQuestionsComponent } from './create-questions.component';
import { FileUploadComponent } from '../test-file-upload/file-upload/file-upload.component';
import { EditorModule } from 'primeng/editor';
import {AppSharedModule} from '@app/shared/app-shared.module';
// import { TestFileUploadModule } from '../test-file-upload/test-file-upload.module';
import { DetailQuestionComponent } from './detail-question/detail-question.component';



@NgModule({
  declarations: [CreateQuestionsComponent, FileUploadComponent, DetailQuestionComponent],
  imports: [AppSharedModule, CreateQuestionsRoutingModule, EditorModule]
})
export class CreateQuestionsModule {}
