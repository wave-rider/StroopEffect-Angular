import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentComponent } from './experiment/experiment.component';
import { IndexComponent } from './index/index.component';
import { ReadyComponent } from './ready/ready.component';
import { Ready2Component } from './ready2/ready2.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [{ path:'', component: IndexComponent },
{ path: 'ready.html', component: ReadyComponent},
{ path: 'ready2.html', component: Ready2Component },
{ path: 'experiment.html', component: ExperimentComponent },
{ path: 'results.html', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
