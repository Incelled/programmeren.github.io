function array2(size) {
    return new Array(size);
}

function sortingprogram(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function binarysearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

var array1 = array2(50);
for (var i = 0; i < 50; i++) {
    array1[i] = Math.floor(Math.random() * 100);
}
sortingprogram(array1);

function displaySortedArray() {
    document.getElementById("sortedArray").innerText = "These are the generated numbers: " + array1.join(", ");
}

function searchNumber() {
    var numbercounter = parseInt(document.getElementById("searchInput").value, 10);
    var index = binarysearch(array1, numbercounter);
    if (index !== -1) {
        document.getElementById("searchResult").innerText = "This number was generated on spot " + (index + 1);
    } else {
        document.getElementById("searchResult").innerText = "The given number was not generated";
    }
}