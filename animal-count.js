function animalCount (miles){
    const animalDensityFirst10Miles =10;
    const animalDensitySecond10Miles =50;
    const animalDensityThird10Miles = 100;
    if(miles <=10){
        const conunt = miles * animalDensityFirst10Miles;
        return conunt;
    }

    if (miles <= 20){
        let firstDenseAnimal = 10 *animalDensityFirst10Miles;
        let restMiles =miles - 10;
        let secondDenseAnimal = restMiles * animalDensitySecond10Miles;
        let totalAnimal = firstDenseAnimal + secondDenseAnimal;
        return totalAnimal;
    }
    if(miles > 20 ){
        let firstDenseAnimal = 10 *animalDensityFirst10Miles;
        let secondDenseAnimal = 10 * animalDensitySecond10Miles;
        let restMiles = miles - 20;
        let thirdDenseAnimal = restMiles * animalDensityThird10Miles;
        let totalAnimalCount = firstDenseAnimal + secondDenseAnimal+ thirdDenseAnimal;
        return totalAnimalCount;
    }
}

let first = animalCount(10);
console.log('first time', first, 'animals');
let second = animalCount(14);
console.log('second time', second, 'animals');
let third = animalCount(25);
console.log('Third time', third, 'animals');


