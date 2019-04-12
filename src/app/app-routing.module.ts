import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { FinishComponent } from './components/finish/finish.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '404', component: NotFoundComponent },
  { path: 'evaluation', component: EvaluationComponent },
  { path: 'finish', component: FinishComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
