"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color/color");
var page_1 = require("ui/page");
var FloatTextField = /** @class */ (function () {
    //#endregion
    function FloatTextField(_page) {
        this._page = _page;
        this.messageChange = new core_1.EventEmitter();
        this.focusColor = "#4286f4";
        this.noFocusColor = "#E8E8E8";
        // this.messageChange = new EventEmitter();
        // this.messageChange.emit(this.messageValue);
    }
    Object.defineProperty(FloatTextField.prototype, "model", {
        get: function () {
            return this.messageValue;
        },
        set: function (val) {
            this.messageValue = val;
            this.messageChange.emit(this.messageValue);
            // console.log(this.messageValue);
        },
        enumerable: true,
        configurable: true
    });
    FloatTextField.prototype.ngOnInit = function () {
        // this.onFull();
        this.onBlur();
    };
    // onChange() {
    // 	const textField = this.textField.nativeElement.text;
    // 	this.textBack.emit(textField);
    // }
    FloatTextField.prototype.onFull = function () {
        var textField = this.textField.nativeElement;
        if (textField) {
            this.onFocus();
            this.onBlur();
        }
        else {
            this.onBlur();
        }
        // if (this.model === undefined || this.model === null) {
        // 	this.onBlur();
        // } else {
        // 	this.onFocus();
        // }
        // console.log(this.model);
    };
    FloatTextField.prototype.onFocus = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        // this._page.css = ".form-label {z-index: 1 }";
        // this._page.css = ".form-input {z-index: -1 ;}";
        // animate the label sliding up and less transparent.
        label
            .animate({
            translate: { x: 0, y: -20 },
            opacity: 1
        })
            .then(function () { }, function () { });
        // set the border bottom color to green to indicate focus
        textField.borderColor = new color_1.Color(this.focusColor);
        label.color = new color_1.Color(this.focusColor);
    };
    FloatTextField.prototype.onBlur = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        // if there is text in our input then don't move the label back to its initial position.
        if (!textField.text) {
            label
                .animate({
                translate: { x: 0, y: 0 },
                opacity: 1
            })
                .then(function () { }, function () { });
        }
        // reset border bottom color.
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
        core_1.ViewChild("label"),
        __metadata("design:type", core_1.ElementRef)
    ], FloatTextField.prototype, "label", void 0);
    __decorate([
        core_1.ViewChild("textField"),
        __metadata("design:type", core_1.ElementRef)
    ], FloatTextField.prototype, "textField", void 0);
    FloatTextField = __decorate([
        core_1.Component({
            selector: "FloatTextField",
            moduleId: module.id,
            templateUrl: "./float-text-field.component.html",
            styleUrls: ["./float-text-field.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], FloatTextField);
    return FloatTextField;
}());
exports.FloatTextField = FloatTextField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtdGV4dC1maWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbG9hdC10ZXh0LWZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQU91QjtBQUN2QixzREFBcUQ7QUFDckQsZ0NBQStCO0FBUS9CO0lBMkNFLFlBQVk7SUFFWix3QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUF2Qy9CLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFpQmxDLGVBQVUsR0FBVyxTQUFTLENBQUM7UUFDL0IsaUJBQVksR0FBVyxTQUFTLENBQUM7UUFzQnhDLDJDQUEyQztRQUMzQyw4Q0FBOEM7SUFDaEQsQ0FBQztJQXhDUSxzQkFBSSxpQ0FBSzthQUFUO1lBQ1AsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFVLEdBQUc7WUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0Msa0NBQWtDO1FBQ3BDLENBQUM7OztPQU5BO0lBd0NELGlDQUFRLEdBQVI7UUFDRSxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxlQUFlO0lBQ2Ysd0RBQXdEO0lBQ3hELGtDQUFrQztJQUNsQyxJQUFJO0lBRUosK0JBQU0sR0FBTjtRQUNFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBRS9DLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO1FBQ0QseURBQXlEO1FBQ3pELGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLElBQUk7UUFDSiwyQkFBMkI7SUFDN0IsQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUUvQyxnREFBZ0Q7UUFDaEQsa0RBQWtEO1FBQ2xELHFEQUFxRDtRQUNyRCxLQUFLO2FBQ0YsT0FBTyxDQUFDO1lBQ1AsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDO2FBQ0QsSUFBSSxDQUFDLGNBQU8sQ0FBQyxFQUFFLGNBQU8sQ0FBQyxDQUFDLENBQUM7UUFFNUIseURBQXlEO1FBRXpELFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFFL0Msd0ZBQXdGO1FBQ3hGLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUs7aUJBQ0YsT0FBTyxDQUFDO2dCQUNQLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDekIsT0FBTyxFQUFFLENBQUM7YUFDWCxDQUFDO2lCQUNELElBQUksQ0FBQyxjQUFPLENBQUMsRUFBRSxjQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsNkJBQTZCO1FBQzdCLFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUEzR0Q7UUFEQyxhQUFNLEVBQUU7O3lEQUNrQztJQUVsQztRQUFSLFlBQUssRUFBRTs7OytDQUVQO0lBWVE7UUFBUixZQUFLLEVBQUU7O2dEQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7O3NEQUFnQztJQUMvQjtRQUFSLFlBQUssRUFBRTs7d0RBQWtDO0lBQ2pDO1FBQVIsWUFBSyxFQUFFOztrREFBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O2dEQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7O3dEQUFzQjtJQUNyQjtRQUFSLFlBQUssRUFBRTs7aURBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7aURBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7K0NBQWE7SUFDWjtRQUFSLFlBQUssRUFBRTs7K0NBQWE7SUFVRDtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQztrQ0FBUSxpQkFBVTtpREFBQztJQUNkO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFZLGlCQUFVO3FEQUFDO0lBMUNuQyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1NBQ2hELENBQUM7eUNBOEMyQixXQUFJO09BN0NwQixjQUFjLENBa0gxQjtJQUFELHFCQUFDO0NBQUEsQUFsSEQsSUFrSEM7QUFsSFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyXHJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIkZsb2F0VGV4dEZpZWxkXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2Zsb2F0LXRleHQtZmllbGQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZmxvYXQtdGV4dC1maWVsZC5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbG9hdFRleHRGaWVsZCB7XHJcbiAgLy8jcmVnaW9uIFR3b1dheUJhaW5kaW5nXHJcblxyXG4gIHByaXZhdGUgbWVzc2FnZVZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG1lc3NhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgQElucHV0KCkgZ2V0IG1vZGVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1vZGVsKHZhbCkge1xyXG4gICAgdGhpcy5tZXNzYWdlVmFsdWUgPSB2YWw7XHJcbiAgICB0aGlzLm1lc3NhZ2VDaGFuZ2UuZW1pdCh0aGlzLm1lc3NhZ2VWYWx1ZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIElOUFVUXHJcblxyXG4gIEBJbnB1dCgpIGhpbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBmb2N1c0NvbG9yOiBzdHJpbmcgPSBcIiM0Mjg2ZjRcIjtcclxuICBASW5wdXQoKSBub0ZvY3VzQ29sb3I6IHN0cmluZyA9IFwiI0U4RThFOFwiO1xyXG4gIEBJbnB1dCgpIHNlY3VyZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkga2V5Ym9hcmRUeXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBzdHlsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNvbDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHJvdzogbnVtYmVyO1xyXG4gIC8vIEBJbnB1dChcIm5nTW9kZWxcIikgbW9kZWw6IGFueTtcclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vIE91dHB1dFxyXG4gIC8vIEBPdXRwdXQoKSB0ZXh0QmFjazogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vI3JlZ2lvbiBWaWV3IENoaWxkXHJcblxyXG4gIEBWaWV3Q2hpbGQoXCJsYWJlbFwiKSBsYWJlbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKFwidGV4dEZpZWxkXCIpIHRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcGFnZTogUGFnZSkge1xyXG4gICAgLy8gdGhpcy5tZXNzYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgLy8gdGhpcy5tZXNzYWdlQ2hhbmdlLmVtaXQodGhpcy5tZXNzYWdlVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLm9uRnVsbCgpO1xyXG4gICAgdGhpcy5vbkJsdXIoKTtcclxuICB9XHJcblxyXG4gIC8vIG9uQ2hhbmdlKCkge1xyXG4gIC8vIFx0Y29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0RmllbGQubmF0aXZlRWxlbWVudC50ZXh0O1xyXG4gIC8vIFx0dGhpcy50ZXh0QmFjay5lbWl0KHRleHRGaWVsZCk7XHJcbiAgLy8gfVxyXG5cclxuICBvbkZ1bGwoKSB7XHJcbiAgICBjb25zdCB0ZXh0RmllbGQgPSB0aGlzLnRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgIGlmICh0ZXh0RmllbGQpIHtcclxuICAgICAgdGhpcy5vbkZvY3VzKCk7XHJcbiAgICAgIHRoaXMub25CbHVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uQmx1cigpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKHRoaXMubW9kZWwgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm1vZGVsID09PSBudWxsKSB7XHJcbiAgICAvLyBcdHRoaXMub25CbHVyKCk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gXHR0aGlzLm9uRm9jdXMoKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cygpIHtcclxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAvLyB0aGlzLl9wYWdlLmNzcyA9IFwiLmZvcm0tbGFiZWwge3otaW5kZXg6IDEgfVwiO1xyXG4gICAgLy8gdGhpcy5fcGFnZS5jc3MgPSBcIi5mb3JtLWlucHV0IHt6LWluZGV4OiAtMSA7fVwiO1xyXG4gICAgLy8gYW5pbWF0ZSB0aGUgbGFiZWwgc2xpZGluZyB1cCBhbmQgbGVzcyB0cmFuc3BhcmVudC5cclxuICAgIGxhYmVsXHJcbiAgICAgIC5hbmltYXRlKHtcclxuICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogLTIwIH0sXHJcbiAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7fSwgKCkgPT4ge30pO1xyXG5cclxuICAgIC8vIHNldCB0aGUgYm9yZGVyIGJvdHRvbSBjb2xvciB0byBncmVlbiB0byBpbmRpY2F0ZSBmb2N1c1xyXG5cclxuICAgIHRleHRGaWVsZC5ib3JkZXJDb2xvciA9IG5ldyBDb2xvcih0aGlzLmZvY3VzQ29sb3IpO1xyXG4gICAgbGFiZWwuY29sb3IgPSBuZXcgQ29sb3IodGhpcy5mb2N1c0NvbG9yKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAvLyBpZiB0aGVyZSBpcyB0ZXh0IGluIG91ciBpbnB1dCB0aGVuIGRvbid0IG1vdmUgdGhlIGxhYmVsIGJhY2sgdG8gaXRzIGluaXRpYWwgcG9zaXRpb24uXHJcbiAgICBpZiAoIXRleHRGaWVsZC50ZXh0KSB7XHJcbiAgICAgIGxhYmVsXHJcbiAgICAgICAgLmFuaW1hdGUoe1xyXG4gICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IHt9LCAoKSA9PiB7fSk7XHJcbiAgICB9XHJcbiAgICAvLyByZXNldCBib3JkZXIgYm90dG9tIGNvbG9yLlxyXG4gICAgdGV4dEZpZWxkLmJvcmRlckNvbG9yID0gbmV3IENvbG9yKHRoaXMubm9Gb2N1c0NvbG9yKTtcclxuICAgIGxhYmVsLmNvbG9yID0gbmV3IENvbG9yKHRoaXMubm9Gb2N1c0NvbG9yKTtcclxuICB9XHJcbn1cclxuIl19