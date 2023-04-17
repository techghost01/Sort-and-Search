// Here's an example of how to solve it for the array {12, 11, 13, 5, 6}

// Given Array: 12 11 13 5 6

// i = 1: The first unsorted element is 11. Insert it into its correct position between 12 and 13 to get the new array 11 12 13 5 6.

// i = 2: The next unsorted element is 13. It is greater than the largest element in the sorted array, so we simply move on. The array remains 11 12 13 5 6.

// i = 3: The third unsorted element is 5. It is less than all the elements in the sorted array, so we move them all one position to the right and insert 5 into the beginning of the array, to get the new array 5 11 12 13 6.

// i = 4: The next unsorted element is 6, which is inserted into its correct position between 5 and 11, leading to the final sorted array 5 6 11 12 13.

// The steps for insertion sort would be as follows:

// i = 0: {5, 12, 11, 13, 6}
// i = 1: {5, 12, 11, 13, 6} (already sorted)
// i = 2: {5, 11, 12, 13, 6}
// i = 3: {5, 11, 12, 6, 13}
// i = 4: {5, 6, 11, 12, 13}