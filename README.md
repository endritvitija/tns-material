
# TNS MATERIAL

MaterialUi for Nativescript Angular

## Screenshot

<a href="https://imgflip.com/gif/2u1t2j"><img src="https://i.imgflip.com/2u1t2j.gif" title="made at imgflip.com"/></a>

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

