// Array - Beginner Level
// 121. Create an array of 5 fruits.
const fruitsArr = ["Apple", "Banana", "Mango", "Orange", "Watermelon"]
console.log(fruitsArr)

// 122. Print first and last element of array.
let firstItem = fruitsArr[0]
let lastItem = fruitsArr[fruitsArr.length - 1]
console.log(firstItem, lastItem)

// 123. Find length of array.
let lengthOfArr = fruitsArr.length
console.log(lengthOfArr)

// 124. Add element at end using `push`.
fruitsArr.push("Grapes")
console.log(fruitsArr)

// 125. Remove last element using `pop`.
fruitsArr.pop()
console.log(fruitsArr)

// 126. Add element at beginning using `unshift`.
fruitsArr.unshift("Grapes")
console.log(fruitsArr)

// 127. Remove first element using `shift`.
fruitsArr.shift()
console.log(fruitsArr)

// 128. Reverse an array.
// `toReversed` don't change the original array
let revArr = fruitsArr.toReversed()
console.log(revArr)
// `reversed` change the original array
fruitsArr.reverse()
console.log(fruitsArr)

// 129. Sort numbers ascending.
const numArr = [34, 42, 10, 80, 97, 28]
let sortAcend = numArr.toSorted((a, b) => a - b)
console.log(sortAcend)

// 130. Sort numbers descending.
let sortDecend = numArr.toSorted((a, b) => b - a)
console.log(sortDecend)

// Array - Intermediate Level
// 131. Use `splice` to remove elements.
numArr.splice(2, 1)
console.log(numArr)

// 132. Use `splice` to insert elements.
numArr.splice(2, 0, 100, 200)
console.log(numArr)

// 133. Use `slice` to copy array.
let numArrCopy = numArr.slice()
console.log(numArrCopy)

// 134. Find index of an element.
console.log(numArr.indexOf(100))

// 135. Check if array contains a value.
console.log(numArr.includes(200))

// 136. Join array elements ' '.
console.log(fruitsArr.join("--"))

// 137. Merge two arrays using spread operator.
let arr1 = [23, 92, 18, 40, 37]
let arr2 = [78, 89, 56, 92, 24]
const mergedArr = [...arr1, ...arr2]
console.log(mergedArr)

// 138. Copy array using spread operator.
let fruitArrCopy = [...fruitsArr]
console.log(fruitArrCopy)

// 139. Find maximum value using `Math.max`.
console.log(Math.max(...arr1))

// 140. Swap two variables using destructuring.
let a = 10
let b = 30;
[a, b] = [b, a]
console.log(a, b)

