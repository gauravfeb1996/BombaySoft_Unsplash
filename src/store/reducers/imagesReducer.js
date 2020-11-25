import produce from 'immer';
import { GET_IMAGES_SUCCESS } from '../constants/getImages';

const initialState = {
  images: [],
  totalPages: 0,
  totalImages: 0,
};


const issuesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_IMAGES_SUCCESS:
        draft.images = action.data.results;
        draft.totalPages = action.data.total_pages;
        draft.totalImages = action.data.total;
      break;
      default: {
        return draft;
      }
    }
  });

export default issuesReducer;
