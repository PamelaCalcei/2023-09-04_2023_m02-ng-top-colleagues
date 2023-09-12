  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { SharedModule } from './shared/shared.module';
  import { AppComponent } from './app.component';
  import { WelcomeModule } from './pages/welcome/welcome.module';
  import { HttpClientModule } from '@angular/common/http';
  import { CreateColleagueModule } from './pages/create-colleague/create-colleague.module';
  import { FormsModule } from '@angular/forms';
  import { ReactiveFormsModule } from '@angular/forms';




  @NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
      BrowserModule,
      SharedModule,
      WelcomeModule,
      HttpClientModule,
      CreateColleagueModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }