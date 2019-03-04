
# TNS MATERIAL

MaterialUi for Nativescript Angular

## Screenshot

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/20324575/53016560-2dae4580-344e-11e9-87d5-34002fd17c55.gif)

## Installation

Run the following command from the root of your project:
```bash
tns plugin add tns-material
```
or
```bash
npm i tns-material
```
This command automatically installs the necessary files, as well as stores tns-material as a dependency in your project's package.json file.

## Configuration

There is no additional configuration needed!

## API

#### Events

* ##### hint

* ##### focusColor
* ##### noFocusColor
* ##### secure
* ##### keyboardType
* ##### style

# Usage

You need to add ```FloatTextFieldModule ``` to your page module, and then simply use ``` <FloatTextField></FloatTextField>```

```Html

<FloatTextField hint="EMAIL" focusColor="#4286f4"></FloatTextField>
<FloatTextField hint="EMAIL" focusColor="#4286f4" secure="true"></FloatTextField>

<FloatTextField [(model)]="name" (messageChange)="name=$event"></FloatTextField>

```
* #### Import FloatTextFieldModule in NgModule:

```typescript
//......
import { FloatTextFieldModule } from "tns-material";

@NgModule({
  //......
  imports: [
    //......
    FloatTextFieldModule
    //......
   ],
   //......
})
```

