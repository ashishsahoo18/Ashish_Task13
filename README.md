# TuteDude MERN Stack – JavaScript: Even or Odd Checker

## Files Included
- `index.html` – Page that links the CSS and JavaScript files
- `style.css` – Basic styling
- `script.js` – JavaScript program that checks if numbers are even or odd
- `README.md` – This file

## How to Run
1. Unzip the folder.
2. Open `index.html` in Chrome or Firefox.
3. Press F12 and open the **Console** tab to see the output.

## How It Works
A number is **even** if dividing it by 2 leaves no remainder.
The remainder operator `%` is used for this check:

```js
if (number % 2 === 0) {
  // even
} else {
  // odd
}
```

## Variables Used
| Variable | Purpose | Value |
|----------|---------|-------|
| `number1` | First number to check | 5 |
| `number2` | Second number to check | 10 |
| `message1` | Message for the first number | calculated |
| `message2` | Message for the second number | calculated |

## Output
```
The number 5 is odd.
The number 10 is even.
```

## Concepts Used
- Variables (`var`)
- Remainder operator (`%`)
- Comparison operator (`===`)
- `if-else` statement
- String joining with `+`
- `console.log()`

## Submission
1. Put all 4 files in one folder (e.g. `YourName_Task/`)
2. Compress the folder into a `.zip` file
3. Rename it to `YourName_Task(number).zip`
4. Upload the ZIP and the deployed link on the TuteDude portal