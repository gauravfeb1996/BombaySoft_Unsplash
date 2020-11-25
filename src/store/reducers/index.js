import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';


const rootReducer = combineReducers({
    imagesStore: imagesReducer,
});

export default rootReducer;
