import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Color } from "tns-core-modules/color/color";
import { Page } from "ui/page";

@Component({
  selector: "FloatTextField",
  moduleId: module.id,
  templateUrl: "./float-text-field.component.html",
  styleUrls: ["./float-text-field.component.css"]
})
export class FloatTextField {
  private messageValue: string;

  @Output()
  messageChange = new EventEmitter<string>();

  @Input() get model() {
    return this.messageValue;
  }

  set model(val) {
    this.messageValue = val;
    this.messageChange.emit(this.messageValue);
  }

  @Input() hint: string;
  @Input() focusColor: string = "#4286f4";
  @Input() noFocusColor: string = "#E8E8E8";
  @Input() secure: boolean;
  @Input() text: string;
  @Input() keyboardType: string;
  @Input() class: string;
  @Input() style: string;
  @Input() col: number;
  @Input() row: number;

  @ViewChild("label") label: ElementRef;
  @ViewChild("textField") textField: ElementRef;

  constructor(private _page: Page) {}

  ngOnInit(): void {
    this.onBlur();
  }

  onFull() {
    const textField = this.textField.nativeElement;

    if (textField) {
      this.onFocus();
      this.onBlur();
    } else {
      this.onBlur();
    }
  }

  onFocus() {
    const label = this.label.nativeElement;
    const textField = this.textField.nativeElement;

    label
      .animate({
        translate: { x: 0, y: -20 },
        opacity: 1
      })
      .then(() => {}, () => {});

    textField.borderColor = new Color(this.focusColor);
    label.color = new Color(this.focusColor);
  }

  onBlur() {
    const label = this.label.nativeElement;
    const textField = this.textField.nativeElement;

    if (!textField.text) {
      label
        .animate({
          translate: { x: 0, y: 0 },
          opacity: 1
        })
        .then(() => {}, () => {});
    }
    textField.borderColor = new Color(this.noFocusColor);
    label.color = new Color(this.noFocusColor);
  }
}
