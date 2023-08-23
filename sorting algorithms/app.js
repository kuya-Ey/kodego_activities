// JavaScript program for implementation
// of Heap Sort



// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, N, i)
{
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest])

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest);
    }
}

function sort( arr)
{
    var N = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        heapify(arr, N, i);

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
        console.log(arr);
    }
    // console.log(heapify);
}

/* A utility function to print array of size n */
function printArray(arr)
{
    var N = arr.length;
    for (var i = 0; i < N; ++i);
        // document.write(arr[i] + " ");
    
}


var arr = [2, 8, 5, 10, 3, 9, 4, 1];
var N = arr.length;
console.log('Input Array:', arr);

sort(arr);

// document.write( "Sorted array is");
console.log("Output: Sorted array is",arr, N);

// time complexity
let start = Date.now();
heapify(arr, N);
sort(arr, N);
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");





// // JavaScript program for implementation
// // of Heap Sort

// function sort( arr)
// {
//     let N = arr.length;

//     // Build heap (rearrange array)
//     for (let i = Math.floor(N / 2) - 1; i >= 0; i--)
//         heapify(arr, N, i);

//     // One by one extract an element from heap
//     for (let i = N - 1; i > 0; i--) {
//         // Move current root to end
//         let temp = arr[0];
//         arr[0] = arr[i];
//         arr[i] = temp;

//         // call max heapify on the reduced heap
//         heapify(arr, i, 0);
//     }
// }

// // To heapify a subtree rooted with node i which is
// // an index in arr[]. n is size of heap
// function heapify(arr, N, i)
// {
//     let largest = i; // Initialize largest as root
//     let l = 2 * i + 1; // left = 2*i + 1
//     let r = 2 * i + 2; // right = 2*i + 2

//     // If left child is larger than root
//     if (l < N && arr[l] > arr[largest])
//         largest = l;

//     // If right child is larger than largest so far
//     if (r < N && arr[r] > arr[largest])
//         largest = r;

//     // If largest is not root
//     if (largest != i) {
//         let swap = arr[i];
//         arr[i] = arr[largest];
//         arr[largest] = swap;

//         // Recursively heapify the affected sub-tree
//         heapify(arr, N, largest);
//     }
// }

// /* A utility function to print array of size n */
// function printArray(arr)
// {
//     let N = arr.length;
//     for (let i = 0; i < N; ++i);
//         document.write(arr[i] + " ");
    
// }


// let arr = [12, 50, 11, 120, 13, 999, 5, 250, 6, 7];
// let N = arr.length;
// console.log('Array Input is', arr );

// sort(arr);

// // document.write( "Sorted array is");
// console.log("Sorted array is", arr,);


// // This code is contributed by SoumikMondal
