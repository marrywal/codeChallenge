import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseTwoComponent } from './components/choose-two/choose-two.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { CryptographyComponent } from './components/cryptography/cryptography.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: 'choose-two', component: ChooseTwoComponent },
  { path: 'crypto', component: CryptographyComponent },
  { path: '',   redirectTo: '/overview', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
