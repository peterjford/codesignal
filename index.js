// function findFirstDuplicateID(ids) {
//     let idSet = new Set();
//     for (let i = 0; i < ids.length; i++) {
//         if (!idSet.has(ids[i])) {
//             idSet.add(ids[i]);
//         }
//         else {
//             return(ids[i]);
//         }
//     }

//     // Return an empty string if no duplicate ids are found

//     return ""
// }
// console.log(findFirstDuplicateID(["X123", "A456", "X123", "B789", "A456", "C111"])); // Expected "X123"
// console.log(findFirstDuplicateID(["Z999", "Y888", "Z999", "Y888"])); // Expected "Z999"
// console.log(findFirstDuplicateID(["E100", "B200", "C300", "E100", "D400", "C300"])); // Expected "E100"

// MAPS
// let superstoreStock = new Map();

// Stock item
// superstoreStock.set('toothpaste', 1000); // Stock 1000 toothpaste
// superstoreStock.set('soap', 500); // Stock 500 soap
// superstoreStock.set('shampoo', 800); // Stock 800 shampoo

// Purchase is made
// console.log(superstoreStock.get('toothpaste')); // Outputs: 1000 (current quantity)
// superstoreStock.set('toothpaste', superstoreStock.get('toothpaste') - 1); // Toothpaste is bought
// console.log(superstoreStock.get('toothpaste')); // Outputs: 999 (updated quantity)

// Item is out of stock, will be replaced later
//superstoreStock.delete('soap'); // Soap is removed
// superstoreStock.set('soap', superstoreStock.get('soap') - 500);
// console.log(superstoreStock.has('soap')); // Outputs: false
// console.log(superstoreStock.get('soap'));
// superstoreStock.forEach((key, value) => {
//     console.log(key, value)
//     if (key < 1) {
//         console.log(value+ " needs to be restocked");
//     }
// })
// Item is restocked
// superstoreStock.set('soap', 500); // Soap is restocked
// console.log(superstoreStock.has('soap')); // Outputs: true

// function findCelebrity(arr) {
//     let countMap = new Map();
//     let majorityThreshold = arr.length / 2;
//     for (let num of arr) {
//         countMap.set(num, (countMap.get(num) || 0) + 1);
//         if (countMap.get(num) > majorityThreshold) {
//             return num;
//         }
//     }
//     return(-1);
// }
// const guests = ["Ronan", 'Ayrton', 'Maui', 'Shannon', 'Ayrton', 'Maui', 'Shannon', 'Ayrton', 'Ayrton', 'Ayrton', 'Ayrton'];
// console.log(findCelebrity(guests));
// function createKeywordIndex(documents) {
//     const index = new Map();
// }


// function createWordIndex(sentence) {
//     let index = new Map();
//     let words = sentence.split(' ');
//     if (words.length > 0) {
//         for (let word of words) {
//             index.set(word.toLowerCase(), (index.get(word.toLowerCase()) || 0) + 1);
//         }
//         return index;
//     }
//     return("");
// }
//     let sentence1 = "Hello Hello world world world";
// let index1 = createWordIndex(sentence1);
// console.log(index1); //Should print: { hello: 2, world: 3 }

// let sentence2 = "";
// let index2 = createWordIndex(sentence2);
// console.log(index2); //Should print {} as the sentence is empty.

// let sentence3 = "Quick Quick brown fox jumps over the lazy dog";
// let index3 = createWordIndex(sentence3);
// console.log(index3); //Should print: { quick: 2, brown: 1, fox: 1, jumps: 1, over: 1, the: 1, lazy: 1, dog: 1 }

// function factorial(n) {
//     if (n === 1) { // base case
//       return 1;
//     } else {
//       return n * factorial(n-1); // recursive case
//     }
//   }
//   console.log(factorial(3)); // Will print 6 (3 * 2 * 1)

//   function sumOfDigits(num) {
//     if(num < 10) { // Base case
//       return num;
//     }
//     else {
//       return num % 10 + sumOfDigits(Math.floor(num / 10)); // Recursive case
//     }
//   }
//   console.log(sumOfDigits(12345)); // Will print 15 (1+2+3+4+5)
//   function countDigits(number) {
//     if(number < 10) {
//       return 1; // Base case: a single digit
//     } else {
//       return 1 + countDigits(Math.floor(number / 10)); // Recursive case
//     }
//   }
//   console.log(countDigits(1302)); // Should output 4
// countMap.set(num, (countMap.get(num) || 0) + 1);

// function createKeywordIndex(documents) {
//   const index = new Map(); 
// documents.forEach((doc, docIndex) => {
//     let words = doc.split(/\s+/);
//     words.forEach(word => {
//       // Index the words, assigning each word its document references
//       if (index.has(word)) {
//         index.get(word).add(docIndex);
//       } else {
//         // Encountering a new word, we create a new entry in our index
//         index.set(word, new Set([docIndex]));
//       }
//     });
//   });
//   return index;
// } 

