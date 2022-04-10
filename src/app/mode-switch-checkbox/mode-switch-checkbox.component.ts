import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-mode-switch-checkbox',
  templateUrl: './mode-switch-checkbox.component.html',
  styleUrls: ['./mode-switch-checkbox.component.scss'],
})
export class ModeSwitchCheckboxComponent implements OnInit {
  @Output()
  modeChange = new EventEmitter<CustomEvent>();

  @Input()
  icon = 'sunny';

  constructor(public globalService: GlobalService) { }

  ngOnInit() { }

  toggleMode(ev) {
    this.modeChange.emit(ev);
  }
}
