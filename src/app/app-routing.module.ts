import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToasterComponent } from './component/toaster/toaster.component';
import { HomeComponent } from './component/home/home.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { SelectComponent } from './component/select/select.component';
import { InputComponent } from './component/input/input.component';
import { ButtonComponent } from './component/button/button.component';
import { PostRoutingModule } from './component/post/post-routing.module';
import { PostModule } from './component/post/post.module';




const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'dialog', component: DialogComponent},
  { path: 'toaster', component: ToasterComponent },
  {path: 'select', component: SelectComponent},
  {path: 'input', component: InputComponent},
  {path: 'button', component: ButtonComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
