import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from './app.routing';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule,
        MatInputModule, MatSelectModule, MatSliderModule,
        MatSlideToggleModule, MatToolbarModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import 'hammerjs';


import { LoginService } from './services/login.service';
import { AddBookService } from './services/add-book.service';
import { UploadImageService } from './services/upload-image.service';
import { GetBookListService } from './services/get-book-list.service';
import { GetBookService } from './services/get-book.service';
import { EditBookService } from './services/edit-book.service';
import { RemoveBookService } from './services/remove-book.service';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewBookComponent } from './components/add-new-book/add-new-book.component';
import { BookListComponent, DialogResultExampleDialog } from './components/book-list/book-list.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBookComponent,
    BookListComponent,
    DialogResultExampleDialog,
    ViewBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatGridListModule,
    MatInputModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule,
    MatFormFieldModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [LoginService,
  AddBookService,
  UploadImageService,
  GetBookListService,
  GetBookService,
  GetBookService,
  EditBookService,
  RemoveBookService],
  bootstrap: [AppComponent],
  entryComponents: [DialogResultExampleDialog]
})
export class AppModule { }
