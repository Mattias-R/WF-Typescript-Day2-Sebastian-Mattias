class Vehicle{
    constructor(carImg,km,price,fuel,color){
        this.carImg = carImg;
        this.km = km;
        this.price = price;
        this.fuel = fuel;
        this.color = color;
    }
    showNotAll() {
        return `${this.carImg}${this.price}`
    }
}   

class Car extends Vehicle{
    constructor(carImg,km,price,fuel,color,model,brand,seats){
        super(carImg,km,price,fuel,color);
        this.model = model;
        this.brand = brand;
        this.seats = seats;
    }
   
    showAll() {
        return `${this.carImg}${this.price}${this.km}${this.fuel}${this.color}${this.model}${this.brand}${this.seats}`
    }
}

class Plane extends Vehicle{
    constructor(carImg,km,price,fuel,color,model,brand){
        super(carImg,km,price,fuel,color);
        this.model = model;
        this.brand = brand;
    }

    showAll() {
        return `${this.carImg}${this.price}${this.km}${this.fuel}${this.color}${this.model}${this.brand}`
    }

}
let plane1 = new Plane("carImg","km","price","fuel","color","model","brand")