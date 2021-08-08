// const names = ['abul', 'kabul', 'jamal',  'naimul', 'abul', 'jamal', 'gabul', 'sabul', 'tabul', 'sabul'];

// function removeDuplicate (names){
//     const unique = []
//     for (let i = 0; i < names.length; i++){
//         const element = names[i];
//         if (unique.indexOf(element) == -1){
//             unique.push(element)
//         }
//     }
//     return unique;
// }

// let finalList = removeDuplicate(names);
// console.log(finalList)


//for of loop

const names = ['abul', 'kabul', 'jamal',  'naimul', 'abul', 'jamal', 'gabul', 'sabul', 'tabul', 'sabul'];

function removeDuplicate1 (names){
    const unique =[];
    for (const element of names)
    if (unique.indexOf(element) == -1){
        unique.push(element);
    }
    return unique;
}

let finalList1 = removeDuplicate1(names);
console.log(finalList1);


// remove Duplicate numbers from an array 
// let numbers = [1,1,2,3,2,4,3,4,5,6,7,7,6,5,9,100,9,1000,100]
// function removeDuplicateNumber(numbers){
//     const unique = [];
//     for (const element of numbers){
//             if(unique.indexOf(element) == -1){
//         unique.push(element)
//     }
// }
//     return unique;
// }
// const finalNumbers = removeDuplicateNumber(numbers);
// console.log(finalNumbers);