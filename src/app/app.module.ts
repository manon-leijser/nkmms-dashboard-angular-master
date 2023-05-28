import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrgentWarningComponent } from './urgent-warning.component/urgent-warning.component';
import { TopTenWarningsComponent } from './top-ten-warnings.component/top-ten-warnings.component';
import { WarningComponent } from './warning.component/warning.component';
import { FindWarningsComponent } from './find-warnings.component/find-warnings.component';
import { FormFindWarningsComponent } from './form-find-warnings/form-find-warnings.component';
import { CircuitComponentsComponent } from './circuit-components.component/circuit-components.component';
import { CircuitComponent } from './circuit.component/circuit.component';
import { WarningAnnotationComponent } from './warning-annotation.component/warning-annotation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomepageComponent } from './homepage.component/homepage.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxChartsComponent } from './ngx-charts.component/ngx-charts.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ApacheEchartComponent } from './apache-echart.component/apache-echart.component';
import * as PlotlyJS from 'plotly.js-dist-min'
import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyComponent } from './plotly.component/plotly.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GaasDesignSystemModule } from '@Alliander/gaas-design-system';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider'

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    UrgentWarningComponent,
    TopTenWarningsComponent,
    WarningComponent,
    FindWarningsComponent,
    FormFindWarningsComponent,
    CircuitComponentsComponent,
    CircuitComponent,
    WarningAnnotationComponent,
    ToolbarComponent,
    HomepageComponent,
    NgxChartsComponent,
    ApacheEchartComponent,
    PlotlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    NgbModule,
    GaasDesignSystemModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSortModule,
    MatFormFieldModule,
    MatSliderModule,
    NgxChartsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts') 
    }),
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
