import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-quiz-questions',
  templateUrl: './add-quiz-questions.component.html',
  styleUrls: ['./add-quiz-questions.component.css']
})
export class AddQuizQuestionsComponent implements OnInit {
  public Editor = ClassicEditor;

  @ViewChild("addQuestionForm") questionForm: NgForm
  quizId = null;

  question = {
    quiz: {},
    description: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }
  
  constructor(private route: ActivatedRoute, private questionService: QuestionService, private router: Router) {}

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId']
    this.question.quiz['id'] = this.quizId
  }

  onAddQuestionFormSubmit() {
    if (!this.questionForm.valid) {
      return;
    }

    this.questionService.addQuestion(this.question).subscribe((data) => {
      
      console.log("Question Added Successfully");
      console.log(data);
      this.router.navigate(['/admin/viewQuestions/' + this.quizId]);
    }, (error) => {
      console.log(error); 
    })
  }


}
