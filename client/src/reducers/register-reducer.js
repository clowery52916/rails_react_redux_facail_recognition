import { REGISTER_USER, CLEAR_DISPLAY } from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case REGISTER_USER:
            let finalData = {
                name: '',
                faceID: '',
                age:'',
                message: ''
            };

            if (action.payload.Errors) {
                finalData.message = 'error';
            } else if (action.payload.images['0'].transaction.status === 'success') {
                finalData.message = 'success';
            } else if (action.payload.images['0'].transaction.status === 'failure') {
                finalData.message = 'failure';
            }
            return finalData;
        case CLEAR_DISPLAY:
            return {};
        default:
            return state;
    }
}
