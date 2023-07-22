import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {
  quizId = null
  quizTitle = null
  questions = []
  quiz = null;

  constructor(private questionService: QuestionService, private quizService: QuizService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId']
    this.quizService.getQuiz(this.quizId).subscribe((data : any) => {
      this.quiz = data;
      this.quizTitle = data.title

      this.questionService.getQuizQuestions(this.quizId).subscribe((data: any) => {
        this.questions = data;
        console.log(data);
      }, (error) => {
        console.log(error);
      })
      console.log(this.quiz)
    }, (error) => {
      console.log(error)
    })
  }


  onQuestionDelete(questionId) {
    this.questionService.deleteQuestion(questionId).subscribe((data) => {
      console.log(data);
      this.questions = this.questions.filter(question => question.id != questionId)
    }, (error) => {
      console.log(error)
    })
  }
}
