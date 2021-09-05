import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListFromApiToVm } from './movements.mappers';

getMovementsList().then(movementsList => {
    const viewModelMovementsList = mapMovementsListFromApiToVm(movementsList);
    addMovementRows(viewModelMovementsList);
});

