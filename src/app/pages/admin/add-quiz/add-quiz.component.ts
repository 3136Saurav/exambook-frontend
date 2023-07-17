import { Component } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {

  public quiz = {
      "title": "",
      "description": "",
      "maximumMarks": "",
      "numberOfQuestions": "",
  }
  
categories = [
  {id: 1, title: 'Programming'}, {id: 2, title: 'SQL'},
]

  onAddQuizFormSubmit() {

  }

}
