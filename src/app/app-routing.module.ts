import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailPromptComponent } from './email-prompt/email-prompt.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: '', component: EmailPromptComponent },
  { path: 'event', component: EventsComponent },
  { path: '**', pathMatch: 'full', component: EmailPromptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
