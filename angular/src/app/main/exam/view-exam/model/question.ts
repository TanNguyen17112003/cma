export class Question {
    id: number;
    questionType: string;
    questionPoint: number;
    questionContent: string;
    rightAnswer: string;
    wrongAnswers: string[];
    created?: boolean;
    deleted?: boolean;
}
