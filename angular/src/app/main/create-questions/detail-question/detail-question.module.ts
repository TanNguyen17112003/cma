import { NgModule } from '@angular/core';
import { EraseDialogComponent } from './erase-dialog/erase-dialog.component';
import { DetailQuestionComponent } from './detail-question.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { AppSharedModule } from '@app/shared/app-shared.module';




@NgModule({
  declarations: [DetailQuestionComponent, EraseDialogComponent, SuccessDialogComponent],
  imports: [AppSharedModule]
})
export class DetailQuestionModule {}
