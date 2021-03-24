const en = [
  {
    id: 0,
    title: 'What keyboard shortcut opens the console in Chrome (Windows)?',
    answer: 'CTRL + SHIFT + J',
    correct_option_id: 0,
    random: ['CTRL + SHIFT + J', 'CTRL + SHIFT + C', 'CTRL + SHIFT + K']
  },
  {
    id: 1,
    title: 'What does the `+` symbol mean when performing mathematical operations in JavaScript?',
    answer: 'Addition of numbers',
    correct_option_id: 1,
    random: ['Concatenation', 'Addition of numbers', 'Assigning a variable']
  },
  {
    id: 2,
    title: 'What does the `-` symbol mean when doing math in JavaScript? ',
    answer: 'Subtraction',
    correct_option_id: 1,
    random: ['Division', 'Subtraction', 'Assigning a variable']
  },
  {
    id: 3,
    title: 'What is the symbol for the multiplication operation?',
    answer: '*',
    correct_option_id: 1,
    random: ['%', '*', '/']
  },
  {
    id: 4,
    title: 'What does the `/` character mean when doing math in JavaScript?',
    answer: 'Division',
    correct_option_id: 2,
    random: ['Remainder', 'Multiplication', 'Division']
  },
  {
    id: 5,
    title: 'Who are the comments for?',
    answer: 'Human',
    correct_option_id: 0,
    random: ['Person', 'Console', 'Interpreter']
  },
  {
    id: 6,
    title: 'What are comments used for?',
    answer: 'Adding hints, notes, suggestions',
    correct_option_id: 0,
    random: ['Adding tips, notes, suggestions', 'To fulfill requests', 'To prevent code execution']
  },
  {
    id: 7,
    title: 'Which way of specifying a comment in JavaScript code does not exist?',
    answer: '(" ")',
    correct_option_id: 0,
    random: ['(" ")', '//', '/ * * /']
  },
  {
    id: 8,
    title: 'How to disable any number of lines of code?',
    answer: 'Wrap the code in a comment',
    correct_option_id: 1,
    random: ['Write a comment in the middle of the code', 'Wrap the code in a comment', 'Use command` console.log` ']
  },
  {
    id: 9,
    title: 'JavaScript interpreter _____ any comments found.',
    answer: 'Ignore',
    correct_option_id: 1,
    random: ['Performs', 'Ignores', 'Compiles']
  },
  {
    id: 10,
    title: 'What character represents a single line comment?',
    answer: '//',
    correct_option_id: 0,
    random: ['//', '\\', '||']
  },
  {
    id: 11,
    title: 'What characters do you need to enter to start a block comment?',
    answer: '/*',
    correct_option_id: 0,
    random: ['/*', '* \\', '//']
  },
  {
    id: 12,
    title:
      'What term refers to code that has useful variable names and descriptive function names so that the developer can easily understand the purpose of the code when he reads it (without much need for explanatory comments)?',
    answer: 'Self-documenting',
    correct_option_id: 1,
    random: ['Documenting', 'Self-documenting', 'Manuscript']
  },
  {
    id: 13,
    title: 'What are variables?',
    answer: 'Containers for values',
    correct_option_id: 0,
    random: ['Containers for values', 'Variable values', 'Letters']
  },
  {
    id: 14,
    title: 'What variables can contain?',
    answer: 'All data types',
    correct_option_id: 1,
    random: ['Only strings and numbers', 'All data types', 'Complex data only']
  },
  {
    id: 15,
    title: 'How to write a command to assign a variable?',
    answer: 'var [variable name] =',
    correct_option_id: 1,
    random: ['var', 'var [variable name] =', 'var [variable name]']
  },
  {
    id: 16,
    title: 'How to update a variable?',
    answer: 'Specify a different value for the variable',
    correct_option_id: 1,
    random: ['Variable cannot be updated', 'Specify a different value for the variable', 'Set a custom command']
  },
  {
    id: 17,
    title: 'What is missing in the variable naming rules?',
    answer: 'Numbers at the beginning of variables',
    correct_option_id: 2,
    random: ['Use reserved words', 'Stick to Latin characters', 'Numbers at the beginning of variables']
  },
  {
    id: 18,
    title: 'How do I write the value of a variable so that the browser treats the variable as a string?',
    answer: 'In quotes',
    correct_option_id: 1,
    random: ['Without quotes', 'In quotes', 'In brackets']
  },
  {
    id: 19,
    title: 'What keyword are we not using to define variables?',
    answer: 'var',
    correct_option_id: 2,
    random: ['let', 'const', 'var']
  },
  {
    id: 20,
    title: 'What kind of capital letters (ie case) should I use in variable names in JavaScript?',
    answer: 'camelCase',
    correct_option_id: 2,
    random: ['case', 'camel', 'camelCase']
  },
  {
    id: 21,
    title:
      'Is this valid JavaScript syntax? If not, why not? let myMood = "Curious about JavaScript" \n let myMood = "Excited to use my new superpowers"\n myMood',
    answer: 'Second variable without `let`',
    correct_option_id: 0,
    random: ['Second variable without `let`', 'Really', 'SyntaxError']
  },
  {
    id: 22,
    title: 'What does one equal sign mean in a statement?',
    answer: 'The value is assigned to the variable',
    correct_option_id: 1,
    random: ['Compare', 'The value is assigned to the variable', 'Equality']
  },
  {
    id: 23,
    title: "What keyword should you use to create any variable that you know won't be changed?",
    answer: 'const',
    correct_option_id: 2,
    random: ['let', 'var', 'const']
  },
  {
    id: 24,
    title: 'When should you use the `var` keyword in native code? ',
    answer: 'Never',
    correct_option_id: 0,
    random: ['Never', 'Is always', 'Often']
  },
  {
    id: 25,
    title: 'What is the `typeof` operator used for?',
    answer: 'To determine the data type',
    correct_option_id: 0,
    random: ['To determine the type of data', 'To output the data type to the console', 'To enter a new variable']
  },
  {
    id: 26,
    title: 'How many data types does the JavaScript standard define?',
    answer: '9',
    correct_option_id: 2,
    random: ['7', 'five', '9']
  },
  {
    id: 27,
    title: 'Which datatype contains the property set?',
    answer: 'object',
    correct_option_id: 2,
    random: ['function', 'string', 'object']
  },
  {
    id: 28,
    title: 'The JavaScript line is usually surrounded by _____.',
    answer: 'quotation marks (single or double quotation marks)',
    correct_option_id: 0,
    random: ['quotation marks (single or double quotation marks)', 'single quotes', 'double quotes']
  },
  {
    id: 29,
    title: 'Which value is not of the boolean type `boolean`?',
    answer: 'null',
    correct_option_id: 1,
    random: ['false', 'null', 'true']
  },
  {
    id: 30,
    title: 'Which data type has a value that can be used as a key for a property of an object?',
    answer: 'symbol',
    correct_option_id: 1,
    random: ['undefined', 'symbol', 'null']
  },
  {
    id: 31,
    title:
      'What is the data type of the `whatTypeAmI` variable after this statement is executed? \n `let whatTypeAmI = 5`',
    answer: 'number',
    correct_option_id: 1,
    random: ['integer', 'number', 'string']
  },
  {
    id: 32,
    title: 'Which datatype is arguably the most commonly used datatype in JavaScript?',
    answer: 'string',
    correct_option_id: 2,
    random: ['integer', 'number', 'string']
  },
  {
    id: 33,
    title: 'What is the name of the primitive data type that means no other value has been assigned?',
    answer: 'undefined',
    correct_option_id: 0,
    random: ['undefined', 'symbol', 'null']
  },
  {
    id: 34,
    title:
      'What is the name of a primitive data type that basically means nothing (not zero, not an empty string, not undefined, not false, etc.)?',
    answer: 'null',
    correct_option_id: 2,
    random: ['undefined', 'boolean', 'null']
  },
  {
    id: 35,
    title: 'How many possible values are there for datatype zero?',
    answer: '1 possible value (null)',
    correct_option_id: 0,
    random: ['1 possible value (null)', '2 possible values (null, undefined)']
  },
  {
    id: 36,
    title: 'What is the meaning of `myMessage` after this line? \n `let myMessage`',
    answer: 'undefined',
    correct_option_id: 0,
    random: ['undefined', 'SyntaxError', 'null']
  },
  {
    id: 37,
    title: 'What does `Syntax Error` mean? ',
    answer: 'Violation of language rules',
    correct_option_id: 1,
    random: ['Wrong order of signs', 'Violation of the rules of the language', 'Inappropriate parentheses']
  },
  {
    id: 38,
    title: 'What does `Reference Error` mean? ',
    answer: 'Undeclared variable',
    correct_option_id: 0,
    random: ['Undeclared variable', 'Syntax error', 'Wrong type']
  },
  {
    id: 39,
    title: 'What kind of error do you get if you try to run this statement?\n `let sum = (9 +; 3)`',
    answer: 'SyntaxError',
    correct_option_id: 1,
    random: ['undefined', 'SyntaxError', 'eleven;']
  },
  {
    id: 40,
    title: "How JavaScript doesn't write ___ strings?",
    answer: 'in backslashes',
    correct_option_id: 1,
    random: ['in single quotes', 'in backslashes', 'in back quotes']
  },
  {
    id: 41,
    title: "Why isn't the backslash used in the string?",
    answer: 'To end the line',
    correct_option_id: 2,
    random: ['For shielding', 'To write special characters', 'To end the line']
  },
  {
    id: 42,
    title: 'Select linefeed character',
    answer: '\n',
    correct_option_id: 0,
    random: ['\n', '\\', '\\ *']
  },
  {
    id: 43,
    title: "What letter will `'sport'[3]` return?",
    answer: 'r',
    correct_option_id: 1,
    random: ['o', 'r', 'Will not return anything']
  },
  {
    id: 44,
    title: 'How do I change a character in a JavaScript string?',
    answer: 'Create a new line and write it to the same variable instead of the old one',
    correct_option_id: 2,
    random: [
      'Change line',
      'Get to the symbol and replace it',
      'Create a new line and write it to the same variable instead of the old one'
    ]
  },
  {
    id: 45,
    title: 'What method is used to capitalize letters?',
    answer: 'toUpperCas()',
    correct_option_id: 0,
    random: ['toUpperCase()', 'toLowerCase()', 'toLowercase()']
  },
  {
    id: 46,
    title: 'What character is used to concatenate strings?',
    answer: '+',
    correct_option_id: 1,
    random: ['=', '+', '+ =']
  },
  {
    id: 47,
    title: 'Whenever you have an opening _____, you should always have a closing _____.',
    answer: 'quote',
    correct_option_id: 1,
    random: ['dot', 'quote', 'changing']
  },
  {
    id: 48,
    title: 'A string consists of one or more separate _____',
    answer: 'characters',
    correct_option_id: 0,
    random: ['characters', 'arguments', 'parameters']
  },
  {
    id: 49,
    title: 'What arithmetic operations are called basic?',
    answer: 'Addition, subtraction, multiplication, division',
    correct_option_id: 2,
    random: ['Addition, subtraction', 'Multiplication, division', 'Addition, subtraction, multiplication, division']
  },
  {
    id: 50,
    title: 'How is `+=` read correctly?',
    answer: 'Addition assignment',
    correct_option_id: 1,
    random: ['Increment', 'Assignment with addition', 'Plus and Equal']
  },
  {
    id: 51,
    title: 'How is the increment recorded by the sign (s)?',
    answer: '++',
    correct_option_id: 0,
    random: ['++', '-', '+']
  },
  {
    id: 52,
    title: 'What is the symbol for the remainder of the division?',
    answer: '%',
    correct_option_id: 0,
    random: ['%', '/', '\\']
  },
  {
    id: 53,
    title: 'What value will `Math.round` return from `Math.round (20.62)`? ',
    answer: '21',
    correct_option_id: 2,
    random: ['22', '20', '21']
  },
  {
    id: 54,
    title: 'What special character could you use to simplify this task? \n `myVariable = myVariable * 2` ',
    answer: '*=',
    correct_option_id: 1,
    random: ['= *', '*=', '*']
  },
  {
    id: 55,
    title:
      'What is the simplest (that is, the shortest) way to write this (using a special character)? What is the name of the special character? \n `myVariable = myVariable + 1`? ',
    answer: 'myVariable++',
    correct_option_id: 0,
    random: ['myVariable++', 'myVariable+', 'myVariable+=']
  },
  {
    id: 56,
    title:
      'What is the simplest (that is, the shortest) way to write this (using a special character)? What is the name of the special character? \n `myVariable = myVariable - 1` ',
    answer: 'myVariable--',
    correct_option_id: 0,
    random: ['myVariable--', 'myVariable-', 'myVariable-=']
  },
  {
    id: 57,
    title:
      'If you were writing a program to determine whether a value was even or odd, what number would you use after the modulo operator?',
    answer: '2',
    correct_option_id: 0,
    random: ['2', 'four', '0']
  },
  {
    id: 58,
    title: 'What special character could you use to make this task easier? \n `myValue = myValue - 8`',
    answer: '-= (myValue -= 8)',
    correct_option_id: 1,
    random: ['- (myValue - 8)', '-= (myValue -= 8)', '=- (myValue =- 8)']
  },
  {
    id: 59,
    title:
      'What is the collective name of symbols that first perform an operation on a variable and then assign a new value to the same variable (for example, +=, -=, *=, and /=)?',
    answer: 'Combined assignment',
    correct_option_id: 0,
    random: ['Combined assignment', 'Mathematical assignment', 'Conditional assignment']
  },
  {
    id: 60,
    title: 'What syntax is used in the equal operator?',
    answer: 'x == y',
    correct_option_id: 0,
    random: ['x == y', 'x = y', 'x - y']
  },
  {
    id: 61,
    title: 'In what case does the operator return `true` not equal?',
    answer: 'If the operands are not equal',
    correct_option_id: 0,
    random: ['If the operands are not equal', 'If the operands are equal', 'If both operands are objects']
  },
  {
    id: 62,
    title: 'How is the operator equal to differ from strictly equal?',
    answer: 'Strictly equal does not cast operands to the same type',
    correct_option_id: 2,
    random: [
      'Strictly ensures that the value is identical, but the type is not',
      'Strictly equal does not cast operands to the same type',
      'Strictly equal casts operands to the same type'
    ]
  },
  {
    id: 63,
    title: 'What is the syntax of the operator strictly not equal?',
    answer: '!==',
    correct_option_id: 1,
    random: ['!=', '!==', '=!']
  },
  {
    id: 64,
    title: 'In which case does the operator return more false?',
    answer: 'If the value of the left operand is greater than that of the right one',
    correct_option_id: 1,
    random: [
      'If the value of the left operand is greater than that of the right one',
      'If the value of the right operand is greater than the left one',
      'If the values ​​of the operand are the same'
    ]
  },
  {
    id: 65,
    title: 'What is the syntax of the operator greater than or equal to?',
    answer: '>=',
    correct_option_id: 0,
    random: ['>=', '=>', '<=']
  },
  {
    id: 66,
    title: 'In which example will the less than or equal operator return true?',
    answer: '4 <= 5',
    correct_option_id: 0,
    random: ['4 <= 5', '5 <= 4', '3 <= 2']
  },
  {
    id: 67,
    title: 'What is a condition?',
    answer: 'Expression',
    correct_option_id: 1,
    random: ['Instruction', 'Expression', 'Value']
  },
  {
    id: 68,
    title: 'Which block is used to test multiple conditions?',
    answer: 'else if',
    correct_option_id: 1,
    random: ['if', 'else if', 'for']
  },
  {
    id: 69,
    title: 'Which operator takes 3 operands?',
    answer: 'Conditional (ternary) operator',
    correct_option_id: 0,
    random: ['Conditional (ternary) operator', 'More or equal', 'Less or equal']
  },
  {
    id: 70,
    title: 'Which comparison operator is preferred for testing - values ​​are not equal?',
    answer: '!==',
    correct_option_id: 2,
    random: ['===', '!=', '!==']
  },
  {
    id: 71,
    title: 'Which two comparison operators do you recommend not to use in your code?',
    answer: '== and! =',
    correct_option_id: 1,
    random: ['> and <', '== and! =', '=> and <=']
  },
  {
    id: 72,
    title: 'Which comparison operator tests if the value on the right is less than or equal to the value on the left?',
    answer: '>=',
    correct_option_id: 2,
    random: ['<=', '=>', '>=']
  },
  {
    id: 73,
    title: 'What general instructions in coding are used to execute certain blocks of code based on a given condition?',
    answer: 'Conditional expression',
    correct_option_id: 1,
    random: ['Boolean expression', 'Conditional Expression', 'Miscellaneous Expressions']
  },
  {
    id: 74,
    title: 'What kind of statement is run only when the condition for the `if` block is `false`?',
    answer: 'else',
    correct_option_id: 2,
    random: ['if', 'else if', 'else']
  },
  {
    id: 75,
    title: 'Do comparison operators always evaluate to `true` or `false`?',
    answer: 'true',
    correct_option_id: 1,
    random: ['false', 'true']
  },
  {
    id: 76,
    title: 'Sometimes comparison operators can be used inside the `else` statement.',
    answer: 'false',
    correct_option_id: 1,
    random: ['true', 'false']
  },
  {
    id: 77,
    title: 'The `if/else` statement can only be used outside of a function. ',
    answer: 'false',
    correct_option_id: 1,
    random: ['true', 'false']
  },
  {
    id: 78,
    title: 'Like comparison operators, the ___ (`&&`,`||`, and `!`) operators work fine in conditional statements.',
    answer: 'logic',
    correct_option_id: 2,
    random: ['conditions', 'compare', 'logic']
  },
  {
    id: 79,
    title: 'What is `53 >= 53 &&! (51 <= 52)`?',
    answer: 'false',
    correct_option_id: 1,
    random: ['true', 'false']
  },
  {
    id: 80,
    title:
      'If the condition in the parentheses of the `if` block returns false, what syntax can be used to test another condition before converting to an `else` block?',
    answer: 'else if',
    correct_option_id: 0,
    random: ['else if', 'if', 'else']
  },
  {
    id: 81,
    title:
      'What is the name of the only Boolean operator that always returns a Boolean value? What is the character of this Boolean operator?',
    answer: '!',
    correct_option_id: 2,
    random: ['||', '&&', '!']
  },
  {
    id: 82,
    title:
      'What is the name of a boolean operator that will return a true value if it has a true value on both sides? What is the character of this boolean operator?',
    answer: '&&',
    correct_option_id: 1,
    random: ['||', '&&', '!']
  },
  {
    id: 83,
    title: 'What is `true || false`? ',
    answer: 'true',
    correct_option_id: 0,
    random: ['true', 'false']
  },
  {
    id: 84,
    title: 'Exit or return point of result in function?',
    answer: 'return',
    correct_option_id: 1,
    random: ['Esc', 'return', '=']
  },
  {
    id: 85,
    title: 'The keyword `return` inside the body of the ___ function ',
    answer: 'optional',
    correct_option_id: 1,
    random: ['required', 'optional', 'differently']
  },
  {
    id: 86,
    title: 'Given a function: \n const addThree = x => x + 3 \n addThree (20) \n Define a formal parameter:',
    answer: 'x',
    correct_option_id: 1,
    random: ['20', 'x', 'x + 3']
  },
  {
    id: 87,
    title: 'Given a function: \n const addThree = x => x + 3 \n addThree (20) \n Define a formal argument:',
    answer: '20',
    correct_option_id: 0,
    random: ['20', 'x', 'x + 3']
  },
  {
    id: 88,
    title: 'For whom does the `console.log` command contain information? ',
    answer: 'Developer',
    correct_option_id: 1,
    random: ['User', 'Developer', 'JavaScript interpreter']
  },
  {
    id: 89,
    title: 'Where is the built-in function?',
    answer: 'console.log()',
    correct_option_id: 0,
    random: ['console.log()', 'myMessage()', 'return()']
  },
  {
    id: 90,
    title: 'What syntax do arrow functions use?',
    answer: '=>',
    correct_option_id: 1,
    random: ['Forward()', '=>', 'go.Arrow']
  },
  {
    id: 91,
    title: 'Using arrow functions allows?',
    answer: 'Writing code is more compact and safer',
    correct_option_id: 0,
    random: [
      'Writing code is more compact and safer',
      'Increases the structure of the code',
      'Allows the use of new variables'
    ]
  },
  {
    id: 92,
    title: 'A self-executing function is',
    answer: 'A function that is executed immediately after it has been defined',
    correct_option_id: 0,
    random: [
      'A function that is executed immediately after it has been defined',
      'Built-in function in JavaScript',
      'This is an ordinary procedure that executes a sequence of commands.'
    ]
  },
  {
    id: 93,
    title: 'What characters surround the function body?',
    answer: 'Curly braces `{and}`',
    correct_option_id: 0,
    random: ['Curly braces `{and}`', '`()`', '`=>`']
  },
  {
    id: 94,
    title:
      'What abbreviation is used to describe the intention of good developers to avoid repeating such blocks of code over and over again?',
    answer: "D.R.Y. (Don't Repeat Yourself)",
    correct_option_id: 0,
    random: ["D.R.Y. (Don't Repeat Yourself)", 'R.Y. (Repeat Yourself - Repeat yourself)']
  },
  {
    id: 95,
    title: 'If multiple values ​​are passed to a function, what character is used to separate them?',
    answer: ',',
    correct_option_id: 0,
    random: [',', '.', '/']
  },
  {
    id: 96,
    title:
      "Which built-in function is suitable for sending secret messages to developers (or to yourself while debugging your own website) that users probably won't see?",
    answer: 'console.log().',
    correct_option_id: 0,
    random: ['console.log()', 'Math.floor()', 'Math.random()']
  },
  {
    id: 97,
    title: 'What built-in function rounds any number to the nearest integer?',
    answer: 'Math.floor()',
    correct_option_id: 0,
    random: ['Math.floor()', 'Math.max()', 'Math.random()']
  },
  {
    id: 98,
    title: 'A function can be wrapped in another function.',
    answer: 'true',
    correct_option_id: 1,
    random: ['false', 'true']
  },
  {
    id: 99,
    title: 'When evaluating nested function calls, the interpreter will evaluate them internally.',
    answer: 'true',
    correct_option_id: 1,
    random: ['false', 'true']
  },
  {
    id: 100,
    title: 'What method (function) can you use to convert a string to capitalization?',
    answer: 'toUpperCase()',
    correct_option_id: 0,
    random: ['toUpperCase()', 'toLowerCase()', 'Math.max()']
  },
  {
    id: 101,
    title: 'An empty object is created with the command:',
    answer: 'let obj = {}',
    correct_option_id: 0,
    random: ['let obj = {}', 'function obj()', 'let x = 10']
  },
  {
    id: 102,
    title: 'Object stores matches:',
    answer: 'key: value',
    correct_option_id: 2,
    random: ['First Name Last Name', 'variable = value', 'key: value']
  },
  {
    id: 103,
    title: 'Syntax of assigning a value to a specific key (property):',
    answer: "obj.color = 'red'",
    correct_option_id: 1,
    random: ["color() = 'green'", "obj.color = 'red'", "function color() => 'yellow'"]
  },
  {
    id: 104,
    title: 'Object method in JavaScript is',
    answer: 'Just a function added to an associative array',
    correct_option_id: 0,
    random: [
      'Just a function added to an associative array',
      'External function',
      'Variable described outside the object'
    ]
  },
  {
    id: 105,
    title: 'Iteration of object properties',
    answer: 'for (let key in obj) {}',
    correct_option_id: 1,
    random: ['for (let i = 0; i <= 100; i ++) {sum + = i}', 'for (let key in obj) {}', 'while (condition) {}']
  },
  {
    id: 106,
    title: 'In JavaScript, an object is a collection of properties (named values).',
    answer: 'true',
    correct_option_id: 1,
    random: ['false', 'true']
  },
  {
    id: 107,
    title: 'When a property of an object is a function, it has a special name: `​​mothered`.',
    answer: '`false` It has a special name: `method`',
    correct_option_id: 2,
    random: ['true', '`false` It has a special name: `class`', '`false` It has a special name: `method`']
  },
  {
    id: 108,
    title: 'Which function should you use for string conversion?',
    answer: 'String(value)',
    correct_option_id: 1,
    random: ['Boolean(value)', 'String(value)', 'Number(value)']
  },
  {
    id: 109,
    title: 'What is typecasting?',
    answer: 'Converting values ​​from one data type to another',
    correct_option_id: 1,
    random: [
      'Transferring data from one type to another',
      'Converting values ​​from one data type to another',
      'Representing something as a string'
    ]
  },
  {
    id: 110,
    title: 'What is the key difference between typecasting and typecasting?',
    answer: 'Type conversion is implicit, and type conversion can be both explicit and implicit',
    correct_option_id: 2,
    random: [
      'Type casting is explicit, but type conversion is implicit',
      'Type casting is implicit, but type conversion is explicit',
      'Type casting is implicit, and type conversion can be both explicit and implicit'
    ]
  },
  {
    id: 111,
    title: 'When will the conversion result be `NaN`? ',
    answer: 'When the string cannot be cast explicitly to a number',
    correct_option_id: 0,
    random: [
      'When the string cannot be cast explicitly to a number',
      'When a number cannot be explicitly cast to a string',
      'When there is an error in the code'
    ]
  },
  {
    id: 112,
    title: "What do 'empty' values ​​become when converted?",
    answer: 'false',
    correct_option_id: 2,
    random: ['null', 'true', 'false']
  },
  {
    id: 113,
    title: 'When do we create the very first scope?',
    answer: 'When creating a file',
    correct_option_id: 1,
    random: ['When creating a cycle', 'When creating a file', 'When creating a block']
  },
  {
    id: 114,
    title: 'Is a new scope created when creating a conditional statement?',
    answer: 'true',
    correct_option_id: 1,
    random: ['false', 'true']
  },
  {
    id: 115,
    title: 'Where is the local variable created?',
    answer: 'Inside the block in which it is declared',
    correct_option_id: 0,
    random: ['Inside the block in which it is declared', 'Outside of all blocks']
  },
  {
    id: 116,
    title: 'If no value is passed to function parameters, what is the default value?',
    answer: 'undefined',
    correct_option_id: 1,
    random: ['null', 'undefined', 'NaN']
  },
  {
    id: 117,
    title: "Are the default parameters 'catching' false values?",
    answer: 'false',
    correct_option_id: 0,
    random: ['false', 'true']
  },
  {
    id: 118,
    title:
      'Is it possible to use the values ​​of the parameters located to the left of the list in the default parameters?',
    answer: 'true',
    correct_option_id: 1,
    random: ['false', 'true']
  },
  {
    id: 119,
    title: 'What are regular expressions for?',
    answer: 'String manipulation',
    correct_option_id: 1,
    random: ['Creating templates', 'String manipulation', 'Editing lines']
  },
  {
    id: 120,
    title: 'What character is used to literally create a regular expression?',
    answer: '/ ... /',
    correct_option_id: 0,
    random: ['/ ... /', '\\', '[]']
  },
  {
    id: 121,
    title:
      'What method of creating a regular expression does not allow further dynamic changes to the specified values?',
    answer: 'In construction',
    correct_option_id: 1,
    random: ['In literal', 'In construction', 'In any case, dynamic change is acceptable.']
  },
  {
    id: 122,
    title: 'Is it possible to compare something with regular expressions with a switch?',
    answer: 'false',
    correct_option_id: 0,
    random: ['false', 'true']
  },
  {
    id: 123,
    title: 'Which comparison operator uses `switch`? ',
    answer: '===',
    correct_option_id: 1,
    random: ['=', '===', '==']
  },
  {
    id: 124,
    title: 'Which keyword stops the comparison process in `switch`? ',
    answer: 'break',
    correct_option_id: 0,
    random: ['break', 'stop', 'default']
  },
  {
    id: 125,
    title:
      'What is the name of a block of code that repeats itself over and over until a given condition is no longer `true`?',
    answer: 'Loop',
    correct_option_id: 0,
    random: ['Loop', 'Condition', 'Initialization']
  },
  {
    id: 126,
    title: 'Which of the two loop operators is more popular?',
    answer: 'for',
    correct_option_id: 1,
    random: ['while', 'for', 'break']
  },
  {
    id: 127,
    title:
      "How many messages will the following code output to the console? \n let k = 0 \n while (k <7) {\n console.log('another line!') \n}",
    answer: 'infinite',
    correct_option_id: 2,
    random: ['7', '8', 'infinitely']
  },
  {
    id: 128,
    title: 'What character is used to separate the parts in the `for` loop from each other? ',
    answer: ';',
    correct_option_id: 1,
    random: ['&&', ';', '.']
  },
  {
    id: 129,
    title: 'If `_______` is always true, then the code can get stuck in an infinite `_______`.',
    answer: 'condition / loop',
    correct_option_id: 0,
    random: ['condition / loop', 'loop / condition']
  },
  {
    id: 130,
    title: 'What is the name of the middle ____ of the three bracketed parts of the `for` loop?',
    answer: 'Condition',
    correct_option_id: 0,
    random: ['Expression', 'Condition', 'Increment']
  },
  {
    id: 131,
    title: 'What is the term that denotes a one-time (step) passage of the cycle?',
    answer: 'Iteration',
    correct_option_id: 0,
    random: ['Iteration', 'Interrupt', 'Looping']
  },
  {
    id: 132,
    title: 'An array is ...',
    answer: "Subtype of objects with 'ordered collection of data'",
    correct_option_id: 0,
    random: [
      "Subtype of objects with 'ordered collection of data'",
      'Internal function',
      "Subtype of objects with 'unordered collection of data'"
    ]
  },
  {
    id: 133,
    title: 'An empty array is created:',
    answer: 'let arr1 = []',
    correct_option_id: 1,
    random: ['let arr2 = {}', 'let arr1 = []', 'let arr3 = ()']
  },
  {
    id: 134,
    title: 'The length of the array can be determined by the property:',
    answer: 'length',
    correct_option_id: 2,
    random: ['pop', 'push', 'length']
  },
  {
    id: 135,
    title: 'The elements can be stored in the array:',
    answer: 'Any type',
    correct_option_id: 0,
    random: ['Any type', 'Numeric', 'String']
  },
  {
    id: 136,
    title: 'Adding an element at the end of the array:',
    answer: 'push',
    correct_option_id: 0,
    random: ['push', 'pop', 'shift']
  },
  {
    id: 137,
    title: 'Removing an element at the beginning of an array:',
    answer: 'shift',
    correct_option_id: 1,
    random: ['pop', 'shift', 'unshift']
  },
  {
    id: 138,
    title: '____ in an array is a number representing the position of any given element in the array.',
    answer: 'index',
    correct_option_id: 0,
    random: ['index', 'length', 'function']
  },
  {
    id: 139,
    title: 'What value should you put in square brackets to get the first element in the array? \n `myArray[]`',
    answer: '0',
    correct_option_id: 0,
    random: ['0', 'one', '2']
  },
  {
    id: 140,
    title: 'Using the `.pop()` method on an array will be ___ and ___ the last element of the array.',
    answer: 'delete / return',
    correct_option_id: 0,
    random: ['delete / return', 'return / delete']
  },
  {
    id: 141,
    title: 'If ___ is at the end of the function argument list, then we are dealing with:',
    answer: 'Remaining parameter',
    correct_option_id: 0,
    random: ['Residual parameter', 'Expansion operator', 'Random indicators']
  },
  {
    id: 142,
    title: 'To create a function with an undefined number of arguments use:',
    answer: '`...rest` parameters',
    correct_option_id: 1,
    random: ['spread operator `...spread`', '`...rest` parameters']
  },
  {
    id: 143,
    title: 'You can combine two arrays into one using:',
    answer: 'spread operator `...spread`',
    correct_option_id: 0,
    random: ['spread operator `...spread`', '`...rest` parameters']
  },
  {
    id: 144,
    title: 'A function called for each element of the array?',
    answer: 'callback',
    correct_option_id: 2,
    random: ['currentValue', 'array', 'callback']
  },
  {
    id: 145,
    title:
      'Method that creates a new array with the result of calling the specified function for each element of the array:',
    answer: 'map',
    correct_option_id: 0,
    random: ['map', 'filter', 'reduce']
  },
  {
    id: 146,
    title: 'The resulting value of the reduce method can be:',
    answer: 'Anything',
    correct_option_id: 2,
    random: ['Number', 'Array', 'Anything']
  },
  {
    id: 147,
    title: 'Summing all values ​​in the array is achieved by the method:',
    answer: 'reduce',
    correct_option_id: 2,
    random: ['map', 'filter', 'reduce']
  },
  {
    id: 148,
    title:
      'A method that creates a new array with all the elements that have passed the check specified in the passed function:',
    answer: 'filter',
    correct_option_id: 1,
    random: ['map', 'filter', 'reduce']
  },
  {
    id: 149,
    title: 'Combining several functions into one chain with sequential transmission of the result:',
    answer: 'chaining',
    correct_option_id: 1,
    random: ['unity', 'chaining', 'merger']
  },
  {
    id: 150,
    title: 'Destructuring is this?',
    answer: 'Syntax',
    correct_option_id: 1,
    random: ['Function', 'Syntax', 'An object']
  },
  {
    id: 151,
    title:
      'When destructuring an object, is it necessary to put the variables in the same order as they are in the object?',
    answer: 'false',
    correct_option_id: 0,
    random: ['false', 'true']
  },
  {
    id: 152,
    title: 'What will be assigned to a variable if no identical property is found in the object?',
    answer: 'undefined',
    correct_option_id: 1,
    random: ['error', 'undefined', 'unknown']
  },
  {
    id: 153,
    title: 'What is a closure?',
    answer: 'A function that has access to an external function',
    correct_option_id: 1,
    random: ['Design', 'A function that has access to an external function', 'Concept']
  },
  {
    id: 154,
    title: 'In a closure, what is closed on what?',
    answer: 'Function for scope',
    correct_option_id: 0,
    random: ['Function on scope', 'Variables in a function']
  },
  {
    id: 155,
    title: 'What do you need to do to access the scoped variable?',
    answer: 'Variable can only be viewed',
    correct_option_id: 2,
    random: ['I will describe it and use it', "She's available", 'Variable can only be viewed']
  },
  {
    id: 156,
    title: 'First class functions:',
    answer: 'First class objects',
    correct_option_id: 0,
    random: ['First class objects', 'Objects of the fifth class', 'Class ']
  },
  {
    id: 157,
    title: 'Higher order function:',
    answer: 'Accepts a function as an argument or returns a function as output',
    correct_option_id: 0,
    random: [
      'Accepts a function as an argument or returns a function as output',
      'Only takes a function as an argument',
      'Only returns funct as output '
    ]
  },
  {
    id: 158,
    title: 'Higher order function:',
    answer: 'You can create it yourself',
    correct_option_id: 2,
    random: [
      'It is unrealistic to create yourself',
      'Can only be used through a built-in method',
      'You can create it yourself'
    ]
  },
  {
    id: 159,
    title: 'What is the keyword for defining the class?',
    answer: 'class',
    correct_option_id: 1,
    random: ['constructor()', 'class', 'this']
  },
  {
    id: 160,
    title: 'Methods inside the class are comma separated.',
    answer: 'false',
    correct_option_id: 0,
    random: ['false', 'true']
  },
  {
    id: 161,
    title: 'How many `constructor(` methods can there be in one class?',
    answer: 'Only one',
    correct_option_id: 2,
    random: ['Unlimited', 'To ten', 'Only one']
  },
  {
    id: 162,
    title: 'Is it possible to do without `this`:',
    answer: 'You can, and it is better not to use it at all',
    correct_option_id: 0,
    random: [
      'You can, and it is better not to use at all',
      'It is possible, but not advisable',
      'Not allowed, because `this` cannot be removed from JavaScript'
    ]
  },
  {
    id: 163,
    title: 'JavaScript without `this` looks like the best:',
    answer: 'Functional programming language',
    correct_option_id: 1,
    random: ['Procedural programming language', 'Functional programming language', 'Logical programming language']
  },
  {
    id: 164,
    title: 'Asynchrony is:',
    answer: 'A tool that processes requests in parallel with loading web pages',
    correct_option_id: 2,
    random: [
      'A tool that infers the execution context of a function from a synchronous thread',
      'A tool that executes code line by line',
      'A tool that processes requests in parallel with the loading of web pages'
    ]
  },
  {
    id: 165,
    title: 'Asynchronous Call Manager:',
    answer: 'Event loop',
    correct_option_id: 1,
    random: ['stack', 'Event loop', 'Top class facilities']
  },
  {
    id: 166,
    title: 'Function calls, Event loop, are placed in:',
    answer: 'First class objects',
    correct_option_id: 0,
    random: ['First class objects', 'Objects of the fifth class', 'Top class facilities']
  },
  {
    id: 167,
    title: 'Tool that executes code with a millisecond delay:',
    answer: 'setTimeout',
    correct_option_id: 2,
    random: ['delay', 'heap', 'setTimeout']
  },
  {
    id: 168,
    title: 'What is the name of the method that is called when the promise is successful?',
    answer: 'resolve',
    correct_option_id: 1,
    random: ['reject', 'resolve']
  },
  {
    id: 169,
    title: 'What method can be used to check the fulfillment of all promises in the array?',
    answer: 'promise.all',
    correct_option_id: 0,
    random: ['promise.all', 'promise.race']
  },
  {
    id: 170,
    title: 'What method is used to catch errors in promises?',
    answer: 'catch',
    correct_option_id: 1,
    random: ['then', 'catch']
  },
  {
    id: 171,
    title: 'What does the `fetch()` method return?',
    answer: 'Promise',
    correct_option_id: 2,
    random: ['Function', 'An object', 'Promise']
  },
  {
    id: 172,
    title: 'Given only the URL parameter in `fetch()`, what request do we get?',
    answer: 'GET',
    correct_option_id: 1,
    random: ['POST', 'GET', 'PUT']
  },
  {
    id: 173,
    title: 'What parameter are the HTTP headers specified?:',
    answer: 'headers',
    correct_option_id: 1,
    random: ['redirect', 'headers', 'credentials']
  },
  {
    id: 174,
    title: 'Which method should you use to convert the response to a string?',
    answer: 'text()',
    correct_option_id: 2,
    random: ['blob()', 'json()', 'text()']
  },
  {
    id: 175,
    title: 'Where is the `async` keyword?',
    answer: 'Before the function declaration',
    correct_option_id: 0,
    random: ['Before the function declaration', 'After the function is declared', 'In the body of a function']
  },
  {
    id: 176,
    title: 'What functions does `await` work in? ',
    answer: 'Only in asynchronous functions',
    correct_option_id: 1,
    random: ['Only in synchronous functions', 'Only in asynchronous functions', 'In any function']
  },
  {
    id: 177,
    title: 'An asynchronous function is:',
    answer: 'This is the function defined by the keyword `async`',
    correct_option_id: 0,
    random: [
      'This is the function that is defined by the keyword `async`',
      'This is a function that anticipates the possibility of usingusing the `await` keyword',
      'Both options are correct'
    ]
  },
  {
    id: 178,
    title: 'The advantage of `async / await` is:',
    answer: 'Concise and clean code',
    correct_option_id: 2,
    random: ['Own code is locked', 'Concise and clean code']
  },
  {
    id: 179,
    title: 'To make objects, functions, classes or variables 🔔 accessible to the outside world, you must:',
    answer: 'Export them and then import',
    correct_option_id: 1,
    random: ['Export them and then import', 'Import them and then export']
  },
  {
    id: 180,
    title: '`Node.js®` is:',
    answer: 'JavaScript environment built on the Chrome V8 engine',
    correct_option_id: 1,
    random: ['Programming language', 'JavaScript environment built on the Chrome V8 engine', 'Browser']
  },
  {
    id: 181,
    title: '`package.json` is:',
    answer: 'JSON representation of the application and its dependencies',
    correct_option_id: 1,
    random: [
      'JavaScript environment built on the Chrome V8 engine',
      'JSON representation of the application and its dependencies',
      'The JSON Programming Language'
    ]
  }
]

module.exports = en
