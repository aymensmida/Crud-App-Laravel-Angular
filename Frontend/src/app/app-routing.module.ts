import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { EditbookComponent } from './editbook/editbook.component';
import { AddbookComponent } from './addbook/addbook.component';

const routes: Routes = [
  { path: '', component: AllbooksComponent },
  { path: 'edit/:id', component: EditbookComponent },
  { path: 'create', component: AddbookComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
