import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule , Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QqqComponent } from './components/qqq/qqq.component';
import { FormsModule} from '@angular/forms';
import { KontaktiComponent } from './components/kontakti/kontakti.component';
import { FileComponent } from './components/file/file.component'; 
import { Input, Component} from '@angular/core';
      

const appRoutes: Routes = [
{path: 'countries', component:QqqComponent},
{path: '', component:KontaktiComponent},
{path: 'file', component:FileComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    QqqComponent,
    KontaktiComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
