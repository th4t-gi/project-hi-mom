import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'warrior', redirectTo: 'warrior/home', pathMatch: 'full' },
  { path: 'warrior', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'yearbook', loadChildren: './yearbook/yearbook.module#YearbookPageModule' },
  { path: 'rusty', loadChildren: "./rusty/rusty.module#RustyPageModule" },
  { path: 'mom', loadChildren: './mom/mom.module#MomPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
