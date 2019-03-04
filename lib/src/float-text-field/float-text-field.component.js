"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color/color");
var FloatTextField = /** @class */ (function () {
    function FloatTextField() {
        this.messageChange = new core_1.EventEmitter();
        this.focusColor = '#4286f4';
        this.noFocusColor = '#E8E8E8';
    }
    Object.defineProperty(FloatTextField.prototype, "model", {
        get: function () {
            return this.messageValue;
        },
        set: function (val) {
            this.messageValue = val;
            this.messageChange.emit(this.messageValue);
        },
        enumerable: true,
        configurable: true
    });
    FloatTextField.prototype.ngOnInit = function () {
        this.onBlur();
    };
    FloatTextField.prototype.onFocus = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        label
            .animate({
            translate: { x: 0, y: -20 },
            opacity: 1
        })
            .then(function () { }, function () { });
        textField.borderColor = new color_1.Color(this.focusColor);
        label.color = new color_1.Color(this.focusColor);
    };
    FloatTextField.prototype.onBlur = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        if (!textField.text) {
            label
                .animate({
                translate: { x: 0, y: 0 },
                opacity: 1
            })
                .then(function () { }, function () { });
        }
        textField.borderColor = new color_1.Color(this.noFocusColor);
        label.color = new color_1.Color(this.noFocusColor);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FloatTextField.prototype, "messageChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FloatTextField.prototype, "model", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatTextField.prototype, "hint", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatTextField.prototype, "focusColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatTextField.prototype, "noFocusColor", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FloatTextField.prototype, "secure", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatTextField.prototype, "text", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatTextField.prototype, "keyboardType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatTextField.prototype, "class", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatTextField.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FloatTextField.prototype, "col", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], FloatTextField.prototype, "row", void 0);
    __decorate([
        core_1.ViewChild('label'),
        __metadata("design:type", core_1.ElementRef)
    ], FloatTextField.prototype, "label", void 0);
    __decorate([
        core_1.ViewChild('textField'),
        __metadata("design:type", core_1.ElementRef)
    ], FloatTextField.prototype, "textField", void 0);
    FloatTextField = __decorate([
        core_1.Component({
            selector: 'FloatTextField',
            moduleId: module.id,
            templateUrl: './float-text-field.component.html',
            styleUrls: ['./float-text-field.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FloatTextField);
    return FloatTextField;
}());
exports.FloatTextField = FloatTextField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtdGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbG9hdC10ZXh0LWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RjtBQUM5RixzREFBcUQ7QUFRckQ7SUFvQ0MsWUFBWTtJQUVaO1FBakNVLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFrQjVDLGVBQVUsR0FBVyxTQUFTLENBQUM7UUFDL0IsaUJBQVksR0FBVyxTQUFTLENBQUM7SUFjM0IsQ0FBQztJQTlCaEIsc0JBQUksaUNBQUs7YUFBVDtZQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBVSxHQUFHO1lBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzNDLGtDQUFrQztRQUNuQyxDQUFDOzs7T0FOQTtJQThCRCxpQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUUvQyxLQUFLO2FBQ0gsT0FBTyxDQUFDO1lBQ1IsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsT0FBTyxFQUFFLENBQUM7U0FDVixDQUFDO2FBQ0QsSUFBSSxDQUFDLGNBQU8sQ0FBQyxFQUFFLGNBQU8sQ0FBQyxDQUFDLENBQUM7UUFFM0IsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUUvQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtZQUNwQixLQUFLO2lCQUNILE9BQU8sQ0FBQztnQkFDUixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFDO2FBQ1YsQ0FBQztpQkFDRCxJQUFJLENBQUMsY0FBTyxDQUFDLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUVELFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFyRVM7UUFBVCxhQUFNLEVBQUU7O3lEQUE0QztJQUdyRDtRQURDLFlBQUssRUFBRTs7OytDQUdQO0lBWVE7UUFBUixZQUFLLEVBQUU7O2dEQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7O3NEQUFnQztJQUMvQjtRQUFSLFlBQUssRUFBRTs7d0RBQWtDO0lBQ2pDO1FBQVIsWUFBSyxFQUFFOztrREFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O2dEQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7O3dEQUFzQjtJQUNyQjtRQUFSLFlBQUssRUFBRTs7aURBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7aURBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7K0NBQWE7SUFDWjtRQUFSLFlBQUssRUFBRTs7K0NBQWE7SUFHRDtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTtpREFBQztJQUNkO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFZLGlCQUFVO3FEQUFDO0lBbkNsQyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFFLG1DQUFtQyxDQUFFO1NBQ2xELENBQUM7O09BQ1csY0FBYyxDQTJFMUI7SUFBRCxxQkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdGbG9hdFRleHRGaWVsZCcsXHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZmxvYXQtdGV4dC1maWVsZC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbICcuL2Zsb2F0LXRleHQtZmllbGQuY29tcG9uZW50LnNjc3MnIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb2F0VGV4dEZpZWxkIHtcclxuXHQvLyNyZWdpb24gVHdvV2F5QmFpbmRpbmdcclxuXHJcblx0cHJpdmF0ZSBtZXNzYWdlVmFsdWU6IHN0cmluZztcclxuXHJcblx0QE91dHB1dCgpIG1lc3NhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcblx0QElucHV0KClcclxuXHRnZXQgbW9kZWwoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlVmFsdWU7XHJcblx0fVxyXG5cclxuXHRzZXQgbW9kZWwodmFsKSB7XHJcblx0XHR0aGlzLm1lc3NhZ2VWYWx1ZSA9IHZhbDtcclxuXHRcdHRoaXMubWVzc2FnZUNoYW5nZS5lbWl0KHRoaXMubWVzc2FnZVZhbHVlKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZVZhbHVlKTtcclxuXHR9XHJcblxyXG5cdC8vI2VuZHJlZ2lvblxyXG5cclxuXHQvLyNyZWdpb24gSU5QVVRcclxuXHJcblx0QElucHV0KCkgaGludDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIGZvY3VzQ29sb3I6IHN0cmluZyA9ICcjNDI4NmY0JztcclxuXHRASW5wdXQoKSBub0ZvY3VzQ29sb3I6IHN0cmluZyA9ICcjRThFOEU4JztcclxuXHRASW5wdXQoKSBzZWN1cmU6IGJvb2xlYW47XHJcblx0QElucHV0KCkgdGV4dDogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIGtleWJvYXJkVHlwZTogc3RyaW5nO1xyXG5cdEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcblx0QElucHV0KCkgc3R5bGU6IHN0cmluZztcclxuXHRASW5wdXQoKSBjb2w6IG51bWJlcjtcclxuXHRASW5wdXQoKSByb3c6IG51bWJlcjtcclxuXHQvLyBASW5wdXQoXCJuZ01vZGVsXCIpIG1vZGVsOiBhbnk7XHJcblxyXG5cdEBWaWV3Q2hpbGQoJ2xhYmVsJykgbGFiZWw6IEVsZW1lbnRSZWY7XHJcblx0QFZpZXdDaGlsZCgndGV4dEZpZWxkJykgdGV4dEZpZWxkOiBFbGVtZW50UmVmO1xyXG5cdC8vI2VuZHJlZ2lvblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cdG5nT25Jbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5vbkJsdXIoKTtcclxuXHR9XHJcblxyXG5cdG9uRm9jdXMoKSB7XHJcblx0XHRjb25zdCBsYWJlbCA9IHRoaXMubGFiZWwubmF0aXZlRWxlbWVudDtcclxuXHRcdGNvbnN0IHRleHRGaWVsZCA9IHRoaXMudGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG5cdFx0bGFiZWxcclxuXHRcdFx0LmFuaW1hdGUoe1xyXG5cdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtMjAgfSxcclxuXHRcdFx0XHRvcGFjaXR5OiAxXHJcblx0XHRcdH0pXHJcblx0XHRcdC50aGVuKCgpID0+IHt9LCAoKSA9PiB7fSk7XHJcblxyXG5cdFx0dGV4dEZpZWxkLmJvcmRlckNvbG9yID0gbmV3IENvbG9yKHRoaXMuZm9jdXNDb2xvcik7XHJcblx0XHRsYWJlbC5jb2xvciA9IG5ldyBDb2xvcih0aGlzLmZvY3VzQ29sb3IpO1xyXG5cdH1cclxuXHJcblx0b25CbHVyKCkge1xyXG5cdFx0Y29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRjb25zdCB0ZXh0RmllbGQgPSB0aGlzLnRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG5cclxuXHRcdGlmICghdGV4dEZpZWxkLnRleHQpIHtcclxuXHRcdFx0bGFiZWxcclxuXHRcdFx0XHQuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHR0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogMVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnRoZW4oKCkgPT4ge30sICgpID0+IHt9KTtcclxuXHRcdH1cclxuXHJcblx0XHR0ZXh0RmllbGQuYm9yZGVyQ29sb3IgPSBuZXcgQ29sb3IodGhpcy5ub0ZvY3VzQ29sb3IpO1xyXG5cdFx0bGFiZWwuY29sb3IgPSBuZXcgQ29sb3IodGhpcy5ub0ZvY3VzQ29sb3IpO1xyXG5cdH1cclxufVxyXG4iXX0=