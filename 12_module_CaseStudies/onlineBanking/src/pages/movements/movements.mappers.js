export const mapAccountApiToVm = headers => {
    return {
        alias: headers.name,
        balance: `${headers.balance} €`,
        iban: headers.iban,
    };
};

const mapMovementsApiToVm = movements => {
    return {
        id: movements.id,
        transaction: new Date(movements.transaction)
        .toLocaleDateString(),
        realTransaction: new Date(movements.realTransaction)
        .toLocaleDateString(),
        description: movements.description,
        amount: `${movements.amount} €`,
        balance: `${movements.balance} €`,
    };
};

export const mapMovementsListApiToVm = movementsList => {
    return movementsList.map(movements => 
        mapMovementsApiToVm(movements));
}