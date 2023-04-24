import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { ButtonModule } from 'primeng/button';
import { PaginaTablaComponent } from './pages/pagina-tabla/pagina-tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoadingComponent,
    PaginaTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
