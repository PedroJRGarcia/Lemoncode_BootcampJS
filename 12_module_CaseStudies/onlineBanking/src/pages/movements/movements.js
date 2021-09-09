import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListFromApiToVm } from './movements.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

getMovementsList().then(movementsList => {
    console.log({ movementsList });
    const viewModelMovementsList = mapMovementsListFromApiToVm(movementsList);
    addMovementRows(viewModelMovementsList);

    // viewModelMovementsList.forEach(movements => {
    //     onUpdateField(`${movements.id}`, event => {
    //         const route = event.target.value;
    //         history.push(route);
    //     });
    // }); 
    //movement-list
});