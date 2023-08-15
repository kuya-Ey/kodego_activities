// function heapify(arr, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && arr[left] > arr[largest]) {
//         largest = left;
//     }

//     if (right < n && arr[right] > arr[largest]) {
//         largest = right;
//     }

//     if (largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//     }
// }

// function heapSort(arr) {
//     const n = arr.length;

//     // Build heap (rearrange array)
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     // Extract elements from the heap one by one
//     for (let i = n - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap the root (maximum) element with the last element
//         heapify(arr, i, 0); // Call heapify on the reduced heap
//     }

//     return arr;
// }

// const unsortedArray = [12, 11, 13, 5, 6, 7];
// const sortedArray = heapSort(unsortedArray);
// console.log(sortedArray); // Output: [5, 6, 7, 11, 12, 13]

// JavaScript program for implementation
// of Heap Sort

function sort( arr)
{
    var N = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        // heapify(arr, N, i);

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        // heapify(arr, i, 0);
    }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, N, i)
{
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        // heapify(arr, N, largest);
    }
}

/* A utility function to print array of size n */
function printArray(arr)
{
    var N = arr.length;
    for (var i = 0; i < N; ++i)
        document.write(arr[i] + " ");
    
}


var arr = [12, 50, 11, 120, 13, 999, 5, 250, 6, 7];
var N = arr.length;
console.log('Input Array:', arr);

sort(arr);

// document.write( "Sorted array is");
console.log("Output: Sorted array is",arr, N);

// time complexity
let start = Date.now();
arr = [12, 50, 11, 120, 13, 999, 5, 250, 6, 7];
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");


// This code is contributed by SoumikMondal
