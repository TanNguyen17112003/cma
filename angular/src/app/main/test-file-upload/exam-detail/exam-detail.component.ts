import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'exam-detail-component',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {

  subjects = [
  {id: 1, name: "Quản lí dự án phần mềm"},
  {id: 2, name: "Nguyên lí ngôn ngữ lập trình"},
  {id: 3, name: "Lập trính Web"},
  ];

  type = ["Giữa kì", "Cuối kì"];

  policies = ["Cao nhất", "Lần nộp cuối cùng", "Trung bình"];

  selectedSubject = null;
  selectedType = null;
  isRandom = false;
  isTimed = false;
  time = 0;
  multipleAttempt = false;
  attemptCount = 0;
  selectedPolicy = null;
  allowMistakeReview = false;
  allowMistakeReviewLast = false;
  allowMistakeReviewAll = false;
  allowCorrectReview = false;
  allowCorrectReviewLast = false;
  oncePerQuestion = false
  requirePassword = false
  password = ""
  startDate = null
  endDate = null

  constructor() { }

  ngOnInit(): void {
  }

  setSubject(e: any) {
    this.selectedSubject = e
  }

  setType(e: any) {
    this.selectedType = e
  }

  setPolicy(e: any) {
    this.selectedPolicy = e
  }

}