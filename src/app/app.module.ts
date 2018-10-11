import { MenuService } from './menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, MenubarComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {}
