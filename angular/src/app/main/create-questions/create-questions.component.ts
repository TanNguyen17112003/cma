import { Component, OnInit } from '@angular/core';
import { QuestionService } from './service/question.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {
  
  constructor(public questionService: QuestionService) { }

  ngOnInit() {
  }
  navigateToQuestionTab(tabset: TabsetComponent) {
    tabset.tabs[1].active = true;
  }
}