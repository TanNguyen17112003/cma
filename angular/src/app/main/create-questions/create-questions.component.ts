import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from './service/question.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { appModuleAnimation } from '@shared/animations/routerTransition';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css'],
  animations: [appModuleAnimation()],
})
export class CreateQuestionsComponent implements OnInit {
  @ViewChild("staticTabs") staticTabs?: TabsetComponent;
  @ViewChild("examConfig") examConfig?: ExamDetailComponent;
  questionTabDisabled = true;
  examId = null;
  showSuccessDialog = false;
  constructor(public questionService: QuestionService) { }

  ngOnInit() {
  }
  
  enable(e: boolean) {
    this.questionTabDisabled = !e;
  }

  saveConfig() {
    if (!this.staticTabs.tabs[1].active) {
      this.examId = this.examConfig.post();
      this.staticTabs.tabs[1].active = true;
      return;
    }
    this.showSuccessDialog = true;
    setTimeout(() => {
      this.showSuccessDialog = false;
    }, 3000);
  }
}