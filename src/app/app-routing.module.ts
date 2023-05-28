import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopTenWarningsComponent } from './top-ten-warnings.component/top-ten-warnings.component';
import { UrgentWarningComponent } from './urgent-warning.component/urgent-warning.component';
import { FindWarningsComponent } from './find-warnings.component/find-warnings.component';
import { CircuitComponentsComponent } from './circuit-components.component/circuit-components.component';
import { CircuitComponent } from './circuit.component/circuit.component';
import { WarningAnnotationComponent } from './warning-annotation.component/warning-annotation.component';
import { WarningComponent } from './warning.component/warning.component';
import { HomepageComponent } from './homepage.component/homepage.component';
import { FormFindWarningsComponent } from './form-find-warnings/form-find-warnings.component';

const routes: Routes = [
  { path: 'urgent-warning', component: UrgentWarningComponent },
  { path: 'top-ten-warnings', component: TopTenWarningsComponent },
  { path: 'warnings/warning/:id', component: WarningComponent },
  { path: 'warnings/find', component: FindWarningsComponent },
  { path: 'find-warnings', component: FormFindWarningsComponent },
  { path: 'circuits/:id', component: CircuitComponent },
  { path: 'circuits/:id/components', component: CircuitComponentsComponent},
  { path: 'warnings/annotation', component: WarningAnnotationComponent },
  { path: 'homepage', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
