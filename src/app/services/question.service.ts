import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './exam-book.constants';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public getQuizQuestions(quizId) {
    return this.http.get(`${baseUrl}/question/quiz/${quizId}`)
  }

  public addQuestion(question) {
    return this.http.post(`${baseUrl}/question/`, question);
  }

  public deleteQuestion(questionId) {
    return this.http.delete(`${baseUrl}/question/${questionId}`, {responseType: 'text'})
  }
}
