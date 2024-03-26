import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { Question } from '../model/question';
import { CreateQuestionInput, QuestionServiceProxy } from '@shared/service-proxies/service-proxies';
@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent implements OnInit {

  constructor(
    public questionService: QuestionService,
    public questionServiceTest: QuestionServiceProxy  
  ) { }

  ngOnInit(): void {
  }
  @Input() id: string;
  @Input() questionInput: Question;
  // questionLength = this.questionService.questionList.length;
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
  // questionTest = new CreateQuestionInput({
  //   content: this.questionContent,
  //   answer: this.rightAnswer
  // })
  checkValidData () {
    if (this.questionType === 'Multiple choice' || this.questionType === 'True/False') {
      if (this.questionContent === "") {
        return false;
      }
      if (this.rightAnswer === "") {
        return false;
      }
      return true;
    }
    else {
      if (this.questionContent === "") {
        return false;
      }
      return true;
    }
  }
  setData() {
    this.questionServiceTest.createQuestion(new CreateQuestionInput({
      content: "test",
      answer: "answer"
    }))
    this.showSuccessDialog = true;
    setTimeout(() => {
      this.showSuccessDialog = false;
    }, 2000);
  }
}
