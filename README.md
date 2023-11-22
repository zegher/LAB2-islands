## An interesting feature of ES2021

<strong>JavaScript Logical Assignment Operators</strong>

JS Logical Assignment Operators are shortcuts that let you combine logical operations with variable assignments in a single line. These operators improve code readability and efficiency, especially in situations involving default values and conditional assignments.

These logical assignments include: 
* logical AND (&&=)
* logical OR (||=)
* nullish coalescing (??=)

The table below tells us what the logical assignments do.

| Operator | Example    | Same As               |
|----------|------------|-----------------------|

| '&&='    | 'x &&= y'  | 'x = x && (x = y)'   |

| '||='    | 'x ||= y'  | 'x = x || (x = y)'   |

| '??='    | 'x ??= y'  | 'x = x ?? (x = y)'   |

<table>
  <tr>
    <th>Operator</th>
    <th>Example</th>
    <th>Same As</th>
  </tr>
  <tr>
    <td>'&&='</td>
    <td>'x &&= y'</td>
    <td>'x = x && (x = y)'</td>
  </tr>
  <tr>
    <td>'||='</td>
    <td>'x ||= y'</td>
    <td>'x = x || (x = y)'</td>
  </tr>
  <tr>
    <td>'??='</td>
    <td>'x ??= y'</td>
    <td>'x = x ?? (x = y)'</td>
  </tr>
</table>
----------------------------

<strong>The Logical OR assignment operator</strong>
The logical OR assignment operator (||=) accepts two operands and assigns the right operand to the left operand if the left operand is falsy:

```javascript
let title = 'JavaScript Awesome';
title ||= 'untitled';

console.log(title);
```

The output:

```javascript
'JavaScript Awesome';
```

In this example, the title is 'JavaScript Awesome' so it is truthy. Therefore, the logical OR assignment operator (||=) doesn’t assign the string 'untitled' to the title variable.

----------------------------

<strong>The Logical AND assignment operator</strong>

```javascript
let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};

person.lastName &&= 'Smith';

console.log(person);
```

The output:

```javascript
{firstName: 'Jane', lastName: 'Smith'}
```

This example uses the logical AND assignment operator to change the last name of a person object if the last name is truthy:

----------------------------

<strong>The nullish coalescing assignment operator</strong>

```
let user = {
    username: 'Satoshi'
};
user.nickname ??= 'anonymous';

console.log(user);
```

The output:

```javascript
{username: 'Satoshi', nickname:'anonymous'}
```

In this example, the user.nickname is undefined, therefore, it’s nullish. The nullish coalescing assignment operator assigns the string 'anonymous' to the user.nickname property.

----------------------------

#TLDR
* The logical OR assignment (x ||= y) operator only assigns y to x if x is falsy.
* The logical AND assignment (x &&= y) operator only assigns y to x if x is truthy.
* The nullish coalescing assignment (x ??= y) operator only assigns y to x if x is nullish.

Sources

JavaScript Tutorial. (n.d.). Logical Assignment Operators. Retrieved from https://www.javascripttutorial.net/es-next/javascript-logical-assignment-operators/
W3Schools. (n.d.). JavaScript Assignment. Retrieved from https://www.w3schools.com/js/js_assignment.asp
