import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-instructions',
  templateUrl: './quiz-instructions.component.html',
  styleUrls: ['./quiz-instructions.component.css']
})
export class QuizInstructionsComponent implements OnInit {
  quizId;
  quiz;

  constructor(private dialogRef: MatDialogRef<QuizInstructionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private quizService: QuizService, private router: Router) {
      console.log("Constructor")
      console.log(data);
      this.quizId = data.quizId
  }

  ngOnInit(): void {
    console.log("On Init");
    this.quizService.getQuiz(this.quizId).subscribe((quizData) => {
      this.quiz = quizData;
    }, (error) => {
      console.log(error);
    })
  }


  startQuiz() {
    // Subscribe to the dialog's afterClosed event to get the data returned from the dialog
    console.log("Start Quiz");
    this.dialogRef.close()

    this.router.navigate(['/startQuiz/' + this.quizId])
  }


}
