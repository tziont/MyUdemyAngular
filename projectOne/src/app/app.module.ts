import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ResipeListComponent } from './components/recipe-book/resipe-list/resipe-list.component';
import { ResipeItemComponent } from './components/recipe-book/resipe-list/resipe-item/resipe-item.component';
import { ResipeDetailComponent } from './components/recipe-book/resipe-detail/resipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ResipeListComponent,
    ResipeItemComponent,
    ResipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
