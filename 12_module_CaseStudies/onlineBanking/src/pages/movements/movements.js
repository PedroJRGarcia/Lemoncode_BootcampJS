import { getAccount, getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm, mapAccountApiToVm } from './movements.mappers';
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';

const params = history.getParams();
const is = Boolean(params.id);

if(is) {
    getMovementsList(params.id).then(movementsList => {
        const viewModelMovementsList = mapMovementsListApiToVm(movementsList);
        addMovementRows(viewModelMovementsList);
    });

    getAccount(params.id).then(account => {
        const viewModelAccount = mapAccountApiToVm(account);
        onSetValues(viewModelAccount);
    }); 
}