import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './exam-book.constants';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public getQuizzes() {
    return this.http.get(`${baseUrl}/quiz/`);
  }
}
