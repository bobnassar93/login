import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-mode-switch-checkbox',
  templateUrl: './mode-switch-checkbox.component.html',
  styleUrls: ['./mode-switch-checkbox.component.scss'],
})
export class ModeSwitchCheckboxComponent implements OnInit {
  @Output()
  onModeChange = new EventEmitter<any>();

  @Input()
  icon = "sunny";

  constructor(private globalService: GlobalService) { }

  ngOnInit() {}

  toggleMode(ev){
    this.onModeChange.emit(ev);
  }
}