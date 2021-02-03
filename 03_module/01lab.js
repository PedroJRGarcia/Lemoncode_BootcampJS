const worker = { bruto: 14500, sons: 2, wages: 14};

const withHolding = worker.sons > 0 ? 0.02 : 0;

let anualNeto;
if (worker.brutto < 12000) {
    anualNeto = worker.bruto - ((0-withHolding) * worker.bruto);
}else if (worker.bruto >= 12000 && worker.bruto < 24000) {
    anualNeto = worker.bruto - ((0.08-withHolding) * worker.bruto);
}else if (worker.bruto >= 24000 && worker.bruto < 34000) {
    anualNeto = worker.bruto - ((0.16-withHolding) * worker.bruto);
}else if (worker.bruto >= 34000) {
    anualNeto = worker.bruto - ((0.30-withHolding) * worker.bruto);
};

const extrapay = worker.wages = 14 ? worker.wages : 12;

let monthNeto = console.log("Salary ", anualNeto/extrapay, " €");