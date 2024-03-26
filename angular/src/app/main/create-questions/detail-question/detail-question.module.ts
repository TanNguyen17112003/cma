import { NgModule } from '@angular/core';
import { EraseDiaogComponent } from './erase-diaog/erase-diaog.component';
import { DetailQuestionComponent } from './detail-question.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { AppSharedModule } from '@app/shared/app-shared.module';




@NgModule({
  declarations: [DetailQuestionComponent, EraseDiaogComponent, SuccessDialogComponent],
  imports: [AppSharedModule]
})
export class DetailQuestionModule {}
