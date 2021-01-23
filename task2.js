function budgetCalculator(watch, phone, laptop){
    var total= (watch*50)+(phone*100)+(laptop*500);
    return total;

}

var budget= budgetCalculator(10, 10, 10);
console.log(budget)