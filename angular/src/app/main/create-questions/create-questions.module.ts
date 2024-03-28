import { NgModule } from '@angular/core';
import { CreateQuestionsRoutingModule } from './create-questions-routing.module';
import { CreateQuestionsComponent } from './create-questions.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { EditorModule } from 'primeng/editor';
import {AppSharedModule} from '@app/shared/app-shared.module';
// import { TestFileUploadModule } from '../test-file-upload/test-file-upload.module';
import { DetailQuestionComponent } from './detail-question/detail-question.component';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { EraseDialogComponent } from './detail-question/erase-dialog/erase-dialog.component';
import { SuccessDialogComponent } from './detail-question/success-dialog/success-dialog.component';
import { SubheaderModule } from '@app/shared/common/sub-header/subheader.module';



@NgModule({
  declarations: [CreateQuestionsComponent, FileUploadComponent, ExamDetailComponent, DetailQuestionComponent, EraseDialogComponent, SuccessDialogComponent],
  imports: [AppSharedModule, SubheaderModule, CreateQuestionsRoutingModule, EditorModule]
})
export class CreateQuestionsModule {}
