import { NgModule } from '@angular/core';
import { CreateQuestionsRoutingModule } from './create-questions-routing.module';
import { CreateQuestionsComponent } from './create-questions.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { EditorModule } from 'primeng/editor';
import {AppSharedModule} from '@app/shared/app-shared.module';
// import { TestFileUploadModule } from '../test-file-upload/test-file-upload.module';
import { DetailQuestionComponent } from './detail-question/detail-question.component';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { EraseDiaogComponent } from './detail-question/erase-diaog/erase-diaog.component';




@NgModule({
  declarations: [CreateQuestionsComponent, FileUploadComponent, ExamDetailComponent, DetailQuestionComponent, EraseDiaogComponent],
  imports: [AppSharedModule, CreateQuestionsRoutingModule, EditorModule]
})
export class CreateQuestionsModule {}