// function recursiveBinarySearch(arr, start, end, target) {
//   // Base case: the search area is empty
//   if (start > end) return -1;
//   // Find the midpoint
//   let mid = Math.floor((start + end) / 2);
//   // Found the target
//   if (arr[mid] == target) return mid;
//   // If the target is less than the midpoint, search the left half
//   if (arr[mid] > target)
//       return recursiveBinarySearch(arr, start, mid - 1, target);
//   // Else, search the right half
//   return recursiveBinarySearch(arr, mid + 1, end, target);
// }

// function iterativeBinarySearch(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//       let mid = Math.floor((start + end) / 2);
//       if (arr[mid] == target) return mid; // Found the target
//       if (arr[mid] < target) start = mid + 1; // Search the right half
//       else end = mid - 1; // Search the left half
//   }
//   return -1;
// }

// bitonic
// function bitonicBinarySearch(arr, target) {
//   let start = 0, end = arr.length -1;
//   while (start < end) {
//     let mid = Math.floor((start  + end) / 2);
//     if (arr[mid] > arr[mid +1]) {
//       end = mid;
//     }
//     else {
//       start = mid + 1;
//     }
//   }
//   let peak = start;
//   let assTarget = findAss(peak, arr, target);
//   let desTarget = findDes(peak, arr, target);
//   return(assTarget + ' ' + desTarget);
// }

// function findAss(peak, arr, target) {
//   let start = 0, end = peak;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     }
//     else if (arr[mid] < target) {
//       start = mid + 1;
//     }
//     else {
//       end = mid -1;
//     }
//   }
// }

// function findDes(peak, arr, target) {
//   let start = peak, end = arr.length -1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     }
//     else if (arr[mid] > target) {
//       start = mid + 1;
//     }
//     else {
//       end = mid - 1;
//     }
//   }
// }

// arr = [1, 2, 3, 4, 5, 3, 1];
// console.log(bitonicBinarySearch(arr, 3));

// function rotatedArrFindMax(arr) {
//   let start = 0, end = arr.length -1;
//   while (start < end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] < arr[end]) { // switch to > to find min
//       start = mid + 1;
//     }
//     else {
//       end = mid;
//     }
//   }
//   return arr(start);
// }

// function findPosition(arr, x) {
//         // TODO: find peak using the implemented findPeak function
//         console.log('calling find peak');
//         let peak = findPeak(arr);
//         console.log("peak: ", peak);
//         // TODO: search to the left of the peak
//         console.log("calling binarySearch assending");
//         let assend = binarySearch(arr, x, 0, peak, true);
//         console.log("Assending: ", assend);
//         if (assend !== -1) {
//             return(assend);
//         }
//         // TODO: search to the right of the peak
//         return(binarySearch(arr, x, peak, arr.length -1, false));
// }

// function findPeak(arr) {
//     var low = 0, high = arr.length - 1;
//     // TODO: implement this
//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] > arr[mid + 1]) {
//             high = mid;
//         } 
//         else {
//             low = mid + 1;
//         }
//     }
//     return low;
// }

// function binarySearch(arr, x, low, high, ascending) {
//     while (low <= high) {
//         var mid = Math.floor(low + (high - low) / 2);
//         if (arr[mid] == x) {
//             return mid;
//         } else if (ascending) {
//             if (arr[mid] < x) {
//                 low = mid + 1;
//             } else {
//                 high = mid - 1;
//             }
//         } else {
//             // TODO: implement descending binary search logic
//             if (arr[mid] > x) {
//                 low = mid + 1;
//             }
//             else {
//                 high = mid - 1;
//             }
//         }
//     }
//     return -1;
// }

// var arr = [-3, -2, 4, 6, 10, 8, 7, 1];
// var x = 7;
// var position = findPosition(arr, x);
// if (position == -1) {
//     console.log("Element not present");
// } else {
//     console.log("Element present at index " + position);
// }

// function findMax(nums) {
//   let start = 0, end = nums.length -1;
//   while (start < end) {
//     let mid = Math.floor((start + end) /2);


//   }
// }

// function isPalindrome(input) {
// 	// TODO: candidate code goes here
//   input = input.toLowerCase();
//   input = input.replace(/[^a-zA-Z]/g, '');
  
// 	let start = 0, end = input.length -1;
//   if (input.length === 0) {
//     return false;
//   }
// 	while (start < end) {
// 			if (input[start] === input[end]){
// 				end--;
// 				start++;
// 			}
// 			else {
// 			return false;
// 			}
// 		}
// 		return true;
// 	}

//   console.log(isPalindrome("lotion"));
//   console.log(isPalindrome("Step  on no pets"));
//   console.log(isPalindrome("No lemon no melons"));
//   console.log(isPalindrome("Eva - can I see bees in a cave?"));
//   console.log(isPalindrome("A man, a plan, a canal: Panama!"));

// function partition(arr, low, high) {
// 	let pivot = arr[high], i = low - 1;
// 	for (let j = low; j < high; j++) {
// 		if (arr[j] <= pivot) {
// 			i++;
// 			[arr[i], arr[j]] = [arr[j], arr[i]];
// 		} 
// 	}
// 	[arr[i+1, arr[high]] = arr[high], arr[i + 1]];
// 	return i + 1
// }

