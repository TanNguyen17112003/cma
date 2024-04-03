import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { Question } from '../model/question';

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent implements OnInit {

  constructor(
    public questionService: QuestionService
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
  isProssibleDeleted = false;
  setQuestionType(type: string) {
    this.questionContent = "";
    this.wrongAnswers = [];
    this.questionType = type;
    this.questionService.setTypeQuestion(this.questionInput, this.questionType);
  }
  setQuestionContent(content: string) {
    this.questionContent = content;
    this.questionService.setContentQuestion(this.questionInput, this.questionContent);
  }
  setQuestionPoint(point: number) {
    this.questionService.setPointQuestion(this.questionInput, point);
  }
  setRightAnswer(answer: string) {
    this.rightAnswer = answer;
    this.questionService.setRightAnswer(this.questionInput, this.rightAnswer);
    console.log(this.questionService.questionList)
  }
  setWrongAnswers(answer: string) {
    this.wrongAnswers.push(answer);
    this.questionService.setWrongAnswers(this.questionInput, this.wrongAnswers);
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
    if (this.questionType === 'Multiple choice') {
      return (this.questionContent && this.rightAnswer && this.wrongAnswers.length === 3 && this.questionPoint)
    }
    if (this.questionType === 'True/False') {
      return (this.questionContent && this.rightAnswer && this.wrongAnswers.length >= 1 && this.questionPoint)
    }
    else {
      return this.questionContent && this.questionPoint;
    }
  }
    setData() {
      
      this.isProssibleDeleted = true
     
  }
}
