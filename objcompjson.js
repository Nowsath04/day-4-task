//To compare two json have the same properties:

//To compare two json have the same properties:without order
// false
let carData1 = {model:"celerio",mileage:"25"};
let carData2 = {mileage:"25",model:"celerio"};
console.log(JSON.stringify(carData1) === JSON.stringify(carData2));


//To compare two json have the same properties:with order
// True
let carData3 = {model:"celerio",mileage:"25"};
let carData4 = {model:"celerio",mileage:"25"};
console.log(JSON.stringify(carData3) === JSON.stringify(carData4));

//To compare two json have the same properties:without order
// false
let carData5 = {model:"celerio",mileage:"25"};
let carData6 = {model:"Tiago",mileage:"25"};
console.log(JSON.stringify(carData5) === JSON.stringify(carData6));

//To compare two json have the same properties:with order
// True
let carData7 = {model:"celerio",mileage:"25"};
let carData8 = {model:"celerio",mileage:"25"};
console.log(JSON.stringify(carData7) === JSON.stringify(carData8));

