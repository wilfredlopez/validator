# Validator

Utility functions for validating javascript objects and Primitives

<div style="display:grid;grid-gap:1rem;grid-auto-flow:column;width:100%;justify-content:space-between; align-items:center;">
<div>
  <a style="display:block;z-index:1;"  href="https://badge.fury.io/js/@wilfredlopez/validator">
    <img style="background:transparent;" src="https://badge.fury.io/js/@wilfredlopez/validator.svg" alt="npm version" height="18">
  </a>
</div>
<div>

<a  href="https://twitter.com/intent/follow?screen_name=wilfreddonaldlo"><img style="background:transparent;" align="right" src="https://img.shields.io/twitter/follow/wilfreddonaldlo?style=social&label=Follow%20@wilfreddonaldlo" alt="Follow on Twitter"></a>

  </div>

</div>
<!-- A spacer -->
<p>&nbsp;</p>

#### Install

###### NPM

```
npm install @wilfredlopez/validator
```

###### Script Tag

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>indexDBStore test</title>
  </head>

  <body>
    <div>
      <h1>Validator</h1>
    </div>
    <script src="https://unpkg.com/@wilfredlopez/validator@latest/dist/index.umd.js"></script>

    <script>
      console.log(Validator.isEmail('bad@notemail')) //false
      console.log(Validator.isEmail('test@gmail.com')) //true
      console.log(Validator.isNotEmptyString('')) //false
      console.log(Validator.isNotEmptyString('some data')) //true
      console.log(Validator.isDate('10/20/2020', 'MM/DD/YYYY')) //true
      console.log(Validator.isDate('anyInvalidDate')) //false;
    </script>
  </body>
</html>
```

###### ES6

```ts
import Validator from "@wilfredlopez/validator"

Validator.isEmail('bad@notemail'); //false
Validator.isEmail('test@gmail.com'); //true
Validator.isNotEmptyString(""); //false
Validator.isNotEmptyString("some data")); //true
Validator.isDate("10/20/2020", "MM/DD/YYYY") //true
Validator.isDate("anyInvalidDate") //false;
Validator.isDate("2020/01/01") //true;
Validator.isInt("2.1") //false
Validator.isPort(5000) //true
Validator.isPort(10.1) //false
Validator.isPort(80000000) //false
Validator.isURL("https://www.wilfredlopez.net") //true
Validator.isURL("www.test.com")//true
Validator.isURL("www.test.") //false
```
