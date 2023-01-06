import { IControlBase } from './components/controls/control-base';
import { MetaService } from './service/meta.service';
import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  meta!: IControlBase[];
  data!: any;

  constructor(
    private dataService: DataService,
    private metaService: MetaService
  ) {}

  async ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.data = await this.dataService.getData();
    this.meta = (await this.metaService.getMeta()) as IControlBase[];
  }
}
