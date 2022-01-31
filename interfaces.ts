enum Role{
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}

interface Staff {
    name: string,
    email: string,
    role: Role
}

interface Billable {
    total: number,
    currentBill(): string
}

const medico = {
    name: "Jesus",
    email: "Jesus@gmail.com",
    role: Role.Asistente,
    total: 25,
    printCurrentBill(){
        return "valor actual de la factura es de";
    }
};

const printStaff = (staff: Staff)=>{
    console.log(staff);
}

const printCurrentBill = (bill:Billable)=>{
    console.log(bill.currentBill());
}

printStaff(medico);
