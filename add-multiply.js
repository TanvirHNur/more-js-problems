/* 
Chair = 5cft/chair
tablewood = 20cft\table
bedwood = 50cft/bed

*/function woodcalculator(chairQuantity,tableQunatity, bedQuantity){
    
    const perChairWood = 5;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQuantity * perChairWood;
    const tablewood = tableQunatity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    let total =chairWood+ tablewood + bedWood;
    return total;
}

let totalWood = woodcalculator(12 ,2,3)
console.log(totalWood)