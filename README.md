# Validator

Utility functions for validating javascript objects and Primitives

<div style="display:grid;grid-gap:1rem;grid-auto-flow:column;width:100%;justify-content:space-between; align-items:center;">
<div>
  <a style="display:block;z-index:1;"  href="https://badge.fury.io/js/%40wilfredlopez%2Fvalidator">
    <img style="background:transparent;" src="https://badge.fury.io/js/%40wilfredlopez%2Fvalidator.svg" alt="npm version" height="18">
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

#### Methods

```ts
interface MatchType {
    "bigint": BigInt;
    "boolean": boolean;
    "function": (...args: any[]) => any;
    "number": number;
    "object": object;
    "string": string;
    "symbol": symbol;
    "undefined": undefined;
}
type Primitive = string | boolean | number | symbol | null | undefined;

declare const Validator: {
  isEmail: (email: any, domainLimit?: number): boolean;
  isTypeof:<T extends keyof MatchType>(value: any, condition: T): value is MatchType[T];
  /**
   * check if the string is a postal code.
   *
   * @param code
   * @param locale  one of [ 'AD', 'AT', 'AU', 'BE', 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ',
   * 'EE', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'ID', 'IE' 'IL', 'IN', 'IR', 'IS', 'IT', 'JP', '
   * KE', 'LI', 'LT', 'LU', 'LV', 'MT', 'MX', 'NL', 'NO', 'NP', 'NZ', 'PL', 'PR', 'PT', 'RO', 'RU', 'SA', 'SE',
   * 'SI', 'TN', 'TW', 'UA', 'US', 'ZA', 'ZM' ] OR 'any'.
   * If 'any' is used, function will check if any of the locals match.
   */
  isPostalCode:(code: string, locale?: string): boolean;
  isPrimitive: (value: unknown): value is Primitive;
  isString: (val: any): boolean
  isArray: <T extends any>(arg: any): arg is Array<T>;
  isJSON: (str: string, options?: {allow_primitives?: boolean;}): boolean;
  isNullOrUndefined: (arg: any): boolean;
  isObject: (arg: any): boolean;
  isEmptyObject: (arg: any): boolean;
  isDeepEqual: (a: any, b: any): boolean
  isDeepEqualReact: (a: any, b: any): boolean
  isSerializable: (obj: any): boolean
  minLength: (arg: string | number, min_length: number): boolean
  maxLength: (arg: string | number, max_length: number): boolean
  isLength:(arg: any, options?: {min: number;max: number;}): boolean
  isEmpty: (str: any, options?: {ignore_whitespace?: boolean;}): boolean
  isRegex: (value: unknown) => value is RegExp
  isSameRegex: isSameRegex(reg1: RegExp, reg2: RegExp): boolean
  isNotEmptyString(arg: any): arg is string
     /**
     *  Check if the string contains only letters (a-zA-Z).
     * @param str string to validate
     * @param locale a locale string for example: "en-US" | "bg-BG" "cs-CZ" | "da-DK" | "de-DE" | "el-GR" | "es-ES"
     */
  isAlpha(str: string, locale?: string): boolean
  toDate(date: string | number): Date | null
  isAfter(value: string, date?: string): boolean
  isBefore(value: string, date?: string): boolean
  contains(
    fullString: string,
    value: string,
    options?: {
      ignoreCase?: boolean
    }
  ): boolean
  equals(str: string, comparison: string): boolean
  isValidDateFormat(format: string): boolean
  isDate(input: string, format?: string): boolean
       /**
     *  Check if the string contains only letters (a-zA-Z).
     * @param str string to validate
     * @param locale  "en-US" or 'ar';
     */

  isDecimal(
    str: string,
    options?: {
      force_decimal?: boolean
      decimal_digits?: string
      locale?: string
    }
  ): boolean
  isURL(
    url: string,
    options?: {
      protocols?: string[]
      require_tld?: boolean
      require_protocol?: boolean
      require_host?: boolean
      require_valid_protocol?: boolean
      allow_underscores?: boolean
      host_whitelist?: boolean
      host_blacklist?: boolean
      allow_trailing_dot?: boolean
      allow_protocol_relative_urls?: boolean
      disallow_auth?: boolean
    }
  ): boolean
  isIP(str: string, version?: string | number): boolean
  matches(
    str: string,
    pattern: string | RegExp,
    flags?: string | undefined
  ): boolean
  isHexadecimal(str: string): boolean
  isMongoId(str: string): boolean
  isBoolean(val: any): val is boolean
  isNumber(arg: any): arg is number
  isKey(value: [] | string): boolean
  isFunction<T extends Function>(arg: any): arg is T
  isUndefined: (arg: any): boolean
  /**
   * Returns true of all the characters in the string are in uppercase.
   * Returns false if an empty string is passed or the string has any characters in lowercase.
   * @param {String} string string to verify
   */
  isUppercase(string: any): boolean
  /**
   * Check if string or number is integer
   * @param str
   * @param options
   */
  isInt(
    str: number | string,
    options?: {
      min?: number
      max?: number
      lt?: number
      gt?: number
      allow_leading_zeroes?: boolean
    }
  ): boolean
  isPort(port: string | number): boolean
  isSlug(str: string): boolean
  isLowerCase(string: any): boolean
       /**
     *  Check if the string contains only letters (a-zA-Z).
     * @param str string to validate
     * @param locale a locale string. defaults to "en-US". for example: "en-US" | "bg-BG" "cs-CZ" | "da-DK" | "de-DE" | "el-GR" | "es-ES"
     */
  isAlphaNumeric(str: string, locale?: string): boolean
  isEven(number: number): boolean
  isOdd(number: number): boolean
  isPositive(number: number): boolean
  isPrime(n: number): boolean
  isPowerOfTwo(number: number): boolean
}
```
