import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
  quizId;
  questions;

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
    }, (error) => {
      console.log(error)
    })
  }

}
