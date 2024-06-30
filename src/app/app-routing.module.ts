import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Editor1Component } from './editor1/editor1.component';
import { Editor2Component } from './editor2/editor2.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'editor1',
    pathMatch: 'full',
  },
  { path: 'editor1', component: Editor1Component },
  { path: 'editor2', component: Editor2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
