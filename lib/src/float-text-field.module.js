"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var common_1 = require("nativescript-angular/common");
var float_text_field_component_1 = require("./float-text-field/float-text-field.component");
var FloatTextFieldModule = /** @class */ (function () {
    function FloatTextFieldModule() {
    }
    FloatTextFieldModule_1 = FloatTextFieldModule;
    FloatTextFieldModule.forRoot = function () {
        return {
            ngModule: FloatTextFieldModule_1
        };
    };
    var FloatTextFieldModule_1;
    FloatTextFieldModule = FloatTextFieldModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, nativescript_angular_1.NativeScriptFormsModule],
            declarations: [float_text_field_component_1.FloatTextField],
            exports: [float_text_field_component_1.FloatTextField, common_1.NativeScriptCommonModule, nativescript_angular_1.NativeScriptFormsModule]
        })
    ], FloatTextFieldModule);
    return FloatTextFieldModule;
}());
exports.FloatTextFieldModule = FloatTextFieldModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtdGV4dC1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbG9hdC10ZXh0LWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6Qyw2REFBK0Q7QUFDL0Qsc0RBQXVFO0FBQ3ZFLDRGQUErRTtBQU8vRTtJQUFBO0lBTUEsQ0FBQzs2QkFOWSxvQkFBb0I7SUFDeEIsNEJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1NBQy9CLENBQUM7SUFDSixDQUFDOztJQUxVLG9CQUFvQjtRQUxoQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsRUFBRSw4Q0FBdUIsQ0FBQztZQUM1RCxZQUFZLEVBQUUsQ0FBQywyQ0FBYyxDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLDJDQUFjLEVBQUUsaUNBQXdCLEVBQUUsOENBQXVCLENBQUM7U0FDN0UsQ0FBQztPQUNXLG9CQUFvQixDQU1oQztJQUFELDJCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGbG9hdFRleHRGaWVsZCB9IGZyb20gXCIuL2Zsb2F0LXRleHQtZmllbGQvZmxvYXQtdGV4dC1maWVsZC5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0Zsb2F0VGV4dEZpZWxkXSxcclxuICBleHBvcnRzOiBbRmxvYXRUZXh0RmllbGQsIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSwgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbG9hdFRleHRGaWVsZE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRmxvYXRUZXh0RmllbGRNb2R1bGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==