// function quickSort(arr, low, high) {
// 	if (low < high) {
// 		let pi = partition(arr, low, high);
// 		quickSort(arr, low, pi - 1);
// 		quickSort(arr, pi +i, high);
// 	}
// }

// function merge(left, right) {
// 	let resultArray = [], leftIndex = 0, rightIndex = 0;
// 	while (leftIndex < left.length && rightIndex < right.length) {
// 		if (left[leftIndex] < right[rightIndex]) {
// 			resultArray.push(left[leftIndex]);
// 			leftIndex++;
// 		}
// 		else {
// 			resultArray.push(right[rightIndex]);
// 			rightIndex++;
// 		}
// 	}
// 	return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// function simpleMergeSort (cards) {
// 	if (cards.length <= 1) return(cards);
// 	const middle = Math.floor(cards.length / 2);
// 	const leftHalf = cards.slice(0, middle);
// 	const rightHalf = cards.slice(middle);

// 	return merge(simpleMergeSort(leftHalf) , simpleMergeSort(rightHalf));
// }

// const mixedDeck = [3, 2, 7, 5, 4, 9, 6, 1, 8];
// console.log(simpleMergeSort(mixedDeck));

// function merge(left, right) {
//     let merged = [], i = 0, j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             merged.push(left[i++]);
//         } else {
//             merged.push(right[j++]);
//         }
//     }
//     return merged.concat(left.slice(i)).concat(right.slice(j));
// }

// function mergeSort(cards) {
//     if (cards.length <= 1) return cards;
//     const middle = Math.floor(cards.length / 2);
//     const leftHalf = cards.slice(0, middle);
//     const rightHalf = cards.slice(middle);
//     return merge(mergeSort(leftHalf), mergeSort(rightHalf));
// }

// const miniDeck = [5, 2, 10, 3];
// let sortedDeck = mergeSort(miniDeck);
// console.log(sortedDeck);

// function merge(left, right) {
//     let resultArray = [], leftIndex = 0, rightIndex = 0;

//     // Sorting and merging process
//     while(leftIndex < left.length && rightIndex < right.length) {
//         if(left[leftIndex] < right[rightIndex]) {
//             resultArray.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             resultArray.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
// 	return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }
// function simpleMergeSort(cards) {
//     if (cards.length <= 1) return cards;
//     const middle = Math.floor(cards.length / 2);
//     const leftHalf = cards.slice(0, middle);
//     const rightHalf = cards.slice(middle);
//     return merge(simpleMergeSort(leftHalf), simpleMergeSort(rightHalf));
// }
// // A deck with some cards mixed up
// const mixedDeck = [3, 2, 7, 5, 4, 9, 6, 1, 8];
// console.log(simpleMergeSort(mixedDeck));

// let friends = ["Tom", "Jerry", "Mickey", "Donald"];
// friends.sort();

// console.log(friends); 
// Output: ["Donald", "Jerry", "Mickey", "Tom"]

// let numbers = [5, 1, 8, 3];
// numbers.sort();
// console.log(numbers); // output: [1, 2, 5, 8]

// let numbers = [15, 1, 100, 3];
// numbers.sort((a, b) => a - b); // This will sort numbers in ascending order

// console.log(numbers); // Output: [1, 3, 15, 100]

// let scores = [60, 90, 82, 100, 56];
// scores.sort((a, b) => b - a);

// console.log(scores); // Output: [100, 90, 82, 60, 56]

// let students = [
// 	{ name: "Tom", grade: 90 },
// 	{ name: "Jerry", grade: 95 },
// 	{ name: "Mickey", grade: 90 },
// 	{ name: "Donald", grade: 95 }
//   ];

//   students.sort((a, b) => {
// 	if (a.grade < b.grade) return -1;
// 	if (a.grade > b.grade) return 1;
// 	// grades are the same
// 	if (a.name < b.name) return -1;
// 	if (a.name > b.name) return 1;

// 	return 0;
// });

// console.log(students);

// let products = [
// 	{ name: "Laptop", price: 1200 },
// 	{ name: "Phone", price: 800   },
// 	{ name: "Tablet", price: 600  } 
// ];

// products.sort((a, b) => a.price - b.price);
// console.log(products);

// let products = [
// 	{ name: "Laptop", price: 1200 },
// 	{ name: "Phone", price: 800 },
// 	{ name: "Tablet", price: 500 },
// 	{ name: "Earbuds", price: 300 }
//   ];
  
//   // TODO: Sort products alphabetically by name in ascending order
//   products.sort((a, b) => {
// 	if (a.name > b.name) return 1;
// 	if (a.name < b.name) return -1;
// 	return 0;
//   });
//   console.log(products); 
let products = [
	{ category: "Electronics", price: 299 },
	{ category: "Books", price: 19 },
	{ category: "Electronics", price: 199 },
	{ category: "Books", price: 29 }
  ];
  
  products.sort((a, b) => {
	if (a.category > b.category) return 1;
	if (a.category < b.category) return -1;
	if (a.price > b.price) return 1;
	if (a.price < b.price) return -1;
	return 0;
	// TODO: sort by category first, and then by price in case of a tie
  });
  
  console.log(products);