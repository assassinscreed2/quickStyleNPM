# What is this?

This package helps non-designer in implementing a quick css on images, buttons and text.
 
# installation

`npm i quickstyle --save`

Then ...

```
import {quickButton,
        quickImage,
        quickText} from './node_modules/quickstyle'

quickButton();                   #default values
quickButton({color:"blue"});     #customised values

```

# Options

quickButton supports 1 optional parameter

* *color*
   example: quickButton({color: "blue"});

quickText supports 1 optional parameter

* *family*
   example: quickText({family:"Arial"})

quickImage supports 2 optional parameter

* *color*
   example: quickImage({color:"red"})
* *width*
   example: quickImage({width:"180px"})