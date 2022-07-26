import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppMain } from './app.component';
import { ToolTip } from './ToolTip/ToolTip.component';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from './Not-foundPage/not-found.component';
import { NavigatePathComponent } from './navigatePath.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: AppMain, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
    { path: '**', component: NotFoundComponent},
];

@NgModule({
    declarations: [AppMain, ToolTip, DashboardComponent, DashboardComponent, NotFoundComponent, NavigatePathComponent],
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    providers: [],
    bootstrap: [NavigatePathComponent],
})
export class AppModule {}
