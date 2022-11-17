import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//script
//fim

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/template/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IconComponent } from './components/template/icon/icon.component';
import {MatIconModule} from '@angular/material/icon';
import { MenuComponent } from './components/template/menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { DividerComponent } from './components/template/divider/divider.component';
import {MatDividerModule} from '@angular/material/divider';
import { ListComponent } from './components/template/list/list.component';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from './components/template/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TabsComponent } from './components/template/tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
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
import { AngularComponent } from './components/template/angular/angular.component';
import { Angular1Component } from './components/template/angular1/angular1.component';
import { StepperComponent } from './components/template/stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormFieldComponent } from './components/template/form-field/form-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IconComponent,
    MenuComponent,
    DividerComponent,
    ListComponent,
    SidenavComponent,
    TabsComponent,
    CssComponent,
    Css1Component,
    Css2Component,
    FormComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component,
    AngularComponent,
    Angular1Component,
    StepperComponent,
    FormFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
