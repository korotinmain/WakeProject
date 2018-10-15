import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { FeedComponent } from './pages/feed/feed.component';

const routes: Routes = [
    {path: '', redirectTo: 'feed', pathMatch: 'full'},
    {path: 'login', component: AuthenticationComponent},
    {path: 'feed', component: FeedComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
