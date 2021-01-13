// Your code here
function mapToNegativize(arr) {
    return arr.map(x => x * -1);
}

function mapToNoChange(arr) {
    return arr.map(x => x);
}

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2);
}

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x);
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    const reducer = function(accumulator, currentValue) { return accumulator + currentValue }

    return sourceArray.reduce(reducer, startingPoint)
}

function reduceToAllTrue(arr) {
    const reducer = function(accumulator, currentValue) {
        if (!!accumulator == true && !!currentValue == true) {
            return true;
        } else {
            return false;
        }
    }
    return arr.reduce(reducer, true)
}


function reduceToAnyTrue(sourceArray) {
    const reducer = function(accumulator, currentValue) {
        if (accumulator == true) {
            return true
        } else {
            return !!currentValue
        }
    }
    return sourceArray.reduce(reducer, false)
}