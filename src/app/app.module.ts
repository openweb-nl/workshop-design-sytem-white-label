import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { SharedUiButtonModule } from '@design-system/shared/ui-button';
import { ThemeWrapperComponent } from './theme-wrapper/theme-wrapper.component';

@NgModule({
  declarations: [AppComponent, ThemeWrapperComponent],
  imports: [
    BrowserModule,
    SharedUiButtonModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
