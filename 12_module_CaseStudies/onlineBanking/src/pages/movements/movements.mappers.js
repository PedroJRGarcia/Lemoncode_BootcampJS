const mapMovementsFromApiToVm = movements => {
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

export const mapMovementsListFromApiToVm = movementsList => {
    return movementsList.map(movements => 
        mapMovementsFromApiToVm(movements));
}