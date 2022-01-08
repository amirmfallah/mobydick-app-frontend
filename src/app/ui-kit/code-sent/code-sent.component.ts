import { BehaviorSubject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-code-sent',
  templateUrl: './code-sent.component.html',
  styleUrls: ['./code-sent.component.scss'],
})
export class CodeSentComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() formSubmit: EventEmitter<void> = new EventEmitter();
  @Input() codeSent: BehaviorSubject<boolean>;

  constructor() {}

  ngOnInit(): void {}

  back() {
    this.codeSent.next(false);
  }
}
