import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', loadChildren: () => import('@suzy-core-poc/core').then((m) => m.CoreModule) },
      { path: 'mission', loadChildren: () => import('@suzy-core-poc/mission').then((m) => m.MissionModule) } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
