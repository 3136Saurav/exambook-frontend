import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import { QuizInstructionsComponent } from '../quiz-instructions/quiz-instructions.component';

@Component({
  selector: 'app-view-user-quizzes',
  templateUrl: './view-user-quizzes.component.html',
  styleUrls: ['./view-user-quizzes.component.css']
})
export class ViewUserQuizzesComponent implements OnInit {
  categoryId = 'all';
  quizzes = []
  allQuizzes = []

  constructor(private route: ActivatedRoute, public instructionDialog: MatDialog, private quizService: QuizService) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = this.route.snapshot.params['categoryId']
      console.log(params);

      this.quizService.getQuizzes().subscribe((data: any) => {
        this.allQuizzes = data;
        console.log(this.quizzes);
      }, (error) => {
        console.log(error);
      })

      if (this.categoryId?.toLowerCase() == 'all') {
          this.quizzes = this.allQuizzes
      } else {
        this.quizzes = this.allQuizzes.filter(quiz => quiz.category.id == this.categoryId)
      }
    })
  }

  openInstructionsDialog(quizId) {
    const instructionDialogRef = this.instructionDialog.open(QuizInstructionsComponent, {
    
      width: '500px',
      height: '300px',
      data: {quizId: quizId}
    
    })
  }
}
