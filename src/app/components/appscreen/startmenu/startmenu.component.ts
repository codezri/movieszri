import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SelectionsService } from 'src/app/services/selections.service';

@Component({
  selector: 'app-startmenu',
  templateUrl: './startmenu.component.html',
  styleUrls: ['./startmenu.component.less']
})
export class StartmenuComponent implements OnInit {
  @Output() menuClicked = new EventEmitter<any>();
  selections = [];

  constructor(private selectionsService: SelectionsService) { }

  ngOnInit() {
    this.selections = this.selectionsService.getSelections();
  }

  selectionClicked(selection: any) {
    this.menuClicked.emit(selection);
  }

  refreshSelections() {
    this.selections = this.selectionsService.getSelections();
  }

}
