import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from './service/question.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { DetailQuestionComponent } from './detail-question/detail-question.component';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {
  @ViewChild("staticTabs") staticTabs?: TabsetComponent;
  questionTabDisabled = true;
  
  constructor(public questionService: QuestionService) { }

  ngOnInit() {
  }
  
  enable(e: boolean) {
    this.questionTabDisabled = !e;
  }

  navigateToQuestionTab() {
    this.staticTabs.tabs[1].active = true;
  }
}