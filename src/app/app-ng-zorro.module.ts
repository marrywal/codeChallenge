import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCardModule } from 'ng-zorro-antd/card';



@NgModule({
  exports: [
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzSpaceModule,
    NzGridModule,
    NzSwitchModule,
    NzCardModule
  ],
})
export class NgZorroModule { }
