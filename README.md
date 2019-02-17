
# TNS MATERIAL

MaterialUi for Nativescript Angular

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

You need to add ```bash FloatTextFieldModule ``` to your page module, and then simply use ```bash <FloatTextField></FloatTextField>```

```python

<FloatTextField hint="EMAIL" focusColor="#4286f4"></FloatTextField>
<FloatTextField hint="EMAIL" focusColor="#4286f4" secure="true"></FloatTextField>

```
* #### Import FloatTextFieldModule in NgModule:

```python
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

