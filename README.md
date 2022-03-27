# varcom.js
format your variables-composited string recursively

simple usage

```
import {compile, run} from "varcom.js";


const template = compile("${say_${now}} !! ${user}. do you like ${sushi_${locale}} ?");

const formatted = run(template, {
    now: "morning",
    user: "tom",
    locale: "us",

    say_morning: "good morning",
    say_afternoon: "good afternoon",
    say_evening: "good evening",

    sushi_us: "🍣",
    sushi_jp: "寿司",
    sushi_zh: "Sushi"
});
```

shows

```
good morning !! tom. do you like 🍣 ?
```