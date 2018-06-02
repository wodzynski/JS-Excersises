//*** printReverse() ***

function printReverse(array) {
    for (let i = (array.length - 1); i >= 0; i--) {
        console.log(array[i]);
    }
}

//*** isUniform() ***

function isUniform(vec) {
    var check = vec[0];
    for (var i = 0; i < vec.length; i++) {
        if (check !== vec[i]) { return false }
    }
    return true

    // var check = vec[0];
    // var result = true
    // vec.forEach(function(a) {
    //     if (check !== a) { result = false }
    // });
    // return result

    // The return doesn't escape from .forEach loop, that's why it won't work without additional variable.

}

//*** sumArray() ***

function sumArray(vec) {
    var sum = 0

    // moje rozwiązanie, długościowo podobne:
    // for (let i = 0; i < vec.length; i++) {
    //     sum += vec[i];
    // }
    // console.log(sum);

    vec.forEach(function(el) {
        sum += el;
    });
    return sum;
}

//*** max() ***

function max(vec) {
    var maxv = vec[0];
    vec.forEach(function(a) {
        if (maxv < a) { maxv = a }
    });
    return maxv
}