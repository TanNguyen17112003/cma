import { NgModule } from '@angular/core';
import { EraseDiaogComponent } from './erase-diaog/erase-diaog.component';
import { DetailQuestionComponent } from './detail-question.component';
import { AppSharedModule } from '@app/shared/app-shared.module';




@NgModule({
  declarations: [DetailQuestionComponent, EraseDiaogComponent],
  imports: [AppSharedModule]
})
export class CreateQuestionsModule {}
