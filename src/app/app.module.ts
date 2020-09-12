import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TextboxComponent } from './components/textbox/textbox.component';
import { InputcontainerComponent } from './components/inputcontainer/inputcontainer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { SubmitbuttonComponent } from './components/submitbutton/submitbutton.component';
import {MatButtonModule} from '@angular/material/button';
import { SnackbarerrorComponent } from './components/snackbarerror/snackbarerror.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TextboxComponent,
    InputcontainerComponent,
    SubmitbuttonComponent,
    SnackbarerrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
