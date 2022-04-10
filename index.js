// Code your solution in this file!
const result = []

const returnFirstTwoDrivers = arr => {
    let innerArray = [];
    for (let index = 0; index < 2; index++) {
        const element = arr[index];
        innerArray.push(element);
    }
    return innerArray;
}

const returnLastTwoDrivers = arr => {
    const funcArray = [];
    funcArray.unshift(arr.at(-2));
    funcArray.push(arr.at(-1))
    return funcArray;
}

const selectingDrivers = [];

selectingDrivers.push(returnFirstTwoDrivers);

selectingDrivers.push(returnLastTwoDrivers);

function createFareMultiplier(int) {
    return function (param) {
        return int * `${param}`;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(array, functionParam) {
    if (functionParam === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array);
    }
    if (functionParam === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array);
    }
}