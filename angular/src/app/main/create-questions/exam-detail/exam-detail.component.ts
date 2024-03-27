import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() validEvent = new EventEmitter<boolean>();
  selectedSubject = null;
  selectedType = null;
  startDate: Date = null;
  endDate: Date = null;
  time = 0;
  isRandom = false;
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
  

  constructor() { }

  ngOnInit(): void {
  }

  setSubject(e: any) {
    this.selectedSubject = e;
    this.checkValid();
  }

  setType(e: any) {
    this.selectedType = e;
    this.checkValid();
  }

  setPolicy(e: any) {
    this.selectedPolicy = e
  }

  checkValid() {
    if (this.selectedSubject != null && this.selectedType != null && this.time > 0 && this.startDate != null && this.endDate != null) this.validEvent.emit(true);
    else this.validEvent.emit(false);
  }
}