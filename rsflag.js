
// Countries name,region,subregion,popoulation and flag

const xyz = new XMLHttpRequest();
xyz.open("GET","https://restcountries.com/v3.1/all");
xyz.send();

xyz.responseType = "json";

xyz.onload = function displayResult(){
    const countries = xyz.response;
    
// For in
for(var i in countries){
    // To print countires data
    let countryData = (`${i},name:${countries[i].name.common},Region:${countries[i].region},subregion:${countries[i].subregion},population:${countries[i].population}`)
    console.log(countryData);
    // To display countries Flag
    console.log(`${countries[i].name.common},${countries[i].flags.svg}`);
}

};