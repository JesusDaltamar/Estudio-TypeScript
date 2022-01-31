var Vehicle = /** @class */ (function () {
    function Vehicle(b) {
        this.brandName = b;
    }
    Vehicle.prototype.drive = function () {
        console.log("Conduciendo un vehiculo " + this.brandName);
    };
    return Vehicle;
}());
var vehicle = new Vehicle("mazda");
//vehicle.drive();
//console.log(vehicle);
var motocicleta = {
    brandName: "Yamaha",
    drive: vehicle.drive
};
console.log(motocicleta.drive());
