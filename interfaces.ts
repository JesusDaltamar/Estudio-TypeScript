enum Role{
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}

interface Staff{
    name: string,
    email: string,
    role: Role
}

const medico = {
    name: "Jesus",
    email: "Jesus@gmail.com",
    role: Role.Asistente
}

const printStaff = (staff: Staff)=>{
    console.log(staff);
}

printStaff(medico);