import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enter-phone-number',
  templateUrl: './enter-phone-number.component.html',
  styleUrls: ['./enter-phone-number.component.scss'],
})
export class EnterPhoneNumberComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() formSubmit: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
