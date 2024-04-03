export class Question {
    id: number;
    examId: number;
    questionType: string;
    questionPoint: number;
    questionContent: string;
    rightAnswer: string;
    wrongAnswers: string[];
}
