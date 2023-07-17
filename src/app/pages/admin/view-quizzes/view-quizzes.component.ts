import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  
    quizzes = [
      // {
      //   "title": "SQL Quiz",
      //   "description": "SQL Quiz For Beginners",
      //   "maximumMarks": 20,
      //   "numberOfQuestions": 20,
      //   "category": {
      //     "id": 45,
      //     "title": "Programming",
      //     "description": "Test your programming proficiency!"
      //   }
      // }
    ]
  
  constructor(private quizService: QuizService, private _snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe((quizzes: any) => {
      console.log(quizzes)
      this.quizzes = quizzes
    }, (error) => {
      console.log(error)
      this._snackBar.open('Something went wrong', '', {
        duration: 2000
      })
    })
  }
}
