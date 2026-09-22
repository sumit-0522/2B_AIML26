class Vehicle {
    constructor(vehicleNo, driverName, distance) {
        this.vehicleNo = vehicleNo
        this.driverName = driverName
        this.distance = distance

    }

    calculateFare() {
        console.log("Fare calculation for vehicle");
    }

    static displayPlatformName() {
        console.log("Booking Platform: Online Cab Booking");
    }
}


class car extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);

    }
    static displayPlatformName() {
        console.log(" Car Booking Details");
    }
    calculateFare() {
        let Charge_ammount = this.distance * 15
        
        console.log("Car Vehicle No:", this.vehicleNo);
        console.log("Car Driver:", this.driverName);
        console.log("Car Distance:", this.distance);
        console.log("Total ammount:", Charge_ammount)
    }
}
class Bike extends Vehicle {
    constructor(vehicleNo, driverName, distance) {
        super(vehicleNo, driverName, distance);

    }
    static displayPlatformName() {
        console.log(" Bike Booking details");
    }
    calculateFare() {
        let Charge_ammount = this.distance * 8
        console.log("Bike Vehicle No:", this.vehicleNo)
        console.log("Bike Driver:", this.driverName)
        console.log("Bike Distance:", this.distance)

        console.log("Total ammount:", Charge_ammount)
    }
}
Vehicle.displayPlatformName();

let V1 = new car(1234, "subhan", 15)
car.displayPlatformName();
V1.calculateFare()


let V2 = new Bike(1234, "vishal", 20)
Bike.displayPlatformName();
V2.calculateFare()

