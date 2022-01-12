## use

```
npm install numberal -S
```

```js
var numberal = require("numberal");
or;
import numberal from "numberal";
```

## Create

```js
const nnn = numberal(123456.123456);
```

## Format

```js
const nnn = numberal(123456.123456);

console.log(nnn.format("#,###"));
// console => 123,456
```

| number     | format    | console    |
| ---------- | --------- | ---------- |
| 123456.123 | #,###     | 123,456    |
| 123456.123 | 0,000     | 123,456    |
| 123456.123 | ##,###.00 | 123,456.12 |
| 123456.123 | #,###.##  | 123,456.12 |
| 0.123      | #,###%    | 12%        |
| 0.123      | #.0%      | 12.3%      |
| 123        | hh:mm:ss  | 00:02:03   |
| 123        | mm:ss     | 02:03      |

## Settings

Default Formatting

```js
numberal.defaultOptions({
  currentLocal: "zh-CN",
  zeroFormat: null,
  nullFormat: null,
  defaultFormat: "#,###"
});
```

## Local

```js
numberal.register("local", "custom-local", {
  decimal: ".",
  delimiter: ","
});

numberal.local("custom-local");
```

## Custom Format

```js
numberal.register("format", "percent", {
  regexps: {
    format: /(%)/
  },
  format: function (value, pattern = "") {
    const scalePercentByValue = 100;

    return numberal._.numberToFormat(value * 100, pattern);
  }
});
```