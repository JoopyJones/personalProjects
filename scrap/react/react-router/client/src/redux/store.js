//system stuff
import {configureStore} from '@reduxjs/toolkit';

//reducer slices
import cardListReducer from './reducers/cardListSlice';

export default configureStore({
    reducer: {
        cardList: cardListReducer
    }
});