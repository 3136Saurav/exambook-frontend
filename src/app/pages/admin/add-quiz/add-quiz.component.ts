import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  @ViewChild("addQuizForm") quizForm: NgForm

  constructor(private categotryService: CategoryService, private quizService: QuizService, private router: Router,  private _snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    this.categotryService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.categories = data
    }, (error) => {
      console.log(error);
    })
  }

  public quiz = {
      title: '',
      description: '',
      maximumMarks: '',
      numberOfQuestions: '',
      active: false,
      category: {
        id: ''
      }
  }
  
categories = [
  // {id: 1, title: 'Programming'}, {id: 2, title: 'SQL'},
]

  onAddQuizFormSubmit() {
    if (!this.quizForm.valid) {
      return;
    }

    this.quizService.addQuiz(this.quiz).subscribe((data) => {
      console.log(data)
      this.router.navigate(['/admin/quizzes'])
    }, (error) => {
      console.log(error)
      this._snackBar.open('Something went wrong', '', {
        duration: 2000
      })
    })
  }

}
