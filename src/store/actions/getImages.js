import { GET_IMAGES_REQUEST, GET_IMAGES_SUCCESS } from '../constants/getImages';

export const getImagesRequest = (pageNo, key) => {
    return {
        type: GET_IMAGES_REQUEST,
        pageNo,
        key,
    };
}

export const getImagesSuccess = (data) => {
    return {
        type: GET_IMAGES_SUCCESS,
        data
    }
}