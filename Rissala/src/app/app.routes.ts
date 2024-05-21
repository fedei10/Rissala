import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErrorComponent } from './error/error.component';
import { ForgotPasswordComponent } from '../app/forgot-password/forgot-password.component';
import { GuestContentComponent } from './guest-content/guest-content.component';
import { ProfilComponent } from './profil/profil.component';
import { AddRissalaFormComponent } from './add-rissala-form/add-rissala-form.component';
import { AddKeywordsComponent } from './add-keywords/add-keywords.component';
import { DashboardInterfaceComponent } from './dashboard-interface/dashboard-interface.component';
import { RissalaPostComponent } from './rissala-post/rissala-post.component';


export const routes: Routes = [

    {path:'',component:MainComponent},
    {path:'findCreators',component:GuestContentComponent},
    {path:'edit',component:EditComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'forgot',component:ForgotPasswordComponent},
    {path:'sidebar',component:SidebarComponent,children:[
        {path:'dashboard',component:DashboardComponent},
        {path:'posts',component:DashboardInterfaceComponent},
        {path:'create',component:AddRissalaFormComponent},
        {path:'addKeywords/:postId',component:AddKeywordsComponent},
    ]},
    {path:'createur/:user_id',component:ProfilComponent},
    {path:'Rissala/:post_id',component:RissalaPostComponent},
    {path:'**',component:ErrorComponent}

];
