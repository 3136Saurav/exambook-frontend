import { LocationStrategy } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
  @ViewChild("questionAnswerForm") questionAnswerForm: NgForm

  quizId;
  questions;
  totalMarksScored = 0
  totalQuestionsAttempted = 0;
  totalCorrectAnswers = 0;
  testSubmitted = false;
  maximumMarks = 0;
  passStatus = "FAIL"
  timer: any;
  len = 10;

  constructor(private locationStrategy: LocationStrategy, private route: ActivatedRoute, private questionService: QuestionService) {

  }

  preventBackButton() {
    history.pushState(null, null, location.href)
    this.locationStrategy.onPopState(() => {
      history.pushState(null, null, location.href);
    })
  }

  ngOnInit(): void {
    this.preventBackButton()
    this.quizId = this.route.snapshot.params['quizId']
    this.questionService.getQuizQuestions(this.quizId).subscribe((data) => {
      console.log(data)
      this.questions = data;
      this.questions.forEach(question => {
        question['givenAnswer'] = ''
      });
      
      this.timer = this.questions.length * 10;
      this.len = this.questions.length * 10;
      this.maximumMarks = this.questions[0].quiz.maximumMarks

      this.startTimer()
      console.log(this.questions)
    }, (error) => {
      console.log(error)
    })

    this.testSubmitted = false;
  }

  onSubmitTest() {
    console.log(this.questionAnswerForm.value)
    // this.questionAnswerForm.reset();

    for (let i=0; i < this.questions.length; i++) {
      console.log(this.questions[i].answer, this.questions[i].givenAnswer)
      if (this.questions[i].answer === this.questions[i]['givenAnswer']) {
        this.totalCorrectAnswers++;
      }       
      if (this.questions[i]['givenAnswer'] !== '') {
        this.totalQuestionsAttempted++;
      }

    }


    this.maximumMarks = this.questions[0].quiz.maximumMarks 

    let singleQuestionScore = this.maximumMarks / this.questions.length;
    this.totalMarksScored = singleQuestionScore * this.totalCorrectAnswers;
    
    if (this.totalMarksScored >= this.maximumMarks / 2) {
      this.passStatus = "PASS"
    }
    
    this.testSubmitted = true;
  }

  startTimer() {
    console.log("Timer Started")
    console.log(this.len)
    let timerRef = window.setInterval(() => {
      if (this.timer <= 0) {
        this.onSubmitTest();
        clearInterval(timerRef);
      } else {
        console.log(this.timer)

        this.timer--;
      }
    }, 1000)
  }

  getFormattedTime() {
    let minutes = Math.floor(this.timer / 60)
    let seconds = this.timer - (minutes * 60)
    return `${minutes} min : ${seconds} sec`
  }
}
