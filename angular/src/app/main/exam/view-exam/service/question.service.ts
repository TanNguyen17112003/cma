import { Injectable } from '@angular/core';
import { Question } from '../model/question';
import { QuestionInExamListDto } from '@shared/service-proxies/service-proxies';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionList: Question[] = [];
  examId = null;
  constructor() { }
  addQuestion(question?: QuestionInExamListDto) {
    let newQuestion: Question;
    if (question) {
      newQuestion = {
        id: question.id,
        questionType: question.question_type,
        questionPoint: question.point,
        questionContent: question.content,
        rightAnswer: question.answer,
        wrongAnswers: []
      };
    } else {
      const id = this.questionList.length + 1;
      newQuestion = {
        id: id,
        questionType: "Multiple choice",
        questionPoint: 1,
        questionContent: "",
        rightAnswer: "",
        wrongAnswers: [],
        created: true
      }
    }
    this.questionList.push(newQuestion);
  }
  setExamId(id: number) {
    this.examId = id;
  }
  getExamId() {
    return this.examId;
  }
  deleteQuestion(question: Question) {
    let index = this.questionList.indexOf(question);
    if (this.questionList[index].created) {
      this.questionList.splice(index, 1);
    } else {
      this.questionList[index].deleted = true;
    }
  }

  setWrongAnswers(question: Question, answer: string[]) {
    let index = this.questionList.indexOf(question);
    this.questionList[index].wrongAnswers = answer;
  }

  clear() {
    this.questionList = [];
    this.examId = null;
  }
}
