// 1) 
var data = [{ value: 10 }, { value: 12 }, { value: 3 }, {value: 11}, {value: 1.1}];

// var ascendinglist =  data.sort(sortAscending);
console.log(data.sort(sortAscending));

var simpleValue = data.map(item => item.value);
console.log(simpleValue);

function sortAscending(a, b) {
    return a.value > b.value;
}


