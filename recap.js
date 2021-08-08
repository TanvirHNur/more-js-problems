function largestElement(numbers){
    let max =numbers[0]; //gero shouldn't be used here
    for(let i= 0; i < numbers.length; i++){
      let element =numbers[i];
      if(element > max){
          max = element
    }
 
    }
    return max;
}

let ages =[12,56,69,37,34,20];
let maxium = largestElement(ages)
console.log(maxium)

function findSmallest(numbers){
    let min = numbers[0];
    for (let i = 0; i <numbers.length; i++){
        let element = numbers[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}

let smallest= findSmallest(ages)
console.log('smallest = ', smallest)