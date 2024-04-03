import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from './service/question.service';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { QuestionServiceProxy, ExamServiceProxy, CreateQuestionInput } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.css'],
  animations: [appModuleAnimation()],
})
export class ViewExamComponent implements OnInit {
  @ViewChild("staticTabs") staticTabs?: TabsetComponent;
  @ViewChild("examConfig") examConfig?: ExamDetailComponent;
  questionTabDisabled = true;
  examId = null;
  showSuccessDialog = false;
  constructor(
    public questionService: QuestionService,
    private _questionService: QuestionServiceProxy,
    private _examService: ExamServiceProxy
    ) { }

  ngOnInit() {
  }
  
  enable(e: boolean) {
    this.questionTabDisabled = e;
  }

  saveConfig() {
    if (!this.staticTabs.tabs[1].active) {
      this.staticTabs.tabs[1].active = true;
      return;
    }
    this.examConfig.post().subscribe(
      (id) => {
        this.examId = id;
        for (let i = 0; i < this.questionService.questionList.length; i++) {
          let newQuestionRequest = new CreateQuestionInput({
            id: this.questionService.questionList[i].id,
            point: this.questionService.questionList[i].questionPoint,
            question_type: this.questionService.questionList[i].questionType,
            content: this.questionService.questionList[i].questionContent,
            answer: this.questionService.questionList[i].rightAnswer,
            examId: this.examId
          })
          this._questionService.createQuestion(newQuestionRequest).subscribe();
        }
      }
    );
    
    this.showSuccessDialog = true;
    setTimeout(() => {
      this.showSuccessDialog = false;
    }, 3000);
  }
}