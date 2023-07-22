import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  @ViewChild("updateQuizForm") quizForm: NgForm

  quizId = null;
  quiz = null;
  categories = [];

  constructor(private categotryService: CategoryService, private route: ActivatedRoute, private quizService: QuizService, private router: Router,  private _snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId']

    this.quizService.getQuiz(this.quizId).subscribe((data) => {
      this.quiz = data;
      
      this.categotryService.getCategories().subscribe((data: any) => {
        this.categories = data;
      }, (error) => {
        console.log(error)
        this._snackBar.open('Something went wrong', '', {
          duration: 2000
        })
      })
    }, (error) => {
      console.log(error)
      this._snackBar.open('Something went wrong', '', {
        duration: 2000
      })
    })

  }
  
  onUpdateForm() {
    if (!this.quizForm.valid) {
      return;
    }

    this.quizService.updateQuiz(this.quiz).subscribe((data) => {
      console.log("Quiz Updated Succesfully");
      this.router.navigate(["/admin/quizzes"])
    }, (error) => {
      console.log(error)
      this._snackBar.open('Something went wrong', '', {
        duration: 2000
      })
    })
  }

}
