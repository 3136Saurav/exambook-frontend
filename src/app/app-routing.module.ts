import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { NormalDashboardComponent } from './pages/normal/normal-dashboard/normal-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuizQuestionsComponent } from './pages/admin/add-quiz-questions/add-quiz-questions.component';
import { ViewUserQuizzesComponent } from './pages/normal/view-user-quizzes/view-user-quizzes.component';
import { StartQuizComponent } from './pages/normal/start-quiz/start-quiz.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [adminGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      }, 
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      }, 
      {
        path: 'addCategory',
        component: AddCategoryComponent,
      }, 
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      }, 
      {
        path: 'addQuiz',
        component: AddQuizComponent,
      },
      {
        path: 'updateQuiz/:quizId',
        component: UpdateQuizComponent
      },
      {
        path: 'viewQuestions/:quizId',
        component: ViewQuizQuestionsComponent
      },
      {
        path: 'addQuizQuestions/:quizId',
        component: AddQuizQuestionsComponent
      },
    ]
  },  
  {
    path: 'normal',
    component: NormalDashboardComponent,
    canActivate: [normalGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      }, 
      {
        path: ':categoryId',
        component: ViewUserQuizzesComponent
      },
    ]
  }, 
  {
    path: 'startQuiz/:quizId',
    component: StartQuizComponent,
    canActivate: [normalGuard],
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
