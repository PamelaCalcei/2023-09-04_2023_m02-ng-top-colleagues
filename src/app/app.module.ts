import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { WelcomeModule } from './pages/welcome/welcome.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    WelcomeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }