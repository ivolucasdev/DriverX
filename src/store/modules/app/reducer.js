import types from './types';
import produce from 'immer';

const INICIAL_STATE = {
    user: {
        fbId: null,
        nome: null,
        email: null,
        tipo: 'M',
        acessToken: null,
    },
}


function app (state = INICIAL_STATE, action ) {
    switch (action.type) {
        case types.UPDATE_USER: {
            return produce(state, (draft) => {
                draft.user = { ...state.user,  ...action.user}
            });
        }

        default: 
        return state;
    }
}


export default app;