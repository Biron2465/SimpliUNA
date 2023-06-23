import { NgModule } from '@angular/core';

// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  exports:[
    ButtonModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    TabViewModule,
  ]
})
export class PrimeNgModule { }
