class car{
    constructor(brand, model, price, year){
        this.brand=brand;
        this.model=model;
        this.price=price;
        this.year=year;

    }
}


class carStore{
    constructor(){
       this.cars=[];
       


       this.addCars= function(car){
           this.cars[this.cars.length]=car;
       }

    }

}


var carSt = new carStore()


do{
    var carcount= prompt("say daxil edin:")

}while(isNaN(carcount))

for(let i=0; i<carcount; i++){
    let carbrand=prompt("masinin brand name-ni daxil edin:")
    let carmodel=prompt("modeli daxil edin:")

    do{

        var carprice=prompt("qiymet daxil edin:")
    }while(isNaN(carprice))

    do{

        var caryear=prompt("il daxil edin:")
    }while(isNaN(caryear))

    var car1 = new car(
        brand = carbrand,
        model = carmodel,
        price = carprice,
        year = caryear
    )

    carSt.addCars(car1)
}


for(i=0;i<carSt.cars.length;i++){
    console.log(`MODEL: ${carSt.cars[i].model} BRAND : ${carSt.cars[i].brand} PRICE: ${carSt.cars[i].price} YEAR: ${carSt.cars[i].year}`);
    
}