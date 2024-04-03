import { Injectable } from '@angular/core';
import { CreateExamInput, ExamListDto } from '@shared/service-proxies/service-proxies';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class ExamConfigService {
    course: string;
    examType: string;
    startDate: Date;
    endDate: Date;
    time: number;
    isRandom: boolean;
    multipleAttempt: boolean;
    attemptCount: number;
    gradingPolicy: string;
    allowMistakeReview: boolean;
    allowMistakeReviewLast: boolean;
    allowMistakeReviewAll: boolean;
    allowCorrectReview: boolean;
    allowCorrectReviewLast: boolean;
    oncePerQuestion: boolean;
    requirePassword: boolean;
    password: string;

    constructor() {
        this.course = null;
        this.examType = null;
        this.startDate = null;
        this.endDate = null;
        this.time = 0;
        this.isRandom = false;
        this.multipleAttempt = false;
        this.attemptCount = 0;
        this.gradingPolicy = "Trung bình";
        this.allowMistakeReview = false;
        this.allowMistakeReviewLast = false;
        this.allowMistakeReviewAll = false;
        this.allowCorrectReview = false;
        this.allowCorrectReviewLast = false;
        this.oncePerQuestion = false
        this.requirePassword = false
        this.password = ""
    }

    setData(exam: ExamListDto) {
        console.log(exam);
        this.course = exam.course;
        this.examType = exam.exam_type;
        this.startDate = exam.start_date.toJSDate();
        this.endDate = exam.end_date.toJSDate();
        this.time = exam.working_time;
        this.isRandom = exam.mix_question;
        this.multipleAttempt = Boolean(exam.redo_num);
        this.attemptCount = exam.redo_num;
        this.gradingPolicy = exam.point_is_cal;
        this.allowMistakeReview = exam.review_wrong_ans;
        this.allowCorrectReview = exam.review_right_ans;
        this.oncePerQuestion = exam.view_question_one;
        this.requirePassword = Boolean(exam.require_password);
        this.password = exam.require_password;
    }

    getData(): CreateExamInput {
        return new CreateExamInput({
            working_time: this.time,
            mix_question: this.isRandom,
            redo_num: this.attemptCount,
            point_is_cal: this.gradingPolicy,
            review_wrong_ans: this.allowMistakeReview,
            review_right_ans: this.allowCorrectReview,
            view_question_one: this.oncePerQuestion,
            require_password: this.password,
            start_date: DateTime.fromJSDate(this.startDate),
            end_date: DateTime.fromJSDate(this.endDate),
            exam_type: this.course,
            course: this.examType,
        })
    }
}
