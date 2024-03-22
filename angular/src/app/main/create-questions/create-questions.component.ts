import { Component, OnInit } from '@angular/core';
import { DetailQuestionComponent } from './detail-question/detail-question.component';
import { QuestionService } from './service/question.service';


@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.css']
})
export class CreateQuestionsComponent implements OnInit {
  
  constructor(public questionService: QuestionService) { }

  ngOnInit() {
  }
  
}