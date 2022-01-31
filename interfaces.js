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
    role: Role.Asistente
};
var printStaff = function (staff) {
    console.log(staff);
};
printStaff(medico);
