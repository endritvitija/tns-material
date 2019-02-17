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
  //#region TwoWayBainding

  private messageValue: string;

  @Output()
  messageChange = new EventEmitter<string>();

  @Input() get model() {
    return this.messageValue;
  }

  set model(val) {
    this.messageValue = val;
    this.messageChange.emit(this.messageValue);
    // console.log(this.messageValue);
  }

  //#endregion

  //#region INPUT

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
  // @Input("ngModel") model: any;

  //#endregion

  // Output
  // @Output() textBack: EventEmitter<string> = new EventEmitter();

  //#region View Child

  @ViewChild("label") label: ElementRef;
  @ViewChild("textField") textField: ElementRef;
  //#endregion

  constructor(private _page: Page) {
    // this.messageChange = new EventEmitter();
    // this.messageChange.emit(this.messageValue);
  }

  ngOnInit(): void {
    // this.onFull();
    this.onBlur();
  }

  // onChange() {
  // 	const textField = this.textField.nativeElement.text;
  // 	this.textBack.emit(textField);
  // }

  onFull() {
    const textField = this.textField.nativeElement;

    if (textField) {
      this.onFocus();
      this.onBlur();
    } else {
      this.onBlur();
    }
    // if (this.model === undefined || this.model === null) {
    // 	this.onBlur();
    // } else {
    // 	this.onFocus();
    // }
    // console.log(this.model);
  }

  onFocus() {
    const label = this.label.nativeElement;
    const textField = this.textField.nativeElement;

    // this._page.css = ".form-label {z-index: 1 }";
    // this._page.css = ".form-input {z-index: -1 ;}";
    // animate the label sliding up and less transparent.
    label
      .animate({
        translate: { x: 0, y: -20 },
        opacity: 1
      })
      .then(() => {}, () => {});

    // set the border bottom color to green to indicate focus

    textField.borderColor = new Color(this.focusColor);
    label.color = new Color(this.focusColor);
  }

  onBlur() {
    const label = this.label.nativeElement;
    const textField = this.textField.nativeElement;

    // if there is text in our input then don't move the label back to its initial position.
    if (!textField.text) {
      label
        .animate({
          translate: { x: 0, y: 0 },
          opacity: 1
        })
        .then(() => {}, () => {});
    }
    // reset border bottom color.
    textField.borderColor = new Color(this.noFocusColor);
    label.color = new Color(this.noFocusColor);
  }
}
