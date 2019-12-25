import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { FormsModule } from '@angular/forms';
import { DynamicComponent } from './dynamic/dynamic.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    DynamicComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule { }
