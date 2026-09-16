# JavaScript Arrays — Beginner to Intermediate Operations (Q121–140)

A comprehensive lab implementation marking Day 16 of the coding challenge (JS Day 9). This set covers foundational array creation, mutation methods, modern non-mutating ES features, intermediate slicing and splicing, string joining, and advanced ES6+ features like the spread operator and array destructuring.

---

## 🚀 Key Learnings & Core Concepts

### 1. Array Creation & Basic Indexing
- **Initialization & Length:** Declared arrays and retrieved length metrics using the `.length` property.
- **Index-Based Access:** Extracted boundary elements cleanly via index `0` and `arr[arr.length - 1]`.

### 2. Array Mutation Methods
- **End Operations:** Added elements with `.push()` and removed elements with `.pop()`.
- **Start Operations:** Inserted elements at the beginning using `.unshift()` and removed leading items using `.shift()`.
- **In-place Reversal:** Mutated original sequence arrays directly using `.reverse()`.

### 3. Modern Non-Mutating Array Methods (ES2023+)
- **Safe Reversal:** Utilized `.toReversed()` to return a reversed copy without modifying the source array.
- **Custom Numeric Sorting:** Implemented `.toSorted()` using sorting comparator functions (`(a, b) => a - b` for ascending and `(b, a) => b - a` for descending) to keep raw arrays intact.

### 4. Intermediate Manipulation & Searching
- **Splice Operations:** Modified array structures dynamically by removing items and inserting replacement elements using `.splice()`.
- **Cloning & Extraction:** Cloned sections or entire arrays safely using `.slice()`[cite: 6].
- **Element Location & Validation:** Searched arrays using `.indexOf()` for index positions and `.includes()` for boolean presence checks.
- **String Conversion:** Formatted array contents into unified strings using `.join()` with custom separators.

### 5. Spread Operator & Destructuring Utilities
- **Array Merging & Copying:** Combined multiple arrays and cloned collections cleanly using the spread operator (`...`).
- **Math Integration:** Passed spread-expanded array elements directly into utility functions like `Math.max().
- **Variable Swapping:** Swapped variable values efficiently via array destructuring assignment (`[a, b] = [b, a]`).
