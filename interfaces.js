var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Anestesista"] = 1] = "Anestesista";
    Role[Role["Asistente"] = 2] = "Asistente";
    Role[Role["Administrativo"] = 3] = "Administrativo";
})(Role || (Role = {}));
var medico = {
    name: "Jesus",
    email: "Jesus@gmail.com",
    role: Role.Asistente,
    total: 25,
    printCurrentBill: function () {
        return "valor actual de la factura es de ";
    }
};
var printStaff = function (staff) {
    console.log(staff);
};
var printCurrentBill = function (bill) {
    console.log(bill.currentBill());
};
printStaff(medico);
printCurrentBill(medico);
