<!--
 * @Author: kok-s0s
 * @Date: 2021-06-14 01:58:42
 * @LastEditors: kok-s0s
 * @LastEditTime: 2021-06-19 17:45:31
 * @Description: 正则表达式
-->

> Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

### 1. 使用测试方法

`.test()` 方法

会判断你的正则表达式是否得到正确的结果，有结果返回 `ture` ，反之返回 `false` 。

> 判断 `myString` 里面是否含有 `Hello` 字符串。

```javascript
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```

### 2. 匹配文字字符串

```javascript
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
// true

let wrongRegex = /kevin/;
wrongRegex.test(testStr);
// false
```

正则表达式 `/Kevin/` 只会在目标字符串中搜索是否有含有该字符串，正则表达式区分大小写，即使目标字符串中含有 `kevin` 和 `KEVIN` ，但是也不会匹配成功。

```javascript
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

### 3. 匹配具有不同可能性的文字字符串

> alternation or OR operator: `|`

eg:
* `/yes|no/`
* `/yes|no|maybe/`

```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```

### 4. 匹配时能够忽略大小写

在正则表达式的结束符号 `/` 后加上个字符 `i` ，意味匹配时忽略大小写。

```javascript
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);
```

### 5. 提取匹配

`.match()` 方法，和 `.test()` 类似，但是其返回的值是结果字符串，而不是真假值。

示例

```javascript
"Hello, World!".match(/Hello/);
// Hello
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// expressions
```

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```

### 6. Find More Than the First Match

> To search or extract a pattern more than once, you can use the g flag. 即提取出多个符合的结果。

```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
// /gi意味着即忽略大小写，还寻求多个结果。
let result = twinkleStar.match(starRegex); // Change this line
```

### 7. 使用通配符句点匹配任何内容

即是能够找到有相同前缀或者有着相同后缀的结果字符串。

示例

1. 匹配有相同前缀的结果字符串

```javascript
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
// true
huRegex.test(hugStr);
// true
```

2. 匹配有相同后缀的结果字符串

```javascript
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```

### 8. 匹配具有多种可能性的单个字符

使用 `[ ]` 能够匹配指定中间字符的字符串。

示例

```javascript
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
// big
bagStr.match(bgRegex);
// bag
bugStr.match(bgRegex);
// bug
bogStr.match(bgRegex);
// null      ---不符合匹配返回null---空
```

```javascript
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```

### 9. 匹配字母表中的字母

即设定某一个范围---区间。

示例

```javascript
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
// cat
batStr.match(bgRegex);
// bat
matStr.match(bgRegex);
// null 
```

```javascript
// 匹配整个字符串。
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```

### 10. 匹配数字和字母表中的字母

与上个同理，不过多个判断即数字的。

示例

```javascript
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
// ["J", "e", "n", "n", "y", "8", "6", "7", "5", "3", "0", "9"]
```

```javascript
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```

### 11. 匹配未指定的单个字符

`^` 这个符号表示取反，即不需要这些内容。

```javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```

### 12. 匹配出现一次或多次的字符

看连续

```javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```

### 13. 匹配出现零次或多次的字符

示例

```javascript
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
// ["goooooooo"]
gPhrase.match(goRegex);
// ["g"]
oPhrase.match(goRegex);
// null
```

```javascript
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

### 14. 使用惰性匹配查找字符

> You can apply the regex `/t[a-z]*i/` to the string `"titanic"` . This regex is basically a pattern that starts with `t` , ends with `i` , and has some letters in between.
> Regular expressions are by default greedy, so the match would return `["titani"]` . It finds the largest sub-string possible to fit the pattern.
> However, you can use the `?` character to change it to lazy matching. "titanic" matched against the adjusted regex of `/t[a-z]*?i/` returns `["ti"]` .

贪婪匹配

```javascript
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h.*?1>/; // Change this line
let result = text.match(myRegex);
```

### 15. Find One or More Criminals in a Hunt

有大写字母C的即为罪犯，请找出所有罪犯。

```javascript
let reCriminals = /C+/g; // Change this line
```

### 16. 匹配起始字符串模式

`^` 字符除了取反的功能，还能确定某个字符串是否以某个字符串（字符）开头的。

示例

```javascript
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// false
```

```javascript
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```

### 17. 匹配结束字符串模式

`$` 字符可用来某个字符串是否以某个字符串（字符）结尾的。

示例

```javascript
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// false
```

```javascript
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```

### 18. 匹配所有字母和数字

> The closest character class in JavaScript to match the alphabet is `\w` . This shortcut is equal to `[A-Za-z0-9_]` . This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character ( `_` ).

示例

```javascript
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
// true
shortHand.test(numbers);
// true
longHand.test(varNames);
// true
shortHand.test(varNames);
// true
```

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

### 19. 匹配除字母和数字以外的所有内容

`\W` 是 `\w` 的反义词 --- `[^A-Za-z0-9_]`

示例

```javascript
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
// %
sentence.match(shortHand);
// !
```

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

### 20. 匹配所有数字

`\d` === `[0-9]`

```javascript
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```

### 21. 匹配所有非数字

`\D` === `[^0-9]`

```javascript
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```

### 22. 限制可能的用户名

```javascript
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result)
```

Code Explanation
1. `^` - start of input
2. `[a-z]` - first character is a letter
3. `[a-z]+` - following characters are letters
4. `\d*$` - input ends with 0 or more digits
5. `|` - or
6. `^[a-z]` - first character is a letter
7. `\d\d+` - following characters are 2 or more digits
8. `$` - end of input

### 23. 匹配空白

> You can search for whitespace using `\s` , which is a lowercase `s` . This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class `[ \r\t\f\n\v]` .

```javascript
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
```

### 24. 匹配非空白字符

> Search for non-whitespace using `\S` , which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class `[^ \r\t\f\n\v]` .

```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```

### 25. 指定匹配的上限和下限数

示例

```javascript
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
// true
multipleA.test(A2);
// false
```

```javascript
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/g; // Change this line
let result = ohRegex.test(ohStr);
```

### 26. 仅指定较低的匹配数

```javascript
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
// true
multipleA.test(A2);
// false
multipleA.test(A100);
// true
```

```javascript
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```

### 27. 指定确切的匹配数

示例

```javascript
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
// false
multipleHA.test(A3);
// true
multipleHA.test(A100);
// false
```

```javascript
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```

### 28. 检查全部或无

示例

```javascript
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american);
// true
rainbowRegex.test(british);
// true
```

```javascript
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
```

### 29. Positive and Negative Lookahead

示例

```javascript
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
// ["q"]
noquit.match(qRegex);
// ["q"]
```

```javascript
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
```

### 30. 检查字符的混合分组

示例

```javascript
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// true
```

```javascript
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).*Roosevelt/g; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

### 31. 使用捕获组重用模式

示例

```javascript
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
// true
repeatStr.match(repeatRegex);
// ["regex regex", "regex"]
```

```javascript
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
```

### 32. 使用捕获组进行搜索和替换

![](./../../images/00001.png)

```javascript
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```

### 33. 从开头和结尾删除空格

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
```
