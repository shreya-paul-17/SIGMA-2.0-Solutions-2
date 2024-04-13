// A function representing an object car with properties like "make", "model" and "year"

const car = {
    make: "Porsche",
    model: "Macan",
    year: "2005"
}

function carProperties(){
    for(const property in car){
        console.log(`${property} : ${car[property]}`);
    }
}

carProperties()

  
  