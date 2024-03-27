import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from './service/question.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {
  @ViewChild("staticTabs") staticTabs?: TabsetComponent;
  @ViewChild("exam-detail-component") examConfig?: ExamDetailComponent;
  questionTabDisabled = true;
  examId = null;
  
  constructor(public questionService: QuestionService) { }

  ngOnInit() {
  }
  
  enable(e: boolean) {
    this.questionTabDisabled = !e;
  }

  async saveConfig() {
    this.staticTabs.tabs[1].active = true;
  }
}