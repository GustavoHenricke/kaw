import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './components/template/angular/angular.component';
import { Angular1Component } from './components/template/angular1/angular1.component';
import { CssComponent } from './components/template/css/css.component';
import { Css1Component } from './components/template/css1/css1.component';
import { Css2Component } from './components/template/css2/css2.component';
import { FormComponent } from './components/template/form/form.component';
import { Form1Component } from './components/template/form1/form1.component';
import { Form2Component } from './components/template/form2/form2.component';
import { Form3Component } from './components/template/form3/form3.component';
import { Form4Component } from './components/template/form4/form4.component';
import { Form5Component } from './components/template/form5/form5.component';
import { Form6Component } from './components/template/form6/form6.component';


const routes: Routes = [
{path: 'css', component: CssComponent},
{path: 'css1', component: Css1Component},
{path: 'css2', component: Css2Component},
{path: 'form', component: FormComponent},
{path: 'form1', component: Form1Component},
{path: 'form2', component: Form2Component},
{path: 'form3', component: Form3Component},
{path: 'form4', component: Form4Component},
{path: 'form5', component: Form5Component},
{path: 'form6', component: Form6Component},
{path: 'angular', component: AngularComponent},
{path: 'angular1', component: Angular1Component}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
