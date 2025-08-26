import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  {path: '', component: TitleComponent, pathMatch:'full', title: 'HOME'},
  // portfolio
  // portfolio/1
  // portfolio/1/abc
  {path: 'portfolio', component: CardComponent, title: 'PORTFÓLIO' , children: [
    {path: ':id', component: CardComponent},
    {path: ':id/:token', component: CardComponent},
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
