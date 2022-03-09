---
title: Arrays in JavaScript
summary: Arrays are ordered collections
image: code-image.jpg
isFeatured: true
date: '2022-03-09'
---

## Declaration
```js
1. let arr = new Array();
2. let arr = [];
```
Array elements are numbered, starting with zero. We can get an element by its number in square brackets.
The total count of the elements in the array is its length.
An array is JavaScript can store elements of any type.

```js
const fruits = ['Apple', 'Orange', 'Plum'];
console.log(fruits[0]); // Apple
console.log(fruits.length); // 3
```

## Array Methods
- Push - adds element or elements to the end of the array, and returns the new length of array
- Pop - removes one element from the end of the array, and returns that element
- Unshift - adds element or elements to the beginning of the array
- Shift - removes one element from the beginning of the array, and returns that element

```js
const fruits = ['Apple', 'Orange', 'Pear'];
console.log(fruits.pop()); // Pear
console.log(fruits.push('Pineapple', 'Banana')); // 4
```