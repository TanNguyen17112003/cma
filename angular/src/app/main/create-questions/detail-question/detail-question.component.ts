import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { Question } from '../model/question';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent implements OnInit {

  constructor(public questionService: QuestionService) { }

  ngOnInit(): void {
  }
  @Input() id: string;
  @Input() questionInput: Question;
  typeList = ["Multiple choice", "True/False", "Short answer", "Essay"];
  questionType: string = "Multiple choice";
  showDialog = false;
  showSuccessDialog = false;
  questionPoint: number = 1;
  questionContent: string = "";
  rightAnswer: string = "";
  wrongAnswers: string[] = [];
  setQuestionType(type: string) {
    this.questionType = type;
  }
  setQuestionPoint(point: number) {
    this.questionPoint = point;
  }
  setQuestionContent(content: string) {
    this.questionContent = content;
  }
  setRightAnswer(answer: string) {
    this.rightAnswer = answer;
  }
  setWrongAnswers(answer: string) {
    this.wrongAnswers.push(answer);
  }
  
  openDialog() {
    this.showDialog = true;
  }
  deleteQuestion() {
    this.questionService.deleteQuestion(this.questionInput);
    this.showDialog = false;
  }
  closeDialog() {
    this.showDialog = false;
  }
  setData() {
    this.questionService.setTypeQuestion(this.questionInput, this.questionType);
    this.questionService.setPointQuestion(this.questionInput, this.questionPoint);
    this.questionService.setContentQuestion(this.questionInput, this.questionContent);
    this.questionService.setRightAnswer(this.questionInput, this.rightAnswer);
    this.questionService.setWrongAnswers(this.questionInput, this.wrongAnswers);
    this.showSuccessDialog = true;
    setTimeout(() => {
      this.showSuccessDialog = false;
  }, 2000);
  }
}
