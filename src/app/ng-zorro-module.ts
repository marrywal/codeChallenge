import {NgModule} from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

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
        NzCardModule,
        NzDividerModule,
        NzMessageModule,
        NzSliderModule,
        NzCheckboxModule,
        NzAvatarModule,
        NzLayoutModule
    ]
})
export class NgZorroModule {}